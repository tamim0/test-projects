import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import ContactMe from "../../components/ContactMe/ContactMe";
import Home from "../../components/Home/Home";
import Main from "../../components/Main/Main";
import Projects from "../../components/Projects/Projects";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        },
        {
            path:'/contact',
            element:<ContactMe></ContactMe>
        }
      ]
    },
  ]);