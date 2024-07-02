
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
 

import NotFound from "./pages/notFaund/notFaund";
import Login from "./pages/login/Login";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";


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
