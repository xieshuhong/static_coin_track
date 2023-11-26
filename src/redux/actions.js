export const SET_INCOME = 'SET_INCOME';
export const SET_EXPENSE = 'SET_EXPENSE';

export const setIncome = income => dispatch => {
    dispatch({
        type: SET_INCOME,
        payload: income,
    });
};

export const setExpense = expense => dispatch => {
    dispatch({
        type: SET_EXPENSE,
        payload: expense
    });
};