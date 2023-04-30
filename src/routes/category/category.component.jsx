import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categoryMaps } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoryMaps[category]);

  useEffect(() => {
    setProducts(categoryMaps[category]);
  }, [category, categoryMaps]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map(product => {
            return (
              <ProductCard product={product} key={product.id}></ProductCard>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Category;
