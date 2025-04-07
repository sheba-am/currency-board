import { useEffect, useState } from 'react';
import axios from 'axios';
import { ConvertDatetToPerisan } from '@/utils/ConvertDatetToPerisan';

type Currency = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  last_updated: string;
};

export default function CurrenciesPage() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCurrencies(page);
  }, [page]);

  const fetchCurrencies = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`, {
          params: {
            vs_currency: 'usd',
            per_page: 10,
            page: pageNum
          }
        }
      );
      setCurrencies(prev => [...prev, ...response.data]);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="mb-4">Currencies</h1>
      <div className="row">
        {currencies.map(currency => (
          <div key={currency.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <img src={currency.image} alt={currency.name} width={40} height={40} className="mb-2" />
                <h5>{currency.name} ({currency.symbol.toUpperCase()})</h5>
                <p className="mb-1">💰 ${currency.current_price}</p>
                <p className="text-muted small">Last updated: {currency.last_updated}</p>


              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
}
