import "./ProductCard.css";

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const ProductCard = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="productCard__price">
          <h5>฿{formatNumber(product.price)}</h5>
        </div>
        <button className="ProductCard__button" onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
