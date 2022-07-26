import "./ProductCard.css";

const ProductCard = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="productCard__price">
          <h5>฿{product.price}</h5>
        </div>
        <button className="ProductCard__button" onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
