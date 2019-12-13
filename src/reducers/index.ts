import { Action, LoginAction } from '../actions';
import { combineReducers } from 'redux';

const loginReducer = (playerName: any = null, action: Action) => {
    if(action.type === LoginAction){
        return action.payload;
    }
    return playerName;
}

export default combineReducers({
    playerName: loginReducer
});