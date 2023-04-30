import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoryMaps } = useContext(CategoriesContext);
  return (
    <Fragment key={categoryMaps.id}>
      {Object.keys(categoryMaps).map(title => {
        const products = categoryMaps[title];

        return (
          <CategoryPreview title={title} products={products}></CategoryPreview>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
