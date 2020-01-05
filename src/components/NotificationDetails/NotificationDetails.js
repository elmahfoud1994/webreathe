import React,{Component}from 'react'
import './NotificationDetails.css'
import ModuleInfos from '../MyModuleDetails/ModuleInfos/ModuleInfos'
import NotificationInfos from './NotificationInfos/NotificationInfos'
import api from '../../api/api'
import LoadingSprint from '../ui/LoadingSprint/LoadingSprint'
import Aux from '../../hoc/Auxilary'

class notificationDetails extends Component{
	state={
		module:null,
		notification:null,
		error:"",
		loading:true
	}
	async componentDidMount(){
	   let result= await api.getNotificationInfos(this.props.match.params.id)
       this.setState({...result,loading:false})
	}
	render(){
		return(
			<div className="NotificationDetails">
				{this.state.loading?<LoadingSprint />:<Aux>
				<NotificationInfos type={this.state.notification && this.state.notification.type} description={this.state.notification && this.state.notification.notificationDescription} createdAt={this.state.notification && this.state.notification.detectedAt} />
				<ModuleInfos number={this.state.module && this.state.module.number} title={this.state.module && this.state.module.title} type={this.state.module && this.state.module.type} state={this.state.module && this.state.module.state} createdAt={this.state.module && this.state.module.created_at} description={this.state.module && this.state.module.description} />
				</Aux>}
			</div>
			)
	}
}
export default notificationDetails