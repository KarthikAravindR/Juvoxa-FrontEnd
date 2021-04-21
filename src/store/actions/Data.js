import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    }
}
export const fetchDataSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: payload
    }
}
export const fetchDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAILED,
        error: error
    }
}
export const Data = () => {
    return dispatch => {
        dispatch(fetchDataStart())
        axios.get('https://canopy-frontend-task.vercel.app/api/holdings')
            .then(response => {
                dispatch(fetchDataSuccess(response.data.payload))
                console.log(response.data.payload)
            }).catch(error => {
                dispatch(fetchDataFailed(error))
            })
    }
}

export const fetchTransactionsStart = () => {
    return {
        type: actionTypes.FETCH_TRANSACTIONS_START
    }
}
export const fetchTransactionsSuccess = (Transactions) => {
    return {
        type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,
        Transactions: Transactions
    }
}
export const fetchTransactionsFailed = (error) => {
    return {
        type: actionTypes.FETCH_TRANSACTIONS_FAILED,
        error: error
    }
}
export const Transactions = () => {
    return dispatch => {
        dispatch(fetchTransactionsStart())
        axios.get('https://canopy-frontend-task.now.sh/api/transactions')
            .then(response => {
                dispatch(fetchTransactionsSuccess(response.data.transactions))
                console.log(response.data.transactions)
            }).catch(error => {
                dispatch(fetchTransactionsFailed(error))
            })
    }
}
