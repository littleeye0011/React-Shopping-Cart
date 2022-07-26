import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";

const HomeScreen = (props) => {
  const { products, onAdd } = props;
  return (
    <div className="products_wrapper">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default HomeScreen;
