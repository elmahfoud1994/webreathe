import React from 'react'
import './PaginationItem.css'
const paginationItem=(props)=>(
	<button className="PaginationItem" style={{backgroundColor:props.page===props.index && "white",color:props.page===props.index && "black"}} onClick={()=>props.clicked(props.index)}>
		{props.index}
	</button>
)
export default paginationItem