import React from 'react'
import './ActivityStateMonitor.css'
import {Line} from 'react-chartjs-2';
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