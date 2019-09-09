export const loginTypes = {
    LOGIN_UPDATE: 'LOGIN_UPDATE'
};

export const updateId = (id: number) => (dispatch: any) => {
    dispatch({
        payload: {
            id
        },
        type: loginTypes.LOGIN_UPDATE
    })
}