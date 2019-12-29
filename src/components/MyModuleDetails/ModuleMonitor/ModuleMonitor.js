import React from 'react'
import './ModuleMonitor.css'
import ActivityDurationMonitor from './ActivityDurationMonitor/ActivityDurationMonitor'
import ActivityStateMonitor from './ActivityStateMonitor/ActivityStateMonitor'
import DataMonitor from './DataMonitor/DataMonitor'
import TemperatureMonitor from './TemperatureMonitor/TemperatureMonitor'


const moduleMonitor=(props)=>(
	<div className="MyModuleMonitor">
    <ActivityDurationMonitor />
		<ActivityStateMonitor />
    <TemperatureMonitor/>
    <DataMonitor />
	</div>
)
export default moduleMonitor