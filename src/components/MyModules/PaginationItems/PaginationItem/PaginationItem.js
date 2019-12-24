import React from 'react'
import './PaginationItem.css'
const paginationItem=(props)=>(
	<button className="PaginationItem">
		{props.index}
	</button>
)
export default paginationItem