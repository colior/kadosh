import React from 'react';
import Login from './Login';
import Board from './Board';
import { connect } from 'react-redux';

type AppProps = {
  playerName: string
}

const App = (props: AppProps) => {
  return (
    <div>
      {props.playerName !== null ? <Board /> : <Login />}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { playerName: state.playerName }
}

export default connect(mapStateToProps)(App);
