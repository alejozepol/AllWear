import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [products, setProducts] = useState({
    'allProducts': [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return products;
};

export default useInitialState;
