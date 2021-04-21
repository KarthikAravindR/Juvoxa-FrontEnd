import * as actionTypes from '../actions/actionTypes'

const initialState = {
    payload: [],
    Transactions: [],
    isLoading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                isLoading: false
            }
        case actionTypes.FETCH_DATA_FAILED:
            return {
                isLoading: false,
                error: action.error
            }
        case actionTypes.FETCH_TRANSACTIONS_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                Transactions: action.Transactions,
                isLoading: false
            }
        case actionTypes.FETCH_TRANSACTIONS_FAILED:
            return {
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer