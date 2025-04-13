import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { ConvertDatetToPerisan } from '@/utils/ConvertDatetToPerisan';
import CurrenciesHeroSection from '@/components/CurrenciesHeroSection';
import { Container, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useCurrency } from '@/contexts/CurrencyContext';
import { Currency } from '@/types/Currency';

// Maximum number of pages for automatic infinite scroll
const MAX_INF_SCROLL_PAGES = 4;

export default function CurrenciesPage() {

  // Pulling global state and state-setters from context
  const {
    currencies, setCurrencies,
    selectedCurrency, setSelectedCurrency,
    page, setPage,
    infiniteScrollActive, setInfiniteScrollActive
  } = useCurrency();

  // Local component states
  const [loading, setLoading] = useState(false);        // Tracks if data is being loaded
  const [hasMore, setHasMore] = useState(true);         // Tracks if there are more pages
  const [error, setError] = useState<string | null>(null);  // Stores error messages if fetch fails

  // Refs for caching values between renders
  const observer = useRef<IntersectionObserver | null>(null);    // Infinite scroll observer
  const sentinelRef = useRef<HTMLDivElement | null>(null);       // "sentinel" element for infinite scroll trigger
  const fetchLockRef = useRef(false);                            // Locks fetch to prevent duplicate requests
  const fetchedPagesRef = useRef<Set<number>>(new Set());        // Stores pages that have been fetched

  const router = useRouter();

  /**
   * Fetch currencies from API
   */
  const fetchCurrencies = useCallback(async (pageNum: number) => {
    // Avoid fetching the same page twice or fetching while locked
    if (fetchLockRef.current || fetchedPagesRef.current.has(pageNum)) return;

    setLoading(true);
    fetchLockRef.current = true;

    try {
      const response = await axios.get<Currency[]>(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: 'usd',
            per_page: 10,      // 10 results per page
            page: pageNum,
          },
        }
      );

      const newCurrencies = response.data;

      // Append new currencies to existing list
      setCurrencies(prev => [...prev, ...newCurrencies]);

      // If API returned no data, assume no more pages
      setHasMore(newCurrencies.length > 0);

      // Mark this page as fetched
      fetchedPagesRef.current.add(pageNum);

      // Stop infinite scroll after max pages
      if (pageNum >= MAX_INF_SCROLL_PAGES) {
        setInfiniteScrollActive(false);
      }

    } catch (error) {
      console.error("Failed to fetch currencies:", error);
      setError("Network error or rate limit reached. Try again later.");
    } finally {
      setLoading(false);
      // Slight delay before unlocking to prevent burst fetches
      setTimeout(() => { fetchLockRef.current = false; }, 500);
    }
  }, [setCurrencies, setInfiniteScrollActive]);

  /**
   * Restore scroll position if coming back from detail page
   */
  useEffect(() => {
    const savedScroll = sessionStorage.getItem('scrollPosition');
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll, 10));
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);

  /**
   * Fetch currency data when `page` changes
   */
  useEffect(() => {
    if (page <= MAX_INF_SCROLL_PAGES && !fetchedPagesRef.current.has(page)) {
      console.log('current pages', page);
      fetchCurrencies(page);
    }
  }, [page, fetchCurrencies]);

  /**
   * Infinite scroll logic using IntersectionObserver
   */
  useEffect(() => {
    if (!infiniteScrollActive || loading) return;

    // Reset the observer if it exists
    if (observer.current) observer.current.disconnect();

    // Create new IntersectionObserver
    observer.current = new IntersectionObserver(entries => {
      // If the sentinel element is visible and we still have data to load, request next page
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    });

    // Attach observer to the sentinel div
    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      // Cleanup: disconnect observer
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, hasMore, infiniteScrollActive, setPage]);

  /**
   * Fallback manual "Show More" button
   */
  const handleShowMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);  // Update global page
    await fetchCurrencies(nextPage); // Immediately fetch
  };

  /**
   * When a currency row is clicked: navigate to its detail page
   */
  const handleRowClick = (currency: Currency) => {
    setSelectedCurrency(currency); // Save selected currency globally
    router.push(`/currencies/${currency.symbol.toUpperCase()}`); // Go to detail page
    sessionStorage.setItem('scrollPosition', window.scrollY.toString()); // Save scroll position
    setPage(prev => prev + 1); //To avoid automatic page fetching 
  };

  /**
   * Component Render
   */
  return (
    <div className="w-100 currenciesPage ">
      <CurrenciesHeroSection />  {/* Header section (hero) */}

      <section className='currenciesTable'>
        <Container>
          <div>

            <div className="table-responsive">
              <table className="table table-borderless custom-table-bg">
                <thead className="border-bottom">
                  <tr>
                    <th className="py-3 ps-4 w-5 custom-header-text">#</th>
                    <th className="py-3 ps-4 w-50 custom-header-text">Name</th>
                    <th className="py-3 w-25 custom-header-text">Price(USD)</th>
                    <th className="py-3 w-25 text-end pe-4 custom-header-text">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies.map((currency, index) => (
                    <tr
                      key={currency.id}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleRowClick(currency)}
                    >
                      <td className="py-2 ps-4 align-middle custom-header-text">{index + 1}</td>
                      <td className="py-2 ps-4 align-middle d-flex align-items-center gap-2 custom-data-text">
                        <img src={currency.image} alt={currency.name} width={24} height={24} />
                        <div>{`${currency.name} `}
                          <span className="custom-text-muted">{currency.symbol.toUpperCase()}</span>
                        </div>
                      </td>
                      <td className="py-2 align-middle custom-data-text">
                        ${currency.current_price.toLocaleString()}
                      </td>
                      <td className="py-2 align-middle text-end pe-4 custom-data-text">
                        {ConvertDatetToPerisan(currency.last_updated)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Infinite Scroll Trigger */}
            {infiniteScrollActive && <div ref={sentinelRef} style={{ height: '1px' }} />}

            {/* Show More Button (if infinite scroll is disabled) */}
            {!infiniteScrollActive && hasMore && !loading && (
              <div className="text-center mt-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <Button variant="primary-2" className="px-6" onClick={handleShowMore}>
                  Show More
                </Button>
                {error && (
                  <>
                    <p className="text-center text-danger mt-3">{`${error} Please wait for 1 minute`}</p>
                  </>
                )}
              </div>
            )}

            {/* Loading and Status Messages */}
            {loading && <p className="text-center mt-3">Loading...</p>}
            {!hasMore && !loading && <p className="text-center mt-3">No more data to load.</p>}
          </div>
        </Container>
      </section>
    </div>
  );
}
