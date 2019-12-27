import React,{Component} from 'react'
import './Notifications.css'
import NotificationsHeader from './NotificationsHeader/NotificationsHeader'
import NotificationBody from './NotificationsBody/NotificationsBody'
import PaginationItems from '../MyModules/PaginationItems/PaginationItems'
class Notifications extends Component{
	state={
		count:2,
		notifications:[
			{
				message:"battery is low",
				type:"warning"
			},
			{
				message:"no one cares",
				type:"danger"
			},
			{
				message:"go to sleep begra",
				type:"warning"
			},
			{
				message:"i dont care",
				type:"warning"
			},
			{
				message:"no one understands",
				type:"danger"
			},
			{
				message:"bary is crat",
				type:"danger"
			},

		],
		type:"all"
	}
	render(){
		return(
			<div className="Notifications">
				<NotificationsHeader />
				<NotificationBody notifications={this.state.notifications} />
				{this.state.count?<PaginationItems count={this.state.count}/>:null}
			</div>
		)
	}
}
export default Notifications