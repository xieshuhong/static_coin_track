import {SET_INCOME, SET_EXPENSE} from './actions';

const initialState = {
    income: 0,
    expense: 0
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INCOME:
            return {...state, income: state.income + action.data};
        case SET_EXPENSE:
            return {...state, expense: action.data};
        default:
            return state;
    }
}

export default userReducer;