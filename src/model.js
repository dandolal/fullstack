import React from 'react';
import problems_page from "./components/problems_page";
import {Link} from "react-router-dom";
import {user} from "./components/globals";

const user_button = (props) => {
    return (
        <Link to={`/profile/${props.user.name}`}
              className="w3-bar-item w3-button w3-padding-16"><i
            class="far fa-user"></i><b> {props.user.name}</b></Link>
    )
}

const login_button = (props) => {
    return (
        <Link to={`/login`} className="w3-bar-item w3-button w3-padding-16"><i
            className="fas fa-sign-in-alt"></i>
            Войти</Link>
    )
}

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let button;
        if (this.props.user.isLogged) {
            console.log(this.props.user.isLogged);
            console.log(this.props.user.name);
            button = user_button(this.props);
        } else
            button = login_button();
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
                <div className="w3-right w3-hide-small w3-hide-medium">

                    <Link to="/problems_page"
                          className="w3-bar-item w3-button w3-padding-16"><i
                        className="fab fa-wpexplorer"></i> Задачи</Link>

                    {button}
                </div>


            </div>

        )
    }
}

export default Header;