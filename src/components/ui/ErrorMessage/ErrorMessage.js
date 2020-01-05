import React from 'react'
import './ErrorMessage.css'
import errorImage from '../../../assets/images/Error.svg'
const errorMessage=(props)=>(
		<div className="ErrorMessage">
			<img src={errorImage}/>
			<h3>Something went wrong</h3>
			<p>{props.errorMessage}</p>
		</div>
)
export default errorMessage