import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import Aboutus from './Aboutus';
import Ourje from './Ourje';
import Management from './Management Speack';
import OurTeam from './OurTeam';
import SocialResponsibility from './Social_Responsibility';
import Newsletter from './Newsletter';
let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/aboutus",
    element: <Aboutus />
  },
  {
    path: "/our-journey",
    element: <Ourje />
  },
  {
    path: "/management",
    element: <Management/>
  },
  {
    path: "/our-team",
    element: <OurTeam/>
  },
  {
    path : "/csr-social-responsibility",
    element : <SocialResponsibility/>
  },
  {
    path : "/newsletter",
    element : <Newsletter/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
