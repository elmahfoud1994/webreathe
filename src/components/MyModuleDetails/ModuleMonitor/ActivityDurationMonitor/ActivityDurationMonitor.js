import React from 'react'
import './ActivityDurationMonitor.css'
import { Doughnut } from 'react-chartjs-2';
const activityDurationMonitor=()=>{
	const data = {
    datasets: [{
        data: [11.8,12.2],
        backgroundColor:["#e82525","#3ddbac"]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Off',
        'On',
    ]
	};
	return(
		<div className="ActivityDurationMonitor">
				<div>
					<Doughnut   data={data} options={{  maintainAspectRatio: false, legend:{display:true,position:'left',align:'center'},title:{display:true,text:"Activity during the last 24h",fontColor:"#fff"} }}/>
				</div>
				
		</div>
	)
}


export default activityDurationMonitor