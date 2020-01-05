import React from 'react'
import PaginationItem from './PaginationItem/PaginationItem'
import './PaginationItems.css'
const paginationItems=(props)=>(
	<div className="PaginationItems">
		{[...Array(props.count)].map((e,i)=><PaginationItem page={props.currentPage} clicked={props.clicked}  index={i+1} />)}
	</div>
)
export default paginationItems