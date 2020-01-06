import React from 'react'
import Aux from '../../../hoc/Auxilary'
import './FormHeader.css'
//importing icons from react icons
import { IoIosArrowBack } from "react-icons/io";
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows the header of  form1 and form2.
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