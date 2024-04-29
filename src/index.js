import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'swiper/css';


// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home';
import Blog from './blog/Blog';
import Shop from './shop/Shop';
import SingleProduct from './shop/SingleProduct';
import CartPage from './shop/CartPage';
import SingleBlog from './blog/SingleBlog';
import About from './about/About';
import Contact from './contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      { path:"/", element: <Home />},
      { path:"/blog", element: <Blog />},
      { path:"/blog/:id", element: <SingleBlog />},
      { path:"/shop", element: <Shop />},
      {
        path:"shop/:id", element:<SingleProduct />
      },
      {
        path:"/cart-page", element: <CartPage />
      },
      {
        path:"/about", element: <About />
      },
      {
        path:"/contact", element: <Contact />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
