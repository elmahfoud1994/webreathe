import React,{Component} from 'react'
import './MyModules.css'
import MyModule from './MyModule/MyModule'
import iotImage from '../../assets/images/iot.png'
import PaginationItems from './PaginationItems/PaginationItems'
import api from '../../api/api'
import LoadingSprint from '../ui/LoadingSprint/LoadingSprint'
import ErrorMessage  from '../ui/ErrorMessage/ErrorMessage'
class MyModules extends Component{
	state={
		loading:true,
		modules:[],
		count:1,
		currentPage:1,
		error:""
	}
	async componentDidMount(){
		let result=await api.getModules(this.state.currentPage)
		this.setState({
			loading:false,
			modules:result.modules,
			count:Math.ceil((result.count ) / 10)
		})
	}
	changePageHandler=async(page)=>{
		this.setState({
			currentPage:page,
			loading:true,
			modules:[]
		})
		let result=await api.getModules(page)
		this.setState({
			loading:false,
			modules:result.modules,
			count:Math.ceil((result.count ) / 10)
		})
	}
	render(){
		return(
			<div className="MyModulesContainer">

				<div className="MyModules">
				{	this.state.loading?<LoadingSprint />:<ErrorMessage/>
					//this.state.modules.map(module=><MyModule key={module.id} id={module.id} description={module.description} title={module.title} createdAt={module.created_at}/>)
				}
				</div>
				{this.state.count!==1?<PaginationItems currentPage={this.state.currentPage} clicked={this.changePageHandler} count={this.state.count}/>:null}
			</div>
		)
	}
}

export default MyModules