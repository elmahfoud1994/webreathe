import React from 'react'
import './PaginationItem.css'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component renders an item of the pagination items.
const paginationItem=(props)=>(
	<button className="PaginationItem" style={{backgroundColor:props.page===props.index && "white",color:props.page===props.index && "black"}} onClick={()=>props.clicked(props.index)}>
		{props.index}
	</button>
)
export default paginationItem