import React from 'react'
import './ModuleInfos.css'
//importing an image from our assets
import moduleInfosImage from '../../../assets/images/moduleInfos.svg'
//importing icons from react icons
import { FiType } from 'react-icons/fi'
import { TiSortNumerically } from 'react-icons/ti'
import { MdDescription } from 'react-icons/md'
import { GoKeyboard } from 'react-icons/go'
import { IoMdTime } from 'react-icons/io'
import { FaPowerOff } from 'react-icons/fa'

//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component renders the informations of a given module
const moduleInfos=(props)=>(
	<div className="ModuleInfos">
		<div className="ModuleInfosHeader">
			<img src={moduleInfosImage}/>
			<h3>Module Infos</h3>
		</div>
		<div className="ModuleInfosBody">
			<h3><TiSortNumerically/> Number: {props.number}</h3>
			<h3><GoKeyboard/> Title : {props.title}</h3>
			<h3><FiType/> Type : {props.type}</h3>
			<h3><FaPowerOff/> State : {props.state===0?"OFF":"ON"} </h3>
			<h3><MdDescription/> Description : {props.description}</h3>
			<h3><IoMdTime/> Creatd At : {props.createdAt}</h3>
			
		</div>
	</div>
)
export default moduleInfos