import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import start_page from "./components/start_page";
import problems from "./components/problems";
import Header from "./model";
import problem_page from "./components/problem_page";
import solution from "./components/solution";
import EditForm from "./components/edit";




class App extends React.Component {
    render() {
        return (
            <div>

                <BrowserRouter>

                    <div>
                        {/*<navigation/>*/}
                        <Header />
                        <Switch>
                            <Route path="/" component={start_page} exact/>
                            <Route path="/problems" component={problems}/>
                            <Route path ="/problem/:problem_id" component={problem_page}/>
                            <Route path ="/solution/:problem_id" component={solution}/>
                            <Route path="/edit/:problem_id" component={EditForm}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

