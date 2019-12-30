import React from 'react'
import './NotificationItem.css'
import notificationImage from '../../../assets/images/notification.svg'
const notificationItem=(props)=>(
	<a className="NotificationItem">
		<div className="NotificationItemImage">
			<img src={notificationImage}  />
		</div>
		<div className="NotificationItemHeader">
			<h2>{props.type}</h2>
		</div>
		<div  className="NotificationItemBody">
			<p>{props.description}</p>
			<span>Created at: {props.createdAt}</span>
		</div>
	</a>	
	)
export default notificationItem