import React from 'react'
import {user} from "./globals";
import Header from "../model";

class profile extends React.Component{
    constructor({match, props}) {
        super(props);
        const {params: {user_name}} = match;
        this.login = '';
        this.password = '';
        this.state = {isLogged: user.isLogged, login: user.name, password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        user.name = 'Петя'
        user.isLogged = false

        this.props.history.push(`/`)
    }
    render() {
        console.log(user.isLogged)
        console.log(user.name)
        return (
            <div>
                <Header user={user}/>
                <div className="w3-row gradient-bg"></div>
                <div className="w3-row gradient-bg">
                    <div className="w3-col l2 m1"><p></p></div>
                    <div className="w3-col l8 m10">
                        <div className="w3-light-gray" >
                            <p className="w3-xxlarge">{user.name}</p>

                            <form onSubmit={this.handleSubmit}>

                                <button type="submit" value="Выйти" className="w3-button w3-black w3-hover-gray">Выйти</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w3-col l2 m1"><p></p></div>
                <div className="w3-row gradient-bg"></div>

            </div>
        )
    }
}

export default profile