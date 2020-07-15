import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchJokes, toggleActive } from '../actions/actions';

import Punchline from './Punchline';


const Joke = props => {
    
    useEffect(() => {
        props.fetchJokes();
    }, []);

    const onClickFeature = e => {
        e.preventDefault();
        props.toggleActive(props)
    };

    console.log(props);
    return (
        <div className="Joke">
            <h1>Click the button for a randome joke!</h1>
            <h2>{props.data.setup}</h2>
            <button onClick={onClickFeature}></button>
            {props.active ? <Punchline/> : null}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        active: state.active,
        data: state.data,
        error: state.error,
    };
};

export default connect(
    mapStateToProps, 
    { fetchJokes, toggleActive }
)(Joke);
