import React from 'react'
import { connect } from 'react-redux'

import classes from './Juvoxa.module.scss'
import * as actions from '../../store/actions/index'
import Table from '../components/Table'

const Juvoxa = props => {
    const { onFetchData, payload } = props
    React.useEffect(() => {
        console.log('use effect called')
        onFetchData()
    }, [onFetchData])
    const columns = React.useMemo(
        () => [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Ticker',
            accessor: 'ticker'
        }, {
            Header: 'Asset Class',
            accessor: 'asset_class'
        }, {
            Header: 'Average Price',
            accessor: 'avg_price'
        }, {
            Header: 'Market Price',
            accessor: 'market_price'
        }, {
            Header: 'Latest change percentage',
            accessor: 'latest_chg_pct'
        }, {
            Header: 'Market Value in Base CCY',
            accessor: 'market_value_ccy'
        },],
        []
    )
    const data = React.useMemo(() => payload, [payload])
    return (
        <div className={classes.container}>
            {payload[0] && <Table
                columns={columns}
                data={data}
            />}
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        payload: state.Data.payload
    }
}

const mapDispatchtoState = dispatch => {
    return {
        onFetchData: () => { dispatch(actions.Data()) }
    }
}

export default connect(mapStatetoProps, mapDispatchtoState)(Juvoxa)