const initialState = {
    digits: "",
    password: '1234'
};

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case "INPUT":
            return {...state, digits: (state.digits + action.value).substring(0, 4)};
        case "DELETE":
            return {...state, digits: state.digits.substr(0, state.digits.length - 1)};
        default:
            return state;
    }
};

export default reducer;