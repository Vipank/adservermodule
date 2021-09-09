import React,{useState} from 'react'
import styles from "./Sidebar.module.css"
import NavItem from "./NavItem/NavItem"
import clsx  from 'classnames'

function SideBar() {

    console.log(styles)
    return (
        <>
            <div className="sidebar-header">
            <button className={clsx('btn',styles.createpb)}>Create Campaign</button>
            </div>
            <div className="sidebar-body">
                <NavItem/>
            </div>     
        </>
    )
}

export default SideBar
