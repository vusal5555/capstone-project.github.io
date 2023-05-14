import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCollectionAndDocuments } from '../../utils/firebase.utils';
import SHOP_DATA from '../../shop-data';
import { setCategories } from '../../store/categories/category.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getDocument = async () => {
      const categoriesArray = await getCollectionAndDocuments(
        'categories',
        SHOP_DATA
      );
      // const categoryMap = await getCollectionAndDocuments(
      //   'categories',
      //   SHOP_DATA
      // );

      dispatch(setCategories(categoriesArray));
    };

    getDocument();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  );
};

export default Shop;
