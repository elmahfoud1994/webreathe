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
			count:Math.ceil((result.count ) / 40)
		})
	}
	changePageHandler=async(page)=>{
		this.setState({
			currentPage:page,
			loading:true,
			notifications:[]
		})
		let result=await api.getNotifications(page)
		this.setState({
			loading:false,
			notifications:result.notifications,
			count:Math.ceil((result.count ) / 40)
		})
	}
	render(){
		return(
			<div className="Notifications">
				<NotificationBody notifications={this.state.notifications} loading={this.state.loading} />
				{this.state.count!==1?<PaginationItems currentPage={this.state.currentPage} clicked={this.changePageHandler} count={this.state.count}/>:null}
			</div>
		)
	}
}
export default Notifications