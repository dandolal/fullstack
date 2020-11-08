import React from 'react'
import {problems_list, user} from "./globals";
import Header from "../model";

class login extends React.Component {
    constructor(props) {
        super(props);
        this.login = '';
        this.password = '';

        this.state = {isLogged: user.isLogged, login: user.name, password: ''};

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginChange(event) {
        this.setState({login: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.password});
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({isLogged: true, login: this.state.login})
        user.name = this.state.login;
        user.isLogged = true

        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <Header user={user}/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Логин:
                        <input type="text" value={this.state.login} onChange={this.handleLoginChange}/>
                        Пароль:
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </label>
                    <button type="submit" value="Войти" className="btn btn-primary">Войти</button>
                </form>
            </div>
        );
    }
}

export default login