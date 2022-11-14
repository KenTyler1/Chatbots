import config from '../config/routes';

//Layouts
import {Products, AddProducts, DeleteProducts, UpdateProducts} from '../layouts';

// Pages
import Home from '../pages/Home';
import Product from '../pages/Product';
import AddProduct from '../pages/AddProduct';
import DelProduct from '../pages/DelProduct';
import UpdateProduct from '../pages/UpdateProduct';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Product, layout: Products },
    { path: config.routes.addproducts, component: AddProduct, layout: AddProducts},
    { path: config.routes.deleteproducts, component: DelProduct, layout: DeleteProducts},
    { path: config.routes.updateproducts, component: UpdateProduct, layout: UpdateProducts},

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
