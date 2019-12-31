import React from 'react'
import './MyModule.css'
import {Link} from "react-router-dom";
const myModule=(props)=>(
	<Link className="MyModule" to="/webreathe/12" >
		<div className="MyModuleHeading">
			<h2>{props.title}</h2>
		</div>
		<div className="MyModuleBody"> 
			<p>{props.description}</p>
		</div>
		<span>created at : {props.createdAt}</span>
	</Link>	
) 
export default myModule