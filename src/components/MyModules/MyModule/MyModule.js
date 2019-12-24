import React from 'react'
import './MyModule.css'
const myModule=(props)=>(
	<a className="MyModule">
		<div className="MyModuleHeading">
			<h2>{props.title}</h2>
		</div>
		<div className="MyModuleBody"> 
			<p>{props.description}</p>
		</div>
		<span>created at : {props.createdAt}</span>
	</a>	
) 
export default myModule