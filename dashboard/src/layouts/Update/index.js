import UpdateProduct from "../../components/UpdateProduct/UpdateProduct";
import Header from '../../components/Header/Header';

function UpdateProducts() {
  return (
    <div>
      <Header/>
      <h1 style={{textAlign: "center"}}>Update tours</h1>
      <UpdateProduct />
    </div>
  );
}

export default UpdateProducts;
