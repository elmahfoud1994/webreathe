import React from 'react'
import './LoadSprint2.css'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows a loading animation.
const loadSprint2=(props)=>(
	<div class="spinner">
		<div class="cube1"></div>
		<div class="cube2"></div>
	</div>
	)
export default loadSprint2