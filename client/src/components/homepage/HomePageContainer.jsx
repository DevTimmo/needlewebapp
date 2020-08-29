import React from 'react';
import Form from './Form'
import ResultTable from './Table'
import NavToDBPost from './NavToDBPost'

export default class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            syringes: [],
            value: ''
        };
    }

    saveData = (data) => {
        this.setState({ syringes: data });
    }

    render() {
        return (

            <>
                <Form saveData={this.saveData} />
                <ResultTable data={this.state.syringes} />
                <NavToDBPost />
            </>

        );
    }
}