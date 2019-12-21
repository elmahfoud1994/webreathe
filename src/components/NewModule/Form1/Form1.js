import React from 'react'
import { FiType } from "react-icons/fi";
import { TiSortNumerically } from "react-icons/ti";
import { MdDescription } from "react-icons/md";
import { GoKeyboard } from "react-icons/go";
import Aux from '../../../hoc/Auxilary'
import FormHeader from '../FormHeader/FormHeader'
import './Form1.css'
const form1=(props)=>(
    <Aux>
        <div className="Form1Body">
            <FormHeader form1IsValid={props.form1IsValid} form2IsValid={props.form2IsValid}/>
            <p>Please fill some basic informations abaout the module.</p>
            <div className="Form1Field">
                <span>
                <GoKeyboard />
                </span>
                <input type="text" placeholder="Module Name" value={props.name} onChange={(text)=>props.form1Handler(0,text.target.value)} required />
            </div>
            <div className="Form1Field">
            <span>
                <FiType />
                </span>
                <input type="text" placeholder="Module Type" value={props.type} onChange={(text)=>props.form1Handler(1,text.target.value)} required/>
            </div>
            <div className="Form1Field">
            <span>
                <TiSortNumerically />
                </span>
                <input type="number" onChange={(text)=>props.form1Handler(2,text.target.value)} value={props.number} placeholder="Module Number" required/>
            </div>
            <div className="Form2Field">
            <span><MdDescription/></span>
            <textarea type="text" onChange={(text)=>props.form1Handler(3,text.target.value)} value={props.description}  placeholder="Module Description" required/>
            </div>
            <button disabled={!props.form1IsValid}  className="Form1Continue" type="submit" onClick={props.navigate} >
                    Continue
            </button>
            
        </div>

    </Aux>
)
export default form1