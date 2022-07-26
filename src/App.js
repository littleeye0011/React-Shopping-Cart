import data from "./data";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Nav from "./Components/Nav";
import CartItem from "./Components/CartItem";
import { useState } from "react";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Nav countCartItem={cartItems.length} />
      <HomeScreen products={products} onAdd={onAdd} />
      <CartItem cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
}

export default App;
