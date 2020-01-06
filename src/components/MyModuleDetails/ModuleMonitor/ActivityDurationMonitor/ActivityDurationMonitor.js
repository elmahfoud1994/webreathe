import React from 'react'
import './ActivityDurationMonitor.css'
//importing a library that allows to draw charts
import { Doughnut } from 'react-chartjs-2';
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component renders the duration data of a given module
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