import React from 'react'
import './NotificationsBody.css'
import NotificationItem from '../NotificationItem/NotificationItem'
const notificationsBody=(props)=>(

	<div className="NotificationsBody">
		{props.notifications.map((notification,index)=><NotificationItem key={index} type={notification.type} message={notification.message} />)
		
		}
	</div>
)
export default notificationsBody