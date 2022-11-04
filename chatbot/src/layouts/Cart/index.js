import Header from "../../components/cart/Header";
import Cart from "../../components/cart/Cart";
import Footer from "../../components/footer/Footer";

import "./cart.css";

function CartLayout() {
  return (
      <div className="App">
        <Header />
        <section>
          <Cart />
        </section>
        <Footer />
      </div>
  );
}

export default CartLayout;
