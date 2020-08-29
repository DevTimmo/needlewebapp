import React from 'react';
import { withRouter } from 'react-router-dom';

function NavToDBPost() {

    return (
        <p> Click <a href="/submitproduct">here</a> to submit a new product</p>
    );
}
export default withRouter(NavToDBPost);