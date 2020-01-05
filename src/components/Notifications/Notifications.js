import React,{Component} from 'react'
import './Notifications.css'
import NotificationBody from './NotificationsBody/NotificationsBody'
import PaginationItems from '../MyModules/PaginationItems/PaginationItems'

import api from '../../api/api'

class Notifications extends Component{
	state={
		count:1,
		notifications:[],
		error:"",
		loading:true,
		currentPage:1
	}
	async componentDidMount(){
		let result=await api.getNotifications(this.state.currentPage)
		this.setState({
			loading:false,
			notifications:result.notifications,
			error:result.error,
			count:Math.ceil((result.count ) / 40)
		})
	}

	changePageHandler=async(page)=>{
		this.setState({
			currentPage:page,
			loading:true,
			notifications:[],
			error:""
		})
		let result=await api.getNotifications(page)
		this.setState({
			loading:false,
			notifications:result.notifications,
			count:Math.ceil((result.count ) / 40),
			error:result.error
		})
	}
	changeToSeenHandler=async(id)=>{
		await api.updateNotificationSeen({id})
	}
	render(){
		return(
			<div className="Notifications">
				<NotificationBody notifications={this.state.notifications} error={this.state.error} loading={this.state.loading} changeSeen={this.changeToSeenHandler} />
				{this.state.count!==1?<PaginationItems currentPage={this.state.currentPage} clicked={this.changePageHandler} count={this.state.count}/>:null}
			</div>
		)
	}
}
export default Notifications