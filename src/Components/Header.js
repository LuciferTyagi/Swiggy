import RESLOGO from "../images/RESLOGO.png"
import { useState, useEffect ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/UserContext";
const Header = () => {

    let btnName = "Log-In";

    const [btnNameReact, setBtnNameReact] = useState("Log-In");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    // If there is no depedency array so it will be called on every render
    // If there is dependency array and its empty [] => useEffect is called on initial  render(just once)
    // If dependecy array is not empty [btnNameReact] => so it will be called whenever the depedency array is updated in this case btnNameReact.
    
    useEffect(() => {

    }, []);

    return (
        <div className="flex justify-between bg bg-pink-300 shadow-lg mb-6">

            <div className="logo-container">

                <img className="w-24"

                    src={RESLOGO}

                    alt="Logo"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online status:{onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Log-In" ? setBtnNameReact("Log-Out") : setBtnNameReact("Log-In");
                    }}
                    >
                        {btnNameReact}</button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;