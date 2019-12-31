import React from 'react'
import './NotificationItem.css'
import notificationImage from '../../../assets/images/notification.svg'
import {Link} from 'react-router-dom'
const notificationItem=(props)=>(
	<Link to="/notifications/10" className="NotificationItem">
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
	</Link>	
	)
export default notificationItem