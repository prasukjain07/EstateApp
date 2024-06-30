import {Link} from "react-router-dom";
import { useState } from "react";
import "./navbar.scss"
import  {userData} from "../../lib/dummydata"

function Navbar(){
    const [open, setOpen] = useState(false);
    const user= true;
return(
    <nav>
        <div className="left">
            <Link to="/" className="logo" >
                <img src="/logo.png" alt="logo"/>
                <span>Lama Estate</span>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/list">Agents</Link>
        </div>
        <div className="right">
            {user ? (
                <div className="user">
                    <img src={userData.img}/>
                    <span>{userData.name}</span>
                    <Link to="/profile" className="register">Profile</Link>
                </div>
            ) : (
                <>
                    <a href="/">Sign in</a>
                    <a className="register" href="/">
                        Sign Up
                    </a>
                </>
            )}


            <div className="menuIcon">
                <img 
                src="menu.png" 
                alt="" 
                onClick={() => setOpen((prev)=> !prev)}
                />
            </div>
            <div className={open ? "menu active" : "menu"}>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/list">Agents</Link>
                <a href="/">Sign in</a>
                <a href="/">Sign Up</a> 
            </div>
        </div>
    </nav>
)
}
export default Navbar;