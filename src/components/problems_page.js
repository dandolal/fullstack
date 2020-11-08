import React from 'react';
import {Link} from "react-router-dom";
import {problems_list, user} from "./globals";
import Header from "../model";
import {problems_background, problem_card_style} from "./styles";


const problem_card = (props) =>{
        return (
            <div style={problem_card_style} onClick={()=>{props.history.push(`/problem/${props.id}`)}}>
                <h3 style={{padding: '4px 8px'}}>{props.problem.name}</h3>
                <p style={{marginLeft: 'auto', marginRight: 'auto'}}>{props.problem.task}</p>
                <p>{props.problem.author}</p>
            </div>
        )
}


class problems_page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header user={user}/>

                <div style={problems_background}>
                    <h1 style={{padding: '8px 16px', opacity: '1'}}>Задачи</h1>
                    <div>
                        {problems_list.map((problem, index) => (
                            problem_card({problem: problem, id: index, history: this.props.history})
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default problems_page;