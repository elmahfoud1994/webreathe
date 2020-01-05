import React from 'react'
import './ActivityDurationMonitor.css'
import { Doughnut } from 'react-chartjs-2';
const activityDurationMonitor=(props)=>{
	let activeHours=24;
	if(props.durationList.length){
		props.durationList.map(ele=>{
			if(!ele.isActive) activeHours=activeHours-1
		})
	}
	const data = {
    datasets: [{
        data: [24-activeHours,activeHours],
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
					<Doughnut data={data} options={{  maintainAspectRatio: false, legend:{display:true,position:'left',align:'center'},title:{display:true,text:"Activity during 24h",fontColor:"#fff"} }}/>
				</div>
				
		</div>
	)
}


export default activityDurationMonitor