import React from 'react';

import Header from './Header';
import Form from './Form';
import ResultTable from './Table';
import NavToDBPost from './NavToDBPost';
import ReactGA from 'react-ga'

export default class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            syringes: [],
            value: ''
        };
        ReactGA.initialize('G-Z9Y2PKWCXW');
        ReactGA.pageview(window.location.pathname);
    }



    saveData = (data) => {
        this.setState({ syringes: data });
    }

    render() {
        return (
            <>
                <Header />
                <Form saveData={this.saveData} />
                <ResultTable data={this.state.syringes} />
                <NavToDBPost />
            </>
        );
    }
}