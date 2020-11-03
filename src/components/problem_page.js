import React from 'react';
import {problems_list} from "./globals";
import {Link} from "react-router-dom";

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
                    <h1>Я {problems_list[this.id].name} задача </h1>
                </div>
                <div>
                    <Link to={`/solution/${this.id}`} className="btn btn-primary">Решение</Link>
                </div>
                <div>
                    <Link to={`/edit/${this.id}`} className="btn btn-primary">Редактировать</Link>
                </div>
            </div>
        )
    }
}

export default problem_page;