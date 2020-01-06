import React from 'react'
import './MyModule.css'
import {Link} from "react-router-dom";
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component renders the informations of a given module item
const myModule=(props)=>(
	<Link className="MyModule" to={"/webreathe/"+props.id} >
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