import React from 'react'
import './ModuleMonitor.css'
//importing the cpmopnents that builds this component
import ActivityDurationMonitor from './ActivityDurationMonitor/ActivityDurationMonitor'
import ActivityStateMonitor from './ActivityStateMonitor/ActivityStateMonitor'
import DataMonitor from './DataMonitor/DataMonitor'
import TemperatureMonitor from './TemperatureMonitor/TemperatureMonitor'
import LoadSprint2 from '../../ui/LoadSprint2/LoadSprint2'
import ErrorMessage  from '../../ui/ErrorMessage/ErrorMessage'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component is a dashboard rendering the historical data of a given Module.
const moduleMonitor=(props)=>(
	<div className="MyModuleMonitor">
		{props.loading?<LoadSprint2 />:props.error?<ErrorMessage errorMessage={props.error} />:null}
		{props.shouldMonitorDuration ? <ActivityDurationMonitor durationList={props.activityStateHistory}  /> :null }
		{props.activityStateHistory.length ? <ActivityStateMonitor activityStateList={props.activityStateHistory}/> : null}
		{props.temperatureHistory.length ? <TemperatureMonitor temperatureList={props.temperatureHistory}/> :null }
		{props.dataExchangeHistory.length ? <DataMonitor dataList={props.dataExchangeHistory} /> : null }
	</div>
	)
export default moduleMonitor