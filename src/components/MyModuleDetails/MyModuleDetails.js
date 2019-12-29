import React from 'react'
import './MyModuleDetails.css'
import ModuleInfos from './ModuleInfos/ModuleInfos'
import ModuleMonitor from './ModuleMonitor/ModuleMonitor'
import {MdDelete} from 'react-icons/md'
const myModuleDetails=(props)=>(
	<div className="MyModuleDetails">
		<ModuleInfos title="New device" type="Smart tv" createdAt='02/12/1994 14:20' description="this is a smart tv that allows users to wach their best tv shows while sleeping" />
		<div className="MyModuleStats">
			<ModuleMonitor/>
		</div>
	</div>
)
export default myModuleDetails