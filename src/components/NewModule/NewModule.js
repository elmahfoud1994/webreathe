import React,{Component} from 'react'
import './NewModule.css'
import Form1 from '../NewModule/Form1/Form1'
import Form2 from '../NewModule/Form2/Form2'
import NewModuleStatus from '../NewModule/NewModuleStatus/NewModuleState'
import {MdImportantDevices} from 'react-icons/md'
class NewModule extends Component{
	state={
		phase2:false,
        temperature:false,
        dataExchange:false,
        activityState:false,
        activityDuration:false,
        form2IsValid:false,
        name:"",
        type:"",
        number:null,
        description:"",
        form1IsValid:false
	}
	changephaseHandler=()=>{
		this.setState((prevState)=>{
			return{
				phase2:!prevState.phase2,

			}
		})
	}


    isInt=(value)=>{
        let x;
        return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);        
    }
    form1Handler=(step,item)=>{
        switch(step){
            case 0:
                this.setState({
                    name:item,
                    form1IsValid:item.trim().length && this.state.type.trim().length && this.state.description.trim().length && this.isInt(this.state.number) 
                })
                break;
            case 1:
                this.setState({
                    type:item,
                    form1IsValid:item.trim().length && this.state.name.trim().length && this.state.description.trim().length && this.isInt(this.state.number)
                })
                break;
            case 2:
                this.setState({
                    number:item,
                    form1IsValid:this.isInt(item) && this.state.type.trim().length && this.state.description.trim().length && this.state.name.trim().length
                })
                break;
            case 3:
                this.setState({
                    description:item,
                    form1IsValid:item.trim().length && this.state.type.trim().length && this.state.name.trim().length && this.isInt(this.state.number)
                })
                break;
        }
    }
  

    selectItemsHandler=(item)=>{
        switch(item){
            case 0:
                this.setState((prevState)=>{
                    return {
                        temperature:!prevState.temperature,
                        form2IsValid:!prevState.temperature || prevState.dataExchange || prevState.activityState || prevState.activityDuration
                    }
                })
                break;
            case 1:
                this.setState((prevState)=>{
                    return{
                        dataExchange:!prevState.dataExchange,
                        form2IsValid:prevState.temperature || !prevState.dataExchange || prevState.activityState || prevState.activityDuration
                    }
                })
                break;
            case 2:
                this.setState((prevState)=>{
                    return{
                        activityState:!prevState.activityState,
                        form2IsValid:prevState.temperature || prevState.dataExchange || !prevState.activityState || prevState.activityDuration
                    }
                })
                break;
            case 3:
                this.setState((prevState)=>{
                    return{
                        activityDuration:!prevState.activityDuration,
                        form2IsValid:prevState.temperature || prevState.dataExchange || prevState.activityState || !prevState.activityDuration
                    }
                })
                break;
        }
    }
	render(){
		return (    
                    <div className="NewModuleContainer">
        				<div className="NewModule"> 
            				<div className="ModuleHeader" >
                				<h1><MdImportantDevices/></h1>
                				<h2>New Module</h2>
            				</div>
            				<div  className="ModuleBody">
                				<form className="LeftSide">
                    				{this.state.phase2?
                                        <Form2 navigate={this.changephaseHandler} form1IsValid={this.state.form1IsValid} form2IsValid={this.state.form2IsValid} selectItemsHandler={(item)=>this.selectItemsHandler(item)}  activityDuration={this.state.activityDuration} form2IsValid={this.state.form2IsValid} activityState={this.state.activityState} temperature={this.state.temperature}  dataExchange={this.state.dataExchange} phase={this.state.phase2}/>:
                                        <Form1 navigate={this.changephaseHandler} form1IsValid={this.state.form1IsValid} form2IsValid={this.state.form2IsValid} name={this.state.name} type={this.state.type} number={this.state.number} description={this.state.description} form1Handler={(item,text)=>this.form1Handler(item,text)} phase={this.state.phase2}/>}
                				</form>
                				<div className="RightSide">
                    				<NewModuleStatus form2IsValid={this.state.form2IsValid} name={this.state.name} type={this.state.type} number={this.isInt(this.state.number)} description={this.state.description}/>
                				</div>
           					</div>
        				</div>
   				 	</div>
			)
	}
    
}
export default NewModule