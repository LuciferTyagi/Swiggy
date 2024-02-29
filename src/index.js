import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Error from "./Components/Error.js"
import Contact from "./Components/Contact.js"
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";







const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
{
    path:"/",
    element:<AppLayout />,
    children:[
        {
            path:"/",
            element:<Body />
        },
        {
            path:"/about",
            element:<About/>,
        },
        // {
        //     path:"/contact",
        //     element:<Contact />,
        // },
    ],

    errorElement:<Error/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/>);
