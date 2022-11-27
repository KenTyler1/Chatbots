import config from '../config/routes';

//Layouts
import {CartLayout, Products, Detail, LoginLayout} from '../layouts';

// Pages
import Home from '../pages/Home';
import CartPage from '../pages/Cart';
import Product from '../pages/Product';
import Details from '../pages/Details';
import LoginPage from '../pages/Login';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Product, layout: Products },
    { path: config.routes.products_id, component: Details, layout: Detail},
    { path: config.routes.cart, component: CartPage, layout: CartLayout},
    { path: config.routes.login, component: LoginPage, layout: LoginLayout}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
