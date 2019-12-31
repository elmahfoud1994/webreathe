import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
const navigationItems=(props)=>(
    <ul className='NavigationItems'>

    	<NavigationItem title="My Modules" link="/"/>
        <NavigationItem title="New module" link="/newmodule"/>
        <NavigationItem title="Notifications" link="/notifications"/>
    </ul>
)
export default navigationItems