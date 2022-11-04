import Header from "../../components/cart/Header";
import Product from "../../components/cart/Products";
import Footer from "../../components/footer/Footer";


import "./products.css";

function Products() {
  return (
      <div className="App">
        <Header />
        <section>
          <Product />
        </section>
        <Footer />
      </div>
  );
}

export default Products;
