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
        element: <Services></Services>
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
