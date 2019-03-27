const initialState = {
    digits: "",
    password: 1234
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INPUT":
            return {...state, digits: action.value};
        default:
            return state;

    }
};

export default reducer;