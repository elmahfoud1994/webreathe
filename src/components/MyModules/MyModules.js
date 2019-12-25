import React,{Component} from 'react'
import './MyModules.css'
import MyModule from './MyModule/MyModule'
import iotImage from '../../assets/images/iot.png'
class MyModules extends Component{
	state={
		modules:[
		{description:"i am hay  ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		{description:"i am begra ,i am responsible of creating a fully finctional software",title:"Cow",createdAt:"2013"},
		]
	}
	render(){
		return(
			<div className="MyModulesContainer">
				<div className="MyModules">
				{
					this.state.modules.map(module=><MyModule description={module.description} title={module.title} createdAt={module.createdAt}/>)
				}
				</div>
				
			</div>
		)
	}
}

export default MyModules