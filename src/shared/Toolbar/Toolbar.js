import React from 'react'
import {NavLink} from 'react-router-dom'

import './Toolbar.css'


const Toolbar = props => {
    return (
        <div className="trigger-menu-wrapper">
            <div className="toolbar-header">JUVOXA</div>
            <div className="toolbar-links-cont">
                <NavLink className="toolbar-links" activeClassName="toolbar-links-active" exact to='/'>Holdings</NavLink>
                <NavLink className="toolbar-links" activeClassName="toolbar-links-active" exact to='/transactions' style={{marginLeft: "24px"}}>Transactions</NavLink>
            </div>
        </div>
    )
}

export default Toolbar
