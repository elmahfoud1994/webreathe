import React from 'react'
import './MyModuleDetails.css'
import moduleInfosImage from '../../assets/images/moduleInfos.svg'
import { FiType } from "react-icons/fi";
import { TiSortNumerically } from "react-icons/ti";
import { MdDescription } from "react-icons/md";
import { GoKeyboard } from "react-icons/go";
import {IoMdTime} from "react-icons/io"
const myModuleDetails=(props)=>(
	<div className="MyModuleDetails">
		<div className="MyModuleInfos">
			<div className="MyModuleInfosHeader">
				<img src={moduleInfosImage}/>
				<h3>Module Infos</h3>
			</div>
			<div className="MyModuleInfosBody">
				<h3><TiSortNumerically/> Number: 12345872</h3>
				<h3><GoKeyboard/> Title : New Name Bitch</h3>
				<h3><FiType/> Type : Software shit</h3>
				<h3><MdDescription/> Description : New Name Bitch dskjfsdkjf dkjsdjsdf dkfsjd dkjfsdkjf sdkjfsdjf dfkjsdjfksd sdkfjsdkjf sdfkjsdkjf dsfkjsdjfksd sdjfkdsj fdskjfskd</h3>
				<h3><IoMdTime/> Creatd At : 02/12/2019 14:30</h3>
			</div>
		</div>
		<div className="MyModuleStats">
			

		</div>
	</div>
)
export default myModuleDetails