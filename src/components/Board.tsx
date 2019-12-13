import React from 'react';
import { connect } from 'react-redux';

type BoardProps = {
    playerName: string;
}

const Board = (props: BoardProps) => {
    return (<div>
        <h1>Hello {props.playerName}</h1>
    </div>)
}

const mapStateToProps = (state: any): BoardProps => {
    return { playerName: state.playerName };
}

export default connect(mapStateToProps)(Board);