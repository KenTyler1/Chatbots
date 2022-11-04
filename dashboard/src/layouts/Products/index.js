import Sidebar from "../../components/Sidebar";
import MainDashProduct from "../../components/MainDashProduct/MainDashProduct";
import RightSide from "../../components/RigtSide/RightSide";

function Products() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashProduct />
        <RightSide />
      </div>
    </div>
  );
}

export default Products;
