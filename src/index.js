import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import start_page from "./components/start_page";
import problems_page from "./components/problems_page";
import Header from "./model";
import problem_page from "./components/problem_page";
import solution_page from "./components/solution_page";
import EditForm from "./components/edit";
import login from "./components/login_page";
import profile from "./components/profile_page";
import {user} from "./components/globals"



class App extends React.Component {
    render() {
        console.log({user})
        return (
            <div>

                <BrowserRouter>

                    <div>
                        {/*<navigation/>*/}

                        <Switch>
                            <Route path="/" component={start_page} exact/>
                            <Route path="/problems_page" component={problems_page}/>
                            <Route path ="/problem/:problem_id" component={problem_page}/>
                            <Route path ="/solution_page/:problem_id" component={solution_page}/>
                            <Route path="/edit/:problem_id" component={EditForm}/>
                            <Route path="/login" component={login}/>
                            <Route path="/profile/:user_name" component={profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

