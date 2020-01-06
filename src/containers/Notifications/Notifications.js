import React,{Component} from 'react'
import './Notifications.css'
//importing the components building the container Notification 
import NotificationBody from '../../components/Notifications/NotificationsBody/NotificationsBody'
import PaginationItems from '../../components/MyModules/PaginationItems/PaginationItems'
import api from '../../api/api'
//Redux import ,to access the store (the store is just like a global state accessible by all containers)
import { connect } from 'react-redux'
import { loadNotificationsRequest } from '../../actions'

class Notifications extends Component{
	//once the page is visble this method will be called,it loads the list of notifications 
	async componentDidMount(){
		this.props.loadNotifications(this.props.currentPage)
	}
	///this container has support pagination
	changePageHandler=async(page)=>{
		this.props.loadNotifications(page)
	}
	//rendering the page.
	render(){
		return(
			<div className="Notifications">
				<NotificationBody notifications={this.props.notifications} error={this.props.error} loading={this.props.loading} />
				{this.props.count!==1?<PaginationItems currentPage={this.props.currentPage} clicked={this.changePageHandler} count={this.props.count}/>:null}
			</div>
		)
	}
}
//the properties we load from the store
const mapStateToProps = state => ({
	notifications: state.notifications.notifications,
	loading:state.notifications.loadingNotifications,
	count:state.notifications.countNotifications,
	currentPage:state.notifications.pageNotifications,
	error:state.notifications.errorNotifications
})
//the methods we can use to update the data in the  store
const mapDispatchToProps = dispatch => ({
	loadNotifications: page => dispatch(loadNotificationsRequest(page))
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Notifications)