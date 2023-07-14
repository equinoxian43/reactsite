import React from "react";
import web from "../src/images/img1.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home=()=>{
    return(
        <>
        <Common name="Welcome to Home page" imgsrc={web} visit="/service" btname="Get Started"/>
        </>
    );

};

export default Home;