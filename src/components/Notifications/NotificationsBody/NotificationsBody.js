import React from 'react'
import './NotificationsBody.css'
//importing the components that builds our component
import LoadingSprint from '../../ui/LoadingSprint/LoadingSprint'
import ErrorMessage  from '../../ui/ErrorMessage/ErrorMessage'
import NotificationItem from '../NotificationItem/NotificationItem'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows the list of notification items.
const notificationsBody=(props)=>(

	<div className="NotificationsBody">
		{props.loading ?<LoadingSprint/> :props.error ? <ErrorMessage errorMessage={props.error}/> : props.notifications.map((notification)=><NotificationItem  key={notification.id} id={notification.id} type={notification.type} description={notification.notificationDescription} seen={notification.seen} createdAt={notification.detectedAt} />)
		}
	</div>
)
export default notificationsBody