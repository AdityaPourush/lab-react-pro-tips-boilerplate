import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contacts";
import Form from "./Form";

const AllRoutes = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/form" element={<Form/>}/>
            </Routes>
        </>
    )
}

export default AllRoutes;