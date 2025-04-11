import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { ConvertDatetToPerisan } from '@/utils/ConvertDatetToPerisan';
import CurrenciesHeroSection from '@/components/CurrenciesHeroSection';
import { Container, Button } from 'react-bootstrap';

import { Currency } from '@/types/Currency'; // Assuming you have this type

export default function CurrenciesPage() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [infiniteScrollActive, setInfiniteScrollActive] = useState(true); // Tracks if infinite scroll is active

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const fetchLockRef = useRef(false);

  const fetchCurrencies = useCallback(async (pageNum: number) => {
    if (fetchLockRef.current) return;

    setLoading(true);
    fetchLockRef.current = true;

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: 'usd',
            per_page: 10, // Number of items per page
            page: pageNum,
          },
        }
      );

      const newCurrencies = response.data;
      setCurrencies(prev => [...prev, ...newCurrencies]);
      setHasMore(newCurrencies.length > 0);

      // Deactivate infinite scroll after page 4
      if (pageNum >= 4) {
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
  }, []);

  // Fetch data when `page` changes
  useEffect(() => {
    fetchCurrencies(page);
  }, [page, fetchCurrencies]);

  // Infinite scroll logic
  useEffect(() => {
    if (!infiniteScrollActive || loading) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1); // Increment page for next fetch
      }
    });

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, hasMore, infiniteScrollActive]);

  return (
    <div className="w-100">
      <CurrenciesHeroSection />
      <Container>
        <div
          className="p-4 mt-4"
          style={{
            backgroundColor: '#EDEDED',
            borderRadius: '10px'
          }}
        >
          {error && <p className="text-center text-danger mt-3">{error}</p>}

          <div className="table-responsive">
            <table className="table table-borderless custom-table-bg">
              <thead className="border-bottom">
                <tr>
                  <th scope="col" className="py-3 ps-4 w-5" style={{ color: '#777E90' }}>#</th>
                  <th scope="col" className="py-3 ps-4 w-50" style={{ color: '#777E90' }}>Name</th>
                  <th scope="col" className="py-3 w-25" style={{ color: '#777E90' }}>Price(USD)</th>
                  <th scope="col" className="py-3 w-25 text-end pe-4" style={{ color: '#777E90' }}>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {currencies.map((currency, index) => (
                  <tr key={currency.id}>
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

          {/* Sentinel for infinite scroll (active only for pages < 4) */}
          {infiniteScrollActive && <div ref={sentinelRef} style={{ height: '1px' }} />}

          {/* Show More button after infinite scroll stops */}
          {!infiniteScrollActive && hasMore && !loading && (
            <div className="text-center mt-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <Button
                variant="primary-2"
                className="px-6"
                onClick={() => setPage(prev => prev + 1)}
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
