import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions'

const Login = (props: any) => {
    return (
        <div>
            <button onClick={() => { props.login('Lior Cohen') }}>click me</button>
        </div>);
}

const mapStateToProps = (state: any) => {
    return state;
}

const mapStateToDispatch = (dispatch: any) => {
    return {
        login: (playerName: string) => dispatch(login(playerName))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login);