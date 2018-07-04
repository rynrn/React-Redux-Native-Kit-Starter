
const initialState = {
    isLoggedIn: false,
    hasSkippedLogin: false,
    id: null,
    name: null
};

export const userReducer = (state = initialState, {type, payload}) => {
    switch(type){
        default:
            return state;
    }    
};