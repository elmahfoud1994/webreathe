import React,{Component} from 'react'
import './Notifications.css'
import NotificationBody from './NotificationsBody/NotificationsBody'
import PaginationItems from '../MyModules/PaginationItems/PaginationItems'
class Notifications extends Component{
	state={
		count:2,
		notifications:[
			{
				description:"battery is low",
				type:"Temperatue",
				createdAt:"02/12/2019"
			},
			{
				description:"no one cares",
				type:"Activity Duration",
				createdAt:"02/02/2019"
			},
			{
				description:"go to sleep begra",
				type:"Activity State",
				createdAt:"02/03/2017"
			},
			{
				description:"i dont care",
				type:"Data Exchange",
				createdAt:"01/01/2020"
			},
			{
				description:"no one understands",
				type:"Activity State",
				createdAt:"02/12/2019"
			},
			{
				description:"bary is crat",
				type:"Activity State",
				createdAt:"02/12/2019"
			},

		],
		type:"all"
	}
	render(){
		return(
			<div className="Notifications">
				<NotificationBody notifications={this.state.notifications} />
				{this.state.count?<PaginationItems count={this.state.count}/>:null}
			</div>
		)
	}
}
export default Notifications