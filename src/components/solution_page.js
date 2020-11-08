import React from 'react';
import {problems_list} from "./globals";
import {Link} from "react-router-dom";

class solution_page extends React.Component {
    constructor({match, location}) {
        super();
        const {params: {problem_id}} = match;
        this.id = problem_id;
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Я {problems_list[this.id].name} задача и ее решение </h1>
                </div>
                <div>
                    <Link to={`/problem/${this.id}`} className="btn btn-primary">Условие</Link>
                </div>
            </div>
        )
    }
}

export default solution_page;