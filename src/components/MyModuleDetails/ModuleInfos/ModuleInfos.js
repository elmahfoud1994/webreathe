import React from 'react'
import './ModuleInfos.css'
import moduleInfosImage from '../../../assets/images/moduleInfos.svg'
import { FiType } from 'react-icons/fi'
import { TiSortNumerically } from 'react-icons/ti'
import { MdDescription } from 'react-icons/md'
import { GoKeyboard } from 'react-icons/go'
import { IoMdTime } from 'react-icons/io'
import { FaPowerOff } from 'react-icons/fa'
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
			<h3><FaPowerOff/> State : {props.state} </h3>
			<h3><MdDescription/> Description : {props.description}</h3>
			<h3><IoMdTime/> Creatd At : {props.createdAt}</h3>
			
		</div>
	</div>
)
export default moduleInfos