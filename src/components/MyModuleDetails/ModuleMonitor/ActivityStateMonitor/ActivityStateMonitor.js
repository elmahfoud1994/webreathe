import React from 'react'
import './ActivityStateMonitor.css'
import {Line} from 'react-chartjs-2';
const activityStateMonitor=(props)=>{
	const data2={
	  	labels: ['0 am', '1 am', '2 am', '3 am', '4am', '5 am', '6 am','7 am','8am','9 am','10 am','11 am','12 pm','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm','19 pm','20 pm','21 pm','22 pm','23 pm'],
	  	datasets: [
		    {
		      label: 'Activity State during the last 24 h',
		      fill: false,
		      borderColor: 'rgba(75,192,192,1)',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      data: [0, 1, 0, 1, 1, 1, 0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1],
		      steppedLine:true
		    }
	  	]
	 };
	return(
		<div className="ActivityStateMonitor">
			<div>
				<Line data={data2} 
					options={{scales: 
						{yAxes: [{
                			ticks: {
                					suggestedMin: 0,
                					suggestedMax: 1
                					}
                				}]
                		},
                		maintainAspectRatio: false,
                	}}
             	 />
			</div>
			
		</div>
	)
	
}
export default activityStateMonitor