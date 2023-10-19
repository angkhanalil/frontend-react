import React from "react";
import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login/Login";
import Company from "./Pages/Company/Company";
import CompanyProfile from "./Pages/CompanyProfile/CompanyProfile";
import LayoutProfile from "./layouts/LayoutProfile";
import Products from "./Pages/Products/Products";
import Employees from "./Pages/Employees/Employees";
import EmployeeProfile from "./Pages/Employees/EmployeeProfile";
import ProductDetails from "./Pages/Products/ProductDetails";
import Sorter from "./Pages/Picking/Sorter";
import Orders from "./Pages/Order/Orders";
import Home from "./Pages/Home/Home";
import ProjectOrder from "./Pages/Project/ProjectOrder";
import OrderDetail from "./Pages/OrderDetail/OrderDetail";
import Invoice from "./Pages/OrderDetail/Invoice";
import ProjectInfo from "./Pages/Project/ProjectInfo";
import CreateCompany from "./Pages/Company/CreateCompany";
import NewProduct from "./Pages/Products/NewProduct";
import PickToSort from "./Pages/Shipping/PickToSort";

function ErrorPage() {
  const error = useRouteError();
  return (
    <h1 className="title">
      Error Page : ({error.status} / {error.statusText})
    </h1>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Login /> }],
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/company", element: <Company /> },
      { path: "/products", element: <Products /> },
      { path: "/employees/:companyId", element: <Employees /> },
      {
        path: "/product-details/:companyId/:productId",
        element: <ProductDetails />,
      },
      { path: "/new-product", element: <NewProduct /> },
      { path: "/picking-to-sorter", element: <Sorter /> },
      { path: "/orders", element: <Orders /> },
      { path: "/home", element: <Home /> },
      { path: "/project-orders", element: <ProjectOrder /> },
      { path: "/project-info/:projectId", element: <ProjectInfo /> },

      { path: "/order", element: <OrderDetail /> },
      { path: "/invoice", element: <Invoice /> },
      { path: "/new-company", element: <CreateCompany /> },
      { path: "/pick-to-sort", element: <PickToSort /> },
    ],
  },
  {
    path: "/",
    element: <LayoutProfile />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/company-profile/:companyId", element: <CompanyProfile /> },
      { path: "/employee-profile", element: <EmployeeProfile /> },
    ],
  },
]);

export default router;
