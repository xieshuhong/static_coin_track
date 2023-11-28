import {SET_INCOME, SET_EXPENSE, TOTAL_INCOME} from './actions';

const initialState = {
    incomes: [
        {type: 'Salary', amount: 0},
        {type: 'Freelance Work', amount: 0},
        {type: 'Rental Income', amount: 0},
        {type: 'Investments', amount: 0},
        {type: 'Side Business', amount: 0},
    ],
    expenses: [
        {type: 'Rent', amount: 0},
        {type: 'Mortgage', amount: 0},
        {type: 'Utilities', amount: 0},
        {type: 'Groceries', amount: 0},
        {type: 'Transportation', amount: 0},
        {type: 'Entertainment', amount: 0},
    ],
    totalIncome: 0
}


function reducers(state = initialState, action) {
    console.log('Reducer Action:', action.data);
    switch (action.type) {
        case SET_INCOME:
            return {
                ...state,
                incomes: state.incomes.map((income) =>
                    income.type === action.data.type
                        ? { ...income, amount: income.amount + action.data.amount }
                        : income
                ),
            };
        case SET_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.type === action.data.type
                        ? { ...expense, amount: expense.amount + action.data.amount }
                        : expense
                ),
            };
        case TOTAL_INCOME:
            const totalIncome = state.incomes.reduce((total, income) => total + income.amount, 0);
            return {
                ...state,
                totalIncome
            };
        default:
            return state;
    }
}

export default reducers;