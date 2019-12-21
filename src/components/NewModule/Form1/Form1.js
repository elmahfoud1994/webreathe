import React from 'react'
import { FiType } from "react-icons/fi";
import { TiSortNumerically } from "react-icons/ti";
import { MdDescription } from "react-icons/md";
import { GoKeyboard } from "react-icons/go";
import Aux from '../../../hoc/Auxilary'
import FormHeader from '../FormHeader/FormHeader'
import {GiSandsOfTime} from "react-icons/gi";
import './Form1.css'
const form1=(props)=>(
    <Aux>
        <div className="Form1Body">
            <FormHeader/>
            <p>Please fill some basic informations abaout the module.</p>
            <div class="Form1Field">
                <span>
                <GoKeyboard />
                </span>
                <input type="text" placeholder="Module Name" required />
            </div>
            <div class="Form1Field">
            <span>
                <GiSandsOfTime />
                </span>
                <input type="text" placeholder="Module Type" required/>
            </div>
            <div class="Form1Field">
            <span>
                <TiSortNumerically />
                </span>
                <input type="number" placeholder="Module Number" required/>
            </div>
            <div class="Form2Field">
            <span><MdDescription/></span>
            <textarea type="text" placeholder="Module Description" required/>
            </div>
            <button  className="Form2Continue" type="submit" onClick={props.navigate} >
                    Continue
            </button>
            
        </div>

    </Aux>
)
export default form1