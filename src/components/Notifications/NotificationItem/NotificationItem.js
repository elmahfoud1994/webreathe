import React from 'react'
import './NotificationItem.css'
import notificationImage from '../../../assets/images/notification.svg'
import {Link} from 'react-router-dom'
const notificationItem=(props)=>{
	let classes=["NotificationItem"]
	console.log(props)
	if(!props.seen){

		classes=["NotificationItem","ActiveNotification"]
	}
	return(
	<Link to={"/webreathe/notifications/"+props.id} className={classes.join(" ")}>
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
}
export default notificationItem