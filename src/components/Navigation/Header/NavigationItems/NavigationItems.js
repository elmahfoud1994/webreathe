import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
const navigationItems=(props)=>(
    <ul className='NavigationItems'>
    	<NavigationItem hide={props.clicked} title="New module" link="/webreathe/newmodule"/>
    	<NavigationItem hide={props.clicked} title="My Modules" link="/webreathe/"/>
        <NavigationItem hide={props.clicked} title="Notifications" link="/webreathe/notifications"/>
    </ul>
)
export default navigationItems