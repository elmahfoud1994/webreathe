import React from 'react'
import Aux from '../../../hoc/Auxilary'
import './FormHeader.css'
import { IoIosArrowBack } from "react-icons/io";
const formHeader=(props)=>(
	<Aux>
		<div className="FormHeader">
            <h4 onClick={props.navigate} style={{color:!props.phase?"rgb(167, 170, 171)":""}}><IoIosArrowBack /></h4>
            <h5>Module informations</h5>
            <h6> {props.phase?"2":"1"} of 2</h6>
           
        </div>
        <div className="BarStatus" >
             <div style={{backgroundColor:props.form1IsValid?"rgb(105, 203, 224)":"rgb(167, 170, 171)"}}></div>
            <div style={{backgroundColor:props.form2IsValid?"rgb(105, 203, 224)":"rgb(167, 170, 171)"}}></div>
           
        </div>
     </Aux>
	)
export default formHeader