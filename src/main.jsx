import './index.css'
import Home from "./pages/Home.jsx"
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ApplyLoan from './pages/ApplyLoan.jsx';
import Blog from './pages/Blog.jsx';
import Faq from './pages/Faq.jsx';
import Loan from './pages/Loan.jsx';
import Layout from './components/Layout.jsx';
import App from './App.jsx';



const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout />,
    children:
    [
      {
        path: "/",
        element: <App/>,
      },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "applyloan",
    element: <ApplyLoan/>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "faq",
    element: <Faq/>,
  },
  {
    path: "loan",
    element: <Loan/>,
  },
]
  }
]);




const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
)


