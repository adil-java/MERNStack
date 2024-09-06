import { useEffect, useState } from "react";

const useCurrencyInfo = (fromCurrency) => {
  const [currencyData, setCurrencyData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API or other source
    const fetchData = async () => {
      // Example response
      const data = {
        usd: { pkr: 276.35, eur: 0.94, gbp: 0.78 },
        pkr: { usd: 0.0036, eur: 0.0034, gbp: 0.0028 },
      };
      setCurrencyData(data[fromCurrency]);
    };

    fetchData();
  }, [fromCurrency]);

  return currencyData;
};

export default useCurrencyInfo;