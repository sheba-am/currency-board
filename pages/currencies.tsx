import { useEffect, useState } from 'react';
import axios from 'axios';
import { ConvertDatetToPerisan } from '@/utils/ConvertDatetToPerisan';
import CurrenciesHeroSection from '@/components/CurrenciesHeroSection';

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
    <div className="container my-5">
      <CurrenciesHeroSection />

      <div
        className="p-4 mt-4"
        style={{
          backgroundColor: '#808080',
          borderRadius: '10px'
        }}
      >
        <div className="table-responsive" >
          <table className="table table-borderless custom-table-bg" >
            <thead className="border-bottom">
              <tr>
                <th scope="col" className="py-3 ps-4 w-5">#</th>
                <th scope="col" className="py-3 ps-4 w-50">Name</th>
                <th scope="col" className="py-3 w-25">Price(USD)</th>
                <th scope="col" className="py-3 w-25 text-end pe-4">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((currency, index) => (
                <tr key={currency.id}>
                  <td className="py-2 ps-4 align-middle">{index + 1}</td>
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

        {!loading && (
          <div className="text-center mt-4">
            <button className="btn btn-outline-light px-4" onClick={() => setPage(prev => prev + 1)}>
              Show More
            </button>
          </div>
        )}

        {loading && <p className="text-center text-white mt-3">Loading...</p>}
      </div>
    </div>
  );
}
