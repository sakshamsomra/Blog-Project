import React from "react";
import { Link, useNavigate } from "react-router-dom";
import home from './photos/home.png'
import login from './photos/login.png'
import category from './photos/category.png'
import sell from './photos/sell.png'
import items from './photos/items.png'
import add from './photos/add.png'
import userp from './photos/user.png'
import edit from './photos/edit.png'
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Navbar() {

    axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://blog-project-server-phi.vercel.app/api/username").then((response) => {


            setUser(response.data);
            console.log(response.data);

        });
    }, []);


    const log = () => {

        axios.post("https://blog-project-server-phi.vercel.app/api/logout").then((response) => {
            if (response.data.message) {
                alert(response.data.message);
            } else{
                alert("Logged out");
                navigate("/");
            }

        })

    }


    const amount = useSelector(state => state.amount)

    return (

        <div class="nav-outer-container">
            <div class="nav">
                <Link to={"/home"} id="home" ><div id="home"><img src={home} id="home"></img> Welcome, {user}</div></Link>

                <div class="navhold">
                    <Link to={"/sign"}><div id="navitem"> <img src={add}></img> SignIn</div></Link>
                    <Link ><button id="navitem" onClick={log} className="invisible-button"> <img src={login}></img> LogOut</button></Link>
                    <Link to={"/write"}><div id="navitem"><img src={edit}></img>Start Writing</div></Link>
                    <Link to={"/myinfo"}><div id="navitem"><img src={userp}></img>My Info</div></Link>
                </div>
            </div>
        </div>


    )
}
