
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
 

import NotFound from "./pages/notFaund/notFaund";
import Login from "./pages/login/Login";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Cart from "./pages/cart/cart";
import GetProductByid from "./pages/getProductById/getProductByid";
import AllProduct from "./pages/allProduct/allProduct";
import Acaunt from "./pages/accaunt/acaunt";


const App = () => {
  const router = createBrowserRouter([
   
    {
      path: "/",
      element: (
        
          <Layout />
      
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/:id",
        element : <GetProductByid />
      },
      {
        path: "/see_All_Product",
        element: <AllProduct />
      },
      {
        path: '/acaunt/:id',
        element: <Acaunt />

      },
    
        {
          path: '*',
          element: (
              
                <NotFound />
            
            ),
          }
      ],
    },
  
 
  ]);

  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
