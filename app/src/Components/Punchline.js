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
            <h1>{props.data.punchline}</h1>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        data: state.data,
    };
};

export default connect(
    mapStateToProps, 
    {}
)(Punchline);
