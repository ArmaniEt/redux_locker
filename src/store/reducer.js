const initialState = {
    digits: "",
    password: '1234',
    access_granted: false,
    access_denied: false
};

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case "INPUT":
            return {...state, digits: (state.digits + action.value).substring(0, 4)};
        case "DELETE":
            return {...state, digits: state.digits.substr(0, state.digits.length - 1)};
        case "COMPARE":
            let access_granted = state.digits === state.password;
            let access_denied = state.digits !== state.password;
            return {...state, access_granted: access_granted, access_denied: access_denied};
        default:
            return state;
    }
};

export default reducer;