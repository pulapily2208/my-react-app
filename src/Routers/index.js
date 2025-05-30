import AuthRequired from "../shared/AuthRequired";
import Home from "../pages/Home";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import Success from "../pages/Success";
import NotFouund from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import OrderList from "../pages/OrderList";
import OrderDetails from "../pages/OrderDetails";
import UpdateCustomer from "../pages/updateCustomer";


export default [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/Category-:id",
    element: Category,
  },
  {
    path: "/ProductDetails-:id",
    element: ProductDetails,
  },
  {
    path: "/Search",
    element: Search,
  },
  {
    path: "/Cart",
    element: Cart,
  },
  {
    path: "/Success",
    element: Success,
  },
  {
    path: "/Register",
    element: AuthRequired.CheckLogged(Register),
  },
  {
    path: "/Login",
    element: AuthRequired.CheckLogged(Login),
  },
  {
    path: "/OrderList",
    element: AuthRequired.CheckNotLogged(OrderList),
  },
  {
    path: "/OrderDetails-:id",
    element: AuthRequired.CheckNotLogged(OrderDetails),
  },
  {
    path: "/UpdateCustomer-:id",
    element: UpdateCustomer,
  },
  {
    path: "*",
    element: NotFouund,
  },
];
