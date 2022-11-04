import Header from "../../components/cart/Header";
import Details from "../../components/cart/Details";
import Footer from "../../components/footer/Footer";

import "./details.css";

function Detail() {
  return (
      <div className="App">
        <Header />
        <section>
          <Details />
        </section>
        <Footer />
      </div>
  );
}

export default Detail;
