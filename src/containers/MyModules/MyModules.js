import React,{Component} from 'react'
import './MyModules.css'
//importing the components building the container MyModuleDetails
import MyModule from '../../components/MyModules/MyModule/MyModule'
import iotImage from '../../assets/images/iot.png'
import PaginationItems from '../../components/MyModules/PaginationItems/PaginationItems'
import api from '../../api/api'
//importing the loading animation ,and a Error component wich renders the error message
import LoadingSprint from '../../components/ui/LoadingSprint/LoadingSprint'
import ErrorMessage  from '../../components/ui/ErrorMessage/ErrorMessage'
//Redux import ,to access the store (the store is just like a global state accessible by all containers)
import { connect } from 'react-redux'
import { loadModulesRequest } from '../../actions'
class MyModules extends Component{
	//once the page is visble this method will be called,it loads the list of modules 
	async componentDidMount(){
		this.props.loadModules(this.props.currentPage)
	}
	//this container has support pagination
	changePageHandler=async(page)=>{
		this.props.loadModules(page)
	}
	//rendering the page.
	render(){
		return(
			<div className="MyModulesContainer">

			<div className="MyModules">
				{	this.props.loading ? <LoadingSprint /> : this.props.error ? <ErrorMessage errorMessage={this.props.error}/>:
				this.props.modules.map(module=><MyModule key={module.id} id={module.id} description={module.description} title={module.title} createdAt={module.created_at}/>)
				}
			</div>
			{this.props.count!==1 ? <PaginationItems currentPage={this.props.currentPage} clicked={this.changePageHandler} count={this.props.count}/> : null }
		</div>
		)
	}
}
//the properties we load from the store
const mapStateToProps = state => ({
	modules: state.modules.modules,
	loading:state.modules.loadingModules,
	count:state.modules.countModules,
	currentPage:state.modules.pageModules,
	error:state.modules.errorModules
})
//the methods we can use to update the data in the  store
const mapDispatchToProps = dispatch => ({
	loadModules: page => dispatch(loadModulesRequest(page))
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyModules)