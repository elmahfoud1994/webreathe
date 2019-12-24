import React from 'react'
import PaginationItem from './PaginationItem/PaginationItem'
import './PaginationItems.css'
const paginationItems=(props)=>(
	<div className="PaginationItems">
	{[...Array(props.count)].map((e,i)=><PaginationItem  index={i+1} />)}
	</div>
)
export default paginationItems