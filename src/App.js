import { useState } from "react";
import "./App.css";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
// import Cart from "./components/Cart/Cart";
import Cart from "./components/Cart/Cart";
// import CartProvider from "src/components/store/CartProvider.js";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}

        <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
