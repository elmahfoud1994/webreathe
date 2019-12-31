import React from 'react'
import './NotificationDetails.css'
import ModuleInfos from '../MyModuleDetails/ModuleInfos/ModuleInfos'
import NotificationInfos from './NotificationInfos/NotificationInfos'

const notificationDetails=(props)=>(
	<div className="NotificationDetails">
		<ModuleInfos number="120054" title="New device" type="Smart tv" state="On" createdAt='02/12/1994 14:20' description="this is a smart tv that allows users to wach their best tv shows while sleeping" />
		<NotificationInfos type="Activity State" description="temperature is too low" createdAt="02/12/1994" />
	</div>
)
export default notificationDetails