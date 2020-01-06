import React from 'react'
import './TemperatureMonitor.css'
//importing a library that allows to draw charts
import {Line} from 'react-chartjs-2';
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component renders the historical  data concerning the temperature exchange  during 24 h  of a given module
const temperatureMonitor=(props)=>{
	const temperatures=props.temperatureList.map(ele=>ele.temperature)
	const labels=props.temperatureList.map(ele=>ele.detectedAt)
	const data = {
  		labels:labels,
  		datasets: [
		    {
		      label: 'Temperature during one day',
		      fill: false,
		      borderColor: 'rgb(255, 33, 37)',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      data: temperatures,
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
	                				fontColor:"white",
	                				suggestedMin: 0,
	                				suggestedMax: 50
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
export default temperatureMonitor