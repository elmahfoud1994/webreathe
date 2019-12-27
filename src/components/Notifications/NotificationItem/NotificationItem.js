import React from 'react'
import './NotificationItem.css'
import {IoIosWarning,IoIosAlert}  from 'react-icons/io'
import {MdDelete} from 'react-icons/md'
import {FaEye} from 'react-icons/fa'
const notificationItem=(props)=>{
	
	let classes=["NotificationType","NotificationTypeWarning"]
	if(props.type==="danger") classes=["NotificationType","NotificationTypeDanger"]
	return(
	<div className="NotificationItem">
		<div className={classes.join(" ")}>
			{props.type==="warning"?<IoIosWarning />:<IoIosAlert/>}
		</div>
		<div className="NotificationContent">
			<p>{props.message}</p>
		</div>
		<div className="NotificationActions">
			<button className="NotificationViewAction">
				<FaEye/>
			</button>
			<button className="NotificationDeleteAction">
				<MdDelete />
			</button>
		</div>
	</div>
	)
}
export default notificationItem