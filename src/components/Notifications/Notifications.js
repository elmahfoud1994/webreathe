import React from 'react'
import './Notifications.css'
import { Doughnut } from 'react-chartjs-2';
import notificationsSvg from '../../assets/images/notifications.svg'
import {TiThSmallOutline}  from 'react-icons/ti';
import {IoIosWarning,IoIosAlert}  from "react-icons/io";
import NotificationsHeader from './NotificationsHeader/NotificationsHeader'
const Notifications=(props)=>(
	<div className="Notifications">
		<NotificationsHeader />
		<div className="NotificationsBody">
				
		</div>
	</div>
)
export default Notifications