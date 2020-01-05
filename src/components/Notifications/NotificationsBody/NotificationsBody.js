import React from 'react'
import './NotificationsBody.css'
import LoadingSprint from '../../ui/LoadingSprint/LoadingSprint'
import ErrorMessage  from '../../ui/ErrorMessage/ErrorMessage'
import NotificationItem from '../NotificationItem/NotificationItem'
const notificationsBody=(props)=>(

	<div className="NotificationsBody">
		{props.loading ?<LoadingSprint/> :props.error ? <ErrorMessage errorMessage={props.error}/> : props.notifications.map((notification)=><NotificationItem clicked={props.changeSeen} key={notification.id} id={notification.id} type={notification.type} description={notification.notificationDescription} seen={notification.seen} createdAt={notification.detectedAt} />)
		}
	</div>
)
export default notificationsBody