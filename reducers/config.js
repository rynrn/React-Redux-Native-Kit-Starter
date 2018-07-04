import { ConfigActions } from '../constants/action-types';
const initialState = {
    isPending: false,
    hasError: false,
};

export const configReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ConfigActions.CONFIG_PENDING:
            return {...state, isPending: true, hasError: false};
        case ConfigActions.CONFIG_FAILURE:
            return {...state, isPending: false, hasError: true};
        case ConfigActions.CONFIG_SUCCESS:
            return {...state, isPending: false, hasError: false, ...payload};
        default:
            return state;
    }    
}