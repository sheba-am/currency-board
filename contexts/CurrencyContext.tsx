// CurrencyContext.tsx
import { createContext, useContext, useState } from 'react';
import { Currency } from '@/types/Currency';

type CurrencyContextType = {
  selectedCurrency: Currency | null;
  setSelectedCurrency: (currency: Currency | null) => void;
  currencies: Currency[];
  // setCurrencies: (currencies: Currency[]) => void;
  setCurrencies: React.Dispatch<React.SetStateAction<Currency[]>>;

};

const CurrencyContext = createContext<CurrencyContextType>({
  selectedCurrency: null,
  setSelectedCurrency: () => {},
  currencies: [],
  setCurrencies: () => {},
});

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency, currencies, setCurrencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
