import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import HomePage from './routes/homepage/HomePage.jsx';

import DashBoardPage from './routes/dashboardPage/DashBoardPage.jsx';
import ChatPage from './routes/chatPage/chatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import ProblemLayout from './layouts/problemLayout/ProblemLayout.jsx';
import { SignIn, SignUp } from '@clerk/clerk-react';


const PUBLISHABLE_KEY = "pk_test_Zmlyc3QtZG92ZS0xNS5jbGVyay5hY2NvdW50cy5kZXYk"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



const router = createBrowserRouter([
  {
   element:<RootLayout/>,
    children:[
{
  path: "/",element:<HomePage/>,
},
{
  path: "/sign-in/*",element:<SignIn/>,
},
{
  path: "/sign-up/*",element:<SignUp/>,
},
{
  element: <ProblemLayout/>,
  children: [
    {
      path: "/dashboard",
      element: <DashBoardPage/>,
    },
    {
      path:"/dashboard/chats/:id",
      element:<ChatPage/>,
    }
  ]
}

    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
);
