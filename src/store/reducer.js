const initialState = {
    digits: "",
    password: '1234'
};

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case "INPUT":
            return {...state, digits: state.digits + action.value};
        default:
            return state;
    }
};

export default reducer;