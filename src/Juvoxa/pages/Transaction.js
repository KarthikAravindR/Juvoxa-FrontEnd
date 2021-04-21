import React from 'react'
import { connect } from 'react-redux'

import classes from './Juvoxa.module.scss'
import * as actions from '../../store/actions/index'
import Table from '../components/Table'

const Transactions = props => {
    const { onFetchTransactions, Transactions } = props
    React.useEffect(() => {
        console.log('use effect called')
        onFetchTransactions()
    }, [onFetchTransactions])
    const columns = React.useMemo(
        () => [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Ticket Ref',
            accessor: 'ticketref'
        }, {
            Header: 'Trade Date',
            accessor: 'traded_on'
        }, {
            Header: 'QTY',
            accessor: 'quantity'
        }, {
            Header: 'CCY',
            accessor: 'currency'
        }, {
            Header: 'Settlement Amount',
            accessor: 'settlement_amount'
        },],
        []
    )
    const data = React.useMemo(() => Transactions, [Transactions])
    return (
        <div className={classes.container}>
            {Transactions[0] && <Table
                columns={columns}
                data={data}
            />}
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        Transactions: state.Data.Transactions
    }
}

const mapDispatchtoState = dispatch => {
    return {
        onFetchTransactions: () => { dispatch(actions.Transactions()) }
    }
}

export default connect(mapStatetoProps, mapDispatchtoState)(Transactions)