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

            {props.isLoading && <h4 className='loading'>Loading joke data...</h4>}

            {props.error && (
            <p className="error">Error Message: {props.error}</p>
            )}

            <h1 >Click the button for a random joke!</h1>
            <h2>{props.data.setup}</h2>

            <button className='joke-button' onClick={onClickFeature}>Click Here for the Punchline!</button>
            {props.active ? <Punchline/> : null}
            <button className='joke-button' onClick={ () => window.location.reload(false)}>Click Here for a New Joke!</button>
            
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
