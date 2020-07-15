import React from 'react';
import { connect } from 'react-redux';




const Punchline = (props) => {

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
