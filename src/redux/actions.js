export const SET_INCOME = 'SET_INCOME';
export const SET_EXPENSE = 'SET_EXPENSE';
export const TOTAL_INCOME = 'TOTAL_INCOME';
export const TOTAL_EXPENSE = 'TOTAL_EXPENSE';
export const BALANCE = 'BALANCE';

export const setIncome = income => dispatch => {
    dispatch({
        type: SET_INCOME,
        data: income,
    });
};

export const setExpense = expense => dispatch => {
    dispatch({
        type: SET_EXPENSE,
        data: expense
    });
};

export const totalIncome = () => dispatch => {
    dispatch({
        type: TOTAL_INCOME,
    });
};

export const totalExpense = () => dispatch => {
    dispatch({
        type: TOTAL_EXPENSE,
    });
};

export const calculateBalance = () => dispatch => {
    dispatch({
        type: BALANCE,
    });
};