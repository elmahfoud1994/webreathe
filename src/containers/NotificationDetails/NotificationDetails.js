import React,{Component}from 'react'
import './NotificationDetails.css'
//importing the components building the container Notification Details
import ModuleInfos from '../../components/MyModuleDetails/ModuleInfos/ModuleInfos'
import NotificationInfos from '../../components/NotificationDetails/NotificationInfos/NotificationInfos'
import api from '../../api/api'
import Aux from '../../hoc/Auxilary'
import LoadSprint2 from '../../components/ui/LoadSprint2/LoadSprint2'
import ErrorMessage  from '../../components/ui/ErrorMessage/ErrorMessage'
//Redux import ,to access the store (the store is just like a global state accessible by all containers)
import { connect } from 'react-redux'
import { loadNotificationByIdRequest } from '../../actions'

class NotificationDetails extends Component{
	//once the page is visble this method will be called,it loads the of notification informations 
	async componentDidMount(){
	   this.props.loadNotification(this.props.match.params.id)
	}
	//this method is responsible to render the page
	render(){
		return(
			<div className="NotificationDetails">
				{this.props.loading?<LoadSprint2 />:this.props.error?<ErrorMessage errorMessage={this.props.error} />:<Aux>
				<NotificationInfos type={this.props.notification && this.props.notification.type} description={this.props.notification && this.props.notification.notificationDescription} createdAt={this.props.notification && this.props.notification.detectedAt} />
				<ModuleInfos number={this.props.module && this.props.module.number} title={this.props.module && this.props.module.title} type={this.props.module && this.props.module.type} state={this.props.module && this.props.module.state} createdAt={this.props.module && this.props.module.created_at} description={this.props.module && this.props.module.description} />
				</Aux>}
			</div>
			)
	}
}
//the properties we load from the store
const mapStateToProps = state => ({
	module:state.notificationInfos.module,
	notification:state.notificationInfos.notification,
	error:state.notificationInfos.errorNotification,
	loading:state.notificationInfos.loadingNotification
})
//the methods we can use to update the data in the  store
const mapDispatchToProps = dispatch => ({
	loadNotification: id => dispatch(loadNotificationByIdRequest(id))
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NotificationDetails)
