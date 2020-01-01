import React from 'react'
import { FiType } from 'react-icons/fi'
import { MdDescription } from 'react-icons/md'
import {IoMdTime} from "react-icons/io"
import notificationImage from '../../../assets/images/notification1.svg'
import './NotificationInfos.css'
const notificationInfos=(props)=>(
	<div className="NotificationInfos">
		<div className="NotificationInfosHeader">
			<img src={notificationImage} />
			<h3>Notification Infos</h3>
		</div>
		<div className="NotificationInfosBody">
			<h3><FiType/> Type : {props.type}</h3>
			<h3><MdDescription/> Description : {props.description}</h3>
			<h3><IoMdTime/> Creatd At : {props.createdAt}</h3>	
		</div>

	</div>
)
export default notificationInfos