import React from 'react'
import './ActivityStateMonitor.css'
//importing a library that allows to draw charts
import {Line} from 'react-chartjs-2';
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component renders the historical  data concerning the activity state during 24 h  of a given module
const activityStateMonitor=(props)=>{
	const activityState=props.activityStateList.map(ele=>ele.isActive)
	const labels=props.activityStateList.map(ele=>ele.detectedAt)
	const data2={
	  	labels:labels,
	  	datasets: [
		    {
		      label: 'Activity State during  24 h',
		      fill: false,
		      borderColor: 'rgba(75,192,192,1)',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      data: activityState,
		      steppedLine:true
		    }
	  	]
	 };
	return(
		<div className="ActivityStateMonitor">
			<div>
				<Line data={data2} 
					options={{scales: 
						{yAxes:[{
                			ticks: {
                					fontColor:"white",
                			}
                		}],
                		xAxes:[{
	                		ticks: {
	                			fontColor: "white",
	                		},
	                		gridLines: {
        						zeroLineColor: '#fff'
        					}
	                	}]

                		},
                		maintainAspectRatio: false,
                		legend: {
            				display: true,
            				labels: {
                			fontColor: 'rgb(255, 255, 255)'
            			}
        }
                	}}
             	 />
			</div>
			
		</div>
	)
	
}
export default activityStateMonitor