import { createContext, useContext, useState } from 'react';
import { Currency } from '@/types/Currency';

type CurrencyContextType = {
  selectedCurrency: Currency | null;
  setSelectedCurrency: (currency: Currency | null) => void;
  currencies: Currency[];
  setCurrencies: React.Dispatch<React.SetStateAction<Currency[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  infiniteScrollActive: boolean;
  setInfiniteScrollActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const CurrencyContext = createContext<CurrencyContextType>({
  selectedCurrency: null,
  setSelectedCurrency: () => {},
  currencies: [],
  setCurrencies: () => {},
  page: 1,
  setPage: () => {},
  infiniteScrollActive: true,
  setInfiniteScrollActive: () => {},
});

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [page, setPage] = useState<number>(1);
  const [infiniteScrollActive, setInfiniteScrollActive] = useState<boolean>(true);

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        currencies,
        setCurrencies,
        page,
        setPage,
        infiniteScrollActive,
        setInfiniteScrollActive,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
