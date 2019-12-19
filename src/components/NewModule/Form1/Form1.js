import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FiType } from "react-icons/fi";
import { TiSortNumerically } from "react-icons/ti";
import { MdDescription } from "react-icons/md";
import { GoKeyboard } from "react-icons/go";


import Aux from '../../../hoc/Auxilary'
import './Form1.css'
const form1=()=>(
    <Aux>
        <div className="Form1Header">
            <h4><IoIosArrowBack /></h4>
            <h5>Module informations</h5>
            <h6> 1 of 2</h6>
           
        </div>
        <div className="BarStatus" >
            <div></div>
            <div></div>
        </div>
        <div className="Form1Body">
            <p>Please fill some basic informations abaout the module.</p>
            <div class="Form1Field">
                <span>
                <GoKeyboard />
                </span>
                <input type="text" placeholder="Module Name" required />
            </div>
            <div class="Form1Field">
            <span>
                <FiType />
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
            <button className="Form2Continue" type="submit" >
                    Continue
            </button>
            
        </div>

    </Aux>
)
export default form1