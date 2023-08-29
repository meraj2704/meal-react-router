import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/About/about';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Burger from './Components/Burger/Burger';
import Pizza from './Components/Pizza/Pizza';
import Regular from './Components/Regula/Regular';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Home></Home>,
    children:[
      {
        path : '/about',
        element : <About></About>
      },
      {
        path:'/services',
        element: <Services></Services>,
        children : [
          {
            path : 'burger',
            element: <Burger></Burger>,
            loader : ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Burger')
          },
          {
            path: 'pizza',
            element: <Pizza></Pizza>
          },
          {
            path: 'regular',
            element: <Regular></Regular>,
            loader : () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Pizza')
          }
        ]
      },
      {
        path: '/contact',
        element : <Contact></Contact>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
