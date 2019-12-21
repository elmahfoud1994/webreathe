import React,{Component} from 'react'
import './NewModule.css'
import Aux from '../../hoc/Auxilary'
import BackDrop from '../ui/BackDrop/BackDrop'
import Form1 from '../NewModule/Form1/Form1'
import Form2 from '../NewModule/Form2/Form2'
import NewModuleStatus from '../NewModule/NewModuleStatus/NewModuleState'
import {MdImportantDevices} from 'react-icons/md'
class NewModule extends Component{
	state={
		phase2:false
	}
	changephaseHandler=()=>{
		this.setState((prevState)=>{
			return{
				phase2:!prevState.phase2
			}
		})
	}
	render(){
		return (
					<Aux>
        				{this.props.show &&<BackDrop closed={this.props.clicked} show={false}/>}
        				<div className="Module" style={{
                    		transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',
                    		opacity:this.props.show? '1':'0'
                    	}}> 
            				<div className="ModuleHeader" >
                				<h1><MdImportantDevices/></h1>
                				<h2>New Module</h2>
            				</div>
            				<div  className="ModuleBody">
                				<form className="LeftSide">
                    				{this.state.phase2?<Form2 navigate={this.changephaseHandler} phase={this.state.phase2}/>:<Form1 navigate={this.changephaseHandler} phase={this.state.phase2}/>}
                				</form>
                				<div className="RightSide">
                    				<NewModuleStatus/>
                				</div>
           					</div>
        				</div>
   				 	</Aux>
			)
	}
    
}
export default NewModule