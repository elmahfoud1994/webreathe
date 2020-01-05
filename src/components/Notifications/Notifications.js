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
			count:Math.ceil((result.count ) / 10)
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
			count:Math.ceil((result.count ) / 10)
		})
	}
	render(){
		return(
			<div className="Notifications">
				<NotificationBody notifications={this.state.notifications} />
				{this.state.count!==1?<PaginationItems currentPage={this.state.currentPage} clicked={this.changePageHandler} count={this.state.count}/>:null}
			</div>
		)
	}
}
export default Notifications