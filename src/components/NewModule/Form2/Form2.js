import React from 'react'
import './Form2.css'
import Aux from '../../../hoc/Auxilary'
//importing the component that builds this component
import FormHeader from '../FormHeader/FormHeader'
import LoadSprint2 from '../../ui/LoadSprint2/LoadSprint2'
//importing icons from react icons
import { FaTemperatureHigh,FaExchangeAlt } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'
import { GiSandsOfTime } from 'react-icons/gi'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component shows the second form of the New Module Container.
const form2 =(props)=>(
			<Aux>
       			<div className="Form2Body">
       			{   !(props.submitting)? <Aux>
	       			<FormHeader navigate={props.navigate} phase={props.phase} form2IsValid={props.form2IsValid} form1IsValid={props.form1IsValid}/>
	       			<p>Please select at least one item to monitor.</p>
	       			<div className="ItemsContainer">
		       			<a style={{backgroundColor:props.temperature?"rgb(105, 203, 224)":""}} onClick={()=>props.selectItemsHandler(0)} >
		       				<span style={{color:props.temperature?"white":""}}><FaTemperatureHigh/></span>
		       				<span className="itemLabel" style={{color:props.temperature?"white":""}}>Temperature</span>
		       			</a>
		       			<a style={{backgroundColor:props.activityDuration?"rgb(105, 203, 224)":""}} onClick={()=>props.selectItemsHandler(3)}>
		       				<span style={{color:props.activityDuration?"white":""}}><GiSandsOfTime/></span>
		       				<span  style={{color:props.activityDuration?"white":""}} className="itemLabel">Activity Duration</span>
		       			</a>
		       			<a style={{backgroundColor:props.activityState?"rgb(105, 203, 224)":""}} onClick={()=>props.selectItemsHandler(2)}>
		       				<span style={{color:props.activityState?"white":""}}><GoGraph/></span>
		       				<span style={{color:props.activityState?"white":""}} className="itemLabel">Activity State</span>
		       			</a>
		       			<a style={{backgroundColor:props.dataExchange?"rgb(105, 203, 224)":""}} onClick={()=>props.selectItemsHandler(1)}>
		       				<span style={{color:props.dataExchange?"white":""}}><FaExchangeAlt/></span>
		       				<span style={{color:props.dataExchange?"white":""}} className="itemLabel">Data Exchange</span>
		       			</a>
	       			</div>
	       			<button disabled={!props.form1IsValid || !props.form2IsValid || props.submitting} className="SubmitButton" onClick={(e)=>props.submit(e)}>
	       				submit
	       			</button>
	       			</Aux>
	       			:
	       			<div style={{width:"100%",height:"100%"}}>
	       					 <LoadSprint2 /> 
	       			</div>
	       		}
	       			
       			</div>
    		</Aux>
			)
    

export default form2