import React from 'react';
import {problems_list, user} from "./globals";
import {Link} from "react-router-dom";
import Header from "../model";

class problem_page extends React.Component {
    constructor({match, location}) {
        super();
        const {params: {problem_id}} = match;
        this.id = problem_id;
    }

    render() {
        return (
            <div>

                <div>
                    <Header user={user}/>
                    <div>
                        <h1>Я {problems_list[this.id].name} задача </h1>
                    </div>
                    <div>
                        <Link to={`/solution_page/${this.id}`} className="btn btn-primary">Решение</Link>
                    </div>
                    <div>
                        <Link to={`/edit/${this.id}`} className="btn btn-primary">Редактировать</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default problem_page;