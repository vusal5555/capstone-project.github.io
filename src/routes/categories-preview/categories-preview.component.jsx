import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { selectCategories } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  // const { categoryMaps } = useContext(CategoriesContext);
  const categoryArray = useSelector(selectCategories);

  return (
    <Fragment>
      {Object.keys(categoryArray).map(title => {
        const products = categoryArray[title];
        let idValue;
        products.map(product => {
          idValue = product;
        });

        return (
          <CategoryPreview
            key={idValue.id}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
