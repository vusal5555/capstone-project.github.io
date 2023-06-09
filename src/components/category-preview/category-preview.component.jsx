import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  CategoryLink,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryLink to={title}>{title.toUpperCase()}</CategoryLink>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
