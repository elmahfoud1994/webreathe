import React from 'react'
import Aux from '../../../hoc/Auxilary'
import FormHeader from '../FormHeader/FormHeader'
import './Form2.css'
import {FaTemperatureHigh,FaExchangeAlt} from 'react-icons/fa'
import {GoGraph} from 'react-icons/go'
import {GiSandsOfTime} from 'react-icons/gi'

const form2=(props)=>(
    <Aux>
       <div className="Form2Body">
       		<FormHeader navigate={props.navigate} phase={props.phase}/>
       		<p>Please select at least one item to monitor.</p>
       		<div className="ItemsContainer">
       			
       			<a>
       				<span><FaTemperatureHigh/></span>
       				<span className="itemLabel">Temperature</span>
       			</a>
       			<a>
       				<span><GiSandsOfTime/></span>
       				<span className="itemLabel">Activity Duration</span>
       			</a>
       				<a>
       				<span><GoGraph/></span>
       				<span className="itemLabel">Activity State</span>
       			</a>
       				<a>
       				<span><FaExchangeAlt/></span>
       				<span className="itemLabel">Data Exchange</span>
       			</a>

       			

       		</div>
       		<button className="SubmitButton">
       				submit
       		</button>
       </div>

       
    </Aux>
)
export default form2