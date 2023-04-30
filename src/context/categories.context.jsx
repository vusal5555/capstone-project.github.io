import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data';

import { getCollectionAndDocuments } from '../utils/firebase.utils';

export const CategoriesContext = createContext({
  categoryMaps: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoryMaps, setCategory] = useState({});

  useEffect(() => {
    const getDocument = async () => {
      const categoryMap = await getCollectionAndDocuments(
        'categories',
        SHOP_DATA
      );

      setCategory(categoryMap);
    };

    getDocument();
  }, []);

  const value = { categoryMaps };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
