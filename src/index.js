import React , { lazy , Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Error from "./Components/Error.js"
import Contact from "./Components/Contact.js"
import ResMenu from "./Components/ResMenu.js"
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import UserContext from "./utlis/UserContext.js";
import { useState } from "react";
// import Grocery from "./Components/Grocery.js";



// Chunking
// Code Spliting        -> you have to chunk your application
// Dynamic Bundling
// Lazy Loading
// On Demand 

const Grocery =  lazy(() => import("./Components/Grocery.js"));

const AppLayout = () => {

    const [userName , setUserName] = useState();

    //authentication
    useEffect(()=>{
        const data = {
            name: "Yagyansh Tyagi",
        };
        setUserName(data.name);
    },[]);
    return (
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
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
        {
            path:"/contact",
            element:<Contact />,
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>,
        },

        {
            path:"/restaurants/:resId",
            element:<ResMenu />,
        },
    ],

    errorElement:<Error/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/>);
