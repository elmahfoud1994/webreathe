import React from 'react'
import './NotificationsBody.css'
import NotificationItem from '../NotificationItem/NotificationItem'
const notificationsBody=(props)=>(

	<div className="NotificationsBody">
		{props.notifications.map((notification)=><NotificationItem key={notification.id} id={notification.id} type={notification.type} description={notification.notificationDescription} createdAt={notification.detectedAt} />)
		}
	</div>
)
export default notificationsBody