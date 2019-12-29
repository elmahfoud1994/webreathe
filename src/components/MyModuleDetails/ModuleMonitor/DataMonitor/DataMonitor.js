import React from 'react'
import './DataMonitor.css'
import {Line} from 'react-chartjs-2';

const dataMonitor=(props)=>{
	const data3={
  		labels: ['0 am', '1 am', '2 am', '3 am', '4am', '5 am', '6 am','7 am','8am','9 am','10 am','11 am','12 pm','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm','19 pm','20 pm','21 pm','22 pm','23 pm'],
  		datasets: [
		    {
		      label: 'recived data during the last 24 h',
		      fill: false,
		      borderColor: 'rgba(75,192,192,1)',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      data: [0.5, 15, 3, 44, 14, 17,44,15,10,16,19,20,10,11,18,10,18,77,71,8,11,30,41,51],
		    
		    },
		    {
		      label: 'sent data during the last 24 h',
		      fill: false,
		      borderColor: 'rgb(255,174,25)',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      data: [15, 31, 0, 41, 10,81, 70,60,51,40,33,21,40,41,20,41,70,60,41,71,20,5,16,18],
		     
		    }
  		],
  		backgroundColor:'rgb(255,255,255)'
	}
	return(
		<div className="DataMonitor">
			<div>
				<Line data={data3} 
				options={
					{scales: 
						{yAxes: [{
	                		ticks: {
	                			fontColor: "white",
	                			suggestedMin: 0,
	                			suggestedMax: 100
	                		},
	                		gridLines: {
        						zeroLineColor: '#fff'
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
					}

				}
			/>
			</div>
			
		</div>
	)
}
export default dataMonitor