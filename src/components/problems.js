import React from 'react';
import {Link} from "react-router-dom";
import {problems_list} from "./globals";

class problems extends React.Component {
    render() {


        return (
            <div>
                <div>
                    <h1>Задачи</h1>
                </div>
                {problems_list.map((problem, index) => (
                    <Link to={`/problem/${index}`} className="btn btn-primary">{problem.name} задача</Link>
                    ))}
            </div>
        )
    }
}

export default problems;