import React from 'react';
import problems from "./components/problems";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (

            <div className="w3-bar w3-black  w3-card" id="myNavbar">
                <Link to="/" className="w3-bar-item"
                   style={{
                       padding: '8px 16px',
                       fontfamily: 'Gloria Hallelujah',
                       fontweight: 100,
                       fontsize: 'x-large',
                       textdecoration: 'none'
                   }}>
                    astro-problems
                </Link>
                <div>
                    <Link to="/problems"
                          className="w3-bar-item w3-button w3-padding-16"><i
                        className="fab fa-wpexplorer"></i> Задачи</Link>
                </div>


            </div>

        )
    }
}

export default Header;