import config from '../config/routes';

//Layouts
import {Products} from '../layouts';

// Pages
import Home from '../pages/Home';
import Product from '../pages/Product';


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Product, layout: Products },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
