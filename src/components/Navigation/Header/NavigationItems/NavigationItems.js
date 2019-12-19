import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
const navigationItems=(props)=>(
    <ul className='NavigationItems'>
        <NavigationItem show={props.add} title="New module" link="#"/>
        <NavigationItem title="My Modules" link="/dfdf"/>
        <NavigationItem title="Notifications" link="/sqdqsd"/>
    </ul>
)
export default navigationItems