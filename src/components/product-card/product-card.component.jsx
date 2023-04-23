import Button from '../button/button.component';
import './product-card.styles.scss';
const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
