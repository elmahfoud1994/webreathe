import React from 'react'
import './ErrorMessage.css'
//loading an image from our assets
import errorImage from '../../../assets/images/Error.svg'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows the error message .
const errorMessage=(props)=>(
		<div className="ErrorMessage">
			<img src={errorImage}/>
			<h3>Something went wrong</h3>
			<p>{props.errorMessage}</p>
		</div>
)
export default errorMessage