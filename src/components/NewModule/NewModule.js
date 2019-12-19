import React from 'react'
import './NewModule.css'
import Aux from '../../hoc/Auxilary'
import BackDrop from '../ui/BackDrop/BackDrop'
import Form1 from '../NewModule/Form1/Form1'
import Form2 from '../NewModule/Form2/Form2'
import {MdImportantDevices} from 'react-icons/md'
const newModule=(props)=>(
    <Aux>
        {props.show &&<BackDrop closed={props.clicked} show={false}/>}
        <div className="Module" style={{
                    transform:props.show ? 'translateY(0)':'translateY(-100vh)',
                    opacity:props.show? '1':'0'
                    }}> 
            <div className="ModuleHeader" >
                <h1><MdImportantDevices/></h1>
                <h2>New Module</h2>
            </div>
            <div  className="ModuleBody">
                <div className="LeftSide">
                    <Form1 />
                </div>
                <div className="RightSide">
                    <Form2 />
                </div>
            </div>
        </div>
    </Aux>
)
export default newModule