import React from 'react'
import './NotificationsHeader.css'
import {TiThSmallOutline}  from 'react-icons/ti';
import {IoIosWarning,IoIosAlert}  from "react-icons/io";
const notificationHeader=(props)=>(
	<div className="NotificationsHeader">
		<button className="NotificationsAll">
			<TiThSmallOutline />All
		</button>
		<button className="NotificationsWarnings">
			<IoIosWarning/>Warnings
		</button>
		<button className="NotificationsDanger">
			<IoIosAlert/>Danger
		</button>
	</div>
)

export default notificationHeader