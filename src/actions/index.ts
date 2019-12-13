export type Action = {
    type: string,
    payload?: any
}

export const LoginAction = 'LOGIN'

export const login = (playerName: string): Action => {
    return {
        type: LoginAction,
        payload: playerName
    };

}