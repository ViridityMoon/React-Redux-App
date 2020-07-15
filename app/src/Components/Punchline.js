import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchJokes } from '../actions/actions'



const Punchline = (props) => {

    useEffect(() => {
        props.fetchJokes();
    }, []);

    console.log(props);
    return (
        <div className="Punchline">
            <h1>Punchline</h1>
        </div>
    );
};



export default connect(
    null, 
    {}
)(Punchline);
