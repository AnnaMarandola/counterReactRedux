import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    counter: state
});

const addAction = {type:'ADD'};
const removeAction  = {type:'REMOVE'};
const addTenAction = {type: 'ADDTEN'};
const removeTenAction = {type: 'REMOVETEN'};
const resetAction = {type: 'RESET'};


const CounterComponent = ({  counter, dispatch }) => (
            <div>
                <p>{counter}</p>
                <button onClick={() => dispatch(addAction)}>
                    +1
                </button>
                <button onClick={() => dispatch(removeAction)}>
                    -1
                </button>
                <button onClick={() => dispatch(addTenAction)}>
                    +10
                </button>
                <button onClick={() => dispatch(removeTenAction)}>
                    -10
                </button>
                <button onClick={() => dispatch(resetAction)}>
                    reset
                </button>
            </div>
);
    


export default connect(mapStateToProps)(CounterComponent);

 
