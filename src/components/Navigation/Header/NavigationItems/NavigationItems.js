import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
const navigationItems=(props)=>(
    <ul className='NavigationItems'>
    	<NavigationItem title="New module" link="/webreathe/newmodule"/>
    	<NavigationItem title="My Modules" link="/webreathe/"/>
        <NavigationItem title="Notifications" link="/webreathe/notifications"/>
    </ul>
)
export default navigationItems