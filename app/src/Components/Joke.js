import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchJokes, toggleActive } from '../actions/actions';

import Punchline from './Punchline';


const Joke = (props) => {
    
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
            <h1>Joke</h1>
            <button onClick={onClickFeature}></button>
            {props.active ? <Punchline/> : null}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        active: state.active,

    };
};

export default connect(
    mapStateToProps, 
    { fetchJokes }
)(Joke);
