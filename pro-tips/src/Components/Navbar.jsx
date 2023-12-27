import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=> {
    return(
        <>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "1vh", backgroundColor: "blue"}}>
                <Link to={"/"} style={{padding : "2vh",  color: "black" , textDecoration: "none"}}><h1>Kalvium</h1></Link>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Link to={"/contact"} style={{padding : "2vh",  color: "black" , textDecoration: "none"}}><h1>Contact</h1></Link>
                    <Link to={"/form"} style={{padding : "2vh", color: "black" , textDecoration: "none"}}> <h1>Registration Form</h1> </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;