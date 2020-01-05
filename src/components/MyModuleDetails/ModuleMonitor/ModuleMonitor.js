import React from 'react'
import './ModuleMonitor.css'
import ActivityDurationMonitor from './ActivityDurationMonitor/ActivityDurationMonitor'
import ActivityStateMonitor from './ActivityStateMonitor/ActivityStateMonitor'
import DataMonitor from './DataMonitor/DataMonitor'
import TemperatureMonitor from './TemperatureMonitor/TemperatureMonitor'
import LoadSprint2 from '../../ui/LoadSprint2/LoadSprint2'

const moduleMonitor=(props)=>(
	<div className="MyModuleMonitor">
		{props.loading?<LoadSprint2 />:null}
		{props.shouldMonitorDuration ? <ActivityDurationMonitor durationList={props.activityStateHistory}  /> :null }
		{props.activityStateHistory.length ? <ActivityStateMonitor activityStateList={props.activityStateHistory}/> : null}
		{props.temperatureHistory.length ? <TemperatureMonitor temperatureList={props.temperatureHistory}/> :null }
		{props.dataExchangeHistory.length ? <DataMonitor dataList={props.dataExchangeHistory} /> : null }
	</div>
	)
export default moduleMonitor