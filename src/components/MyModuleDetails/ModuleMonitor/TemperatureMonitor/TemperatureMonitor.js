import React from 'react'
import './TemperatureMonitor.css'
import {Line} from 'react-chartjs-2';
const temperatureMonitor=(props)=>{
	const data = {
  		labels: ['0 am', '1 am', '2 am', '3 am', '4am', '5 am', '6 am','7 am','8am','9 am','10 am','11 am','12 pm','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm','19 pm','20 pm','21 pm','22 pm','23 pm'],
  		datasets: [
		    {
		      label: 'Temperature during the last 24 h',
		      fill: false,
		      borderColor: 'rgba(75,192,192,1)',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      data: [11, 11, 12, 7, 25, 11, 23,14,40,4,44,25,11,12,14,17,15,17,20,14,11,22,23,24],
		    }
  		]
	}
	return(
		<div className="TemperatureMonitor">
			<div>
				<Line data={data} 
					options={{scales: 
						{yAxes: 
							[{
	                			ticks: {
	                				suggestedMin: 0,
	                				suggestedMax: 50
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
export default temperatureMonitor