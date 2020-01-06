import React from 'react'
//importing the components wich constructs our backend
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows the list od the links in the header.
const navigationItems=(props)=>(
    <ul className='NavigationItems'>
    	<NavigationItem hide={props.clicked} title="New module" link="/webreathe/newmodule"/>
    	<NavigationItem hide={props.clicked} title="My Modules" link="/webreathe/"/>
        <NavigationItem hide={props.clicked} title="Notifications" link="/webreathe/notifications"/>
    </ul>
)
export default navigationItems