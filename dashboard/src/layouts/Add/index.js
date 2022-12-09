import AddProduct from '../../components/AddProducts/AddProducts';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../components/Header/Header';

function Add() {
  return ( 
    <div>
      <Header/>
      <h1 style={{textAlign: "center"}}>Create tours</h1>
      <AddProduct />
    </div>
   );
}

export default Add;