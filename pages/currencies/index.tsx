import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { ConvertDatetToPerisan } from '@/utils/ConvertDatetToPerisan';
import CurrenciesHeroSection from '@/components/CurrenciesHeroSection';
import { Container, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useCurrency } from '@/contexts/CurrencyContext';
import { Currency } from '@/types/Currency';

const MAX_INF_SCROLL_PAGES = 4;

export default function CurrenciesPage() {
  const {
    currencies,
    setCurrencies,
    selectedCurrency,
    setSelectedCurrency,
    page,
    setPage,
    infiniteScrollActive,
    setInfiniteScrollActive,
  } = useCurrency();

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const fetchLockRef = useRef(false);
  const fetchedPagesRef = useRef<Set<number>>(new Set());

  const router = useRouter();

  const fetchCurrencies = useCallback(async (pageNum: number) => {
    if (fetchLockRef.current || fetchedPagesRef.current.has(pageNum)) return;

    setLoading(true);
    fetchLockRef.current = true;

    try {
      const response = await axios.get<Currency[]>(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: 'usd',
            per_page: 10,
            page: pageNum,
          },
        }
      );

      const newCurrencies = response.data;

      setCurrencies(prev => [...prev, ...newCurrencies]);
      setHasMore(newCurrencies.length > 0);
      fetchedPagesRef.current.add(pageNum);

      if (pageNum >= MAX_INF_SCROLL_PAGES) {
        setInfiniteScrollActive(false);
      }
    } catch (error) {
      console.error("Failed to fetch currencies:", error);
      setError("Network error or rate limit reached. Try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        fetchLockRef.current = false;
      }, 500);
    }
  }, [setCurrencies, setInfiniteScrollActive]);

//   useEffect(() => {
//     fetchCurrencies(page);
// }, [page, fetchCurrencies]);
useEffect(() => {
  if (page <= MAX_INF_SCROLL_PAGES && !fetchedPagesRef.current.has(page)) {
    console.log('current pages', page)
    fetchCurrencies(page);
  }
}, [page, fetchCurrencies]);
//   Infinite scroll logic
  useEffect(() => {
    if (!infiniteScrollActive || loading) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    });

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, hasMore, infiniteScrollActive, setPage]);


  const handleShowMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);  // Update global state
    await fetchCurrencies(nextPage); // Fetch immediately
  };  

  return (
    <div className="w-100">
      <CurrenciesHeroSection />
      <Container>
        <div
          className="p-4 mt-4"
          style={{ backgroundColor: '#EDEDED', borderRadius: '10px' }}
        >
          {error && <p className="text-center text-danger mt-3">{error}</p>}

          <div className="table-responsive">
            <table className="table table-borderless custom-table-bg">
              <thead className="border-bottom">
                <tr>
                  <th className="py-3 ps-4 w-5" style={{ color: '#777E90' }}>#</th>
                  <th className="py-3 ps-4 w-50" style={{ color: '#777E90' }}>Name</th>
                  <th className="py-3 w-25" style={{ color: '#777E90' }}>Price(USD)</th>
                  <th className="py-3 w-25 text-end pe-4" style={{ color: '#777E90' }}>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {currencies.map((currency, index) => (
                  <tr
                    key={currency.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setSelectedCurrency(currency);
                      router.push(`/currencies/${currency.symbol.toUpperCase()}`);
                      setPage(prev => prev + 1);
                    }}
                  >
                    <td className="py-2 ps-4 align-middle" style={{ color: '#777E90' }}>{index + 1}</td>
                    <td className="py-2 ps-4 align-middle d-flex align-items-center gap-2">
                      <img src={currency.image} alt={currency.name} width={24} height={24} />
                      <div>{currency.name}</div>
                      <small className="text-muted">{currency.symbol.toUpperCase()}</small>
                    </td>
                    <td className="py-2 align-middle">${currency.current_price.toLocaleString()}</td>
                    <td className="py-2 align-middle text-end pe-4">
                      {ConvertDatetToPerisan(currency.last_updated)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sentinel for infinite scroll */}
          {infiniteScrollActive && <div ref={sentinelRef} style={{ height: '1px' }} />}

          {/* Show More button */}
          {!infiniteScrollActive && hasMore && !loading && (
            <div className="text-center mt-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <Button
                variant="primary-2"
                className="px-6"
                onClick={handleShowMore}
              >
                Show More
              </Button>
            </div>
          )}

          {loading && <p className="text-center text-white mt-3">Loading...</p>}
        </div>
      </Container>
    </div>
  );
}
