import React from 'react'
import './NotificationInfos.css'
//importing icons from react icons
import { FiType } from 'react-icons/fi'
import { MdDescription } from 'react-icons/md'
import {IoMdTime} from "react-icons/io"
//importing an image from our assets
import notificationImage from '../../../assets/images/notification1.svg'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows the informations of a notification.
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