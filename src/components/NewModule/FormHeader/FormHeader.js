import React from 'react'
import Aux from '../../../hoc/Auxilary'
import './FormHeader.css'
import { IoIosArrowBack } from "react-icons/io";
const formHeader=(props)=>(
	<Aux>
		<div className="FormHeader">
            <h4 onClick={props.navigate}><IoIosArrowBack /></h4>
            <h5>Module informations</h5>
            <h6> {props.phase?"2":"1"} of 2</h6>
           
        </div>
        <div className="BarStatus" >
            <div></div>
            <div></div>
        </div>
     </Aux>
	)
export default formHeader