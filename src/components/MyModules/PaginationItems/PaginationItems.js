import React from 'react'
import PaginationItem from './PaginationItem/PaginationItem'
import './PaginationItems.css'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component renders an item of the list of pages.
const paginationItems=(props)=>(
	<div className="PaginationItems">
		{[...Array(props.count)].map((e,i)=><PaginationItem page={props.currentPage} clicked={props.clicked}  index={i+1} />)}
	</div>
)
export default paginationItems