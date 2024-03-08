import RESLOGO from "../images/RESLOGO.png"
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
const Header = () => {

    let btnName = "Log-In";

    const[btnNameReact ,setBtnNameReact ] = useState("Log-In");
    const onlineStatus = useOnlineStatus();
    // If there is no depedency array so it will be called on every render
    // If there is dependency array and its empty [] => useEffect is called on initial  render(just once)
    // If dependecy array is not empty [btnNameReact] => so it will be called whenever the depedency array is updated in this case btnNameReact.
    useEffect(()=>{

    },[]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src= {RESLOGO}
                    
                    alt="Logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online status:{onlineStatus ? "🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                        </li>
                    <li>
                        <Link to="/about">About us</Link>
                        </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                        </li>

                        <li>
                        <Link to="/grocery">Grocery</Link>
                        </li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{
                      btnNameReact === "Log-In" ? setBtnNameReact("Log-Out") : setBtnNameReact("Log-In") ;
                        }}
                        >
                            {btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;