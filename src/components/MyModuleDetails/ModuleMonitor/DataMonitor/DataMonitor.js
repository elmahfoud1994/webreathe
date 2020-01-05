import React from 'react'
import './DataMonitor.css'
import {Line} from 'react-chartjs-2';

const dataMonitor=(props)=>{
	const sentData=props.dataList.map(ele=>ele.sentData)
	const recivedData=props.dataList.map(ele=>ele.recivedData)
	const dates=props.dataList.map(ele=>ele.detectedAt)
	console.log(sentData)
	const data3={
  		labels: dates,
  		datasets: [
		    {
		      label: 'recived data during 24h',
		      fill: false,
		      borderColor: 'rgba(75,192,192,1)',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      data: recivedData,
		    
		    },
		    {
		      label: 'sent data during  24h',
		      fill: false,
		      borderColor: 'rgb(255,174,25)',
		      pointBorderColor: 'rgb(255,174,25)',
		      data: sentData,
		     
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