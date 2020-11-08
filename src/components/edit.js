import React from 'react';
import {problems_list, user} from "./globals";
import Header from "../model";

class EditForm extends React.Component {
    constructor({match, location}, props) {
        super(props);
        const {params: {problem_id}} = match;
        this.id = problem_id;

        this.state = {value: problems_list[this.id].name};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        problems_list[this.id].name = this.state.value;
        this.props.history.push(`/problem/${this.id}`)
    }

    render() {
        return (
            <div>
                <Header user={user}/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Название:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Сохранить" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}

export default EditForm