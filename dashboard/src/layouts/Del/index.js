import DeleteProducts from "../../components/DeleteProducts/DeleteProducts";
import Header from '../../components/Header/Header';

function DeleteProduct() {
    return ( 
        <div>
            <Header />
            <h1 style={{textAlign: "center"}}><u>Editing tours</u></h1>
            <DeleteProducts/>
        </div>
     );
}

export default DeleteProduct;