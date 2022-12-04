import config from '../config/routes';

//Layouts
import {CartLayout, Products, Detail, LoginLayout, Signup, UserDetail, ResetLoginLayout} from '../layouts';

// Pages
import Home from '../pages/Home';
import CartPage from '../pages/Cart';
import Product from '../pages/Product';
import Details from '../pages/Details';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/Signup';
import UserDetailPage from '../pages/Userdetail';
import ResetPage from '../pages/Reset';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Product, layout: Products },
    { path: config.routes.products_id, component: Details, layout: Detail},
    { path: config.routes.cart, component: CartPage, layout: CartLayout},
    { path: config.routes.login, component: LoginPage, layout: LoginLayout},
    { path: config.routes.signup, component: SignUpPage, layout: Signup},
    { path: config.routes.userdetail, component: UserDetailPage, layout: UserDetail},
    { path: config.routes.resetpass, component: ResetPage, layout: ResetLoginLayout},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
