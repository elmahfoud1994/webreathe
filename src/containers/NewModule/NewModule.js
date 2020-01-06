import React,{ Component } from 'react'
import './NewModule.css'
//importing the forms that are used to create a new Module
import Form1 from '../../components/NewModule/Form1/Form1'
import Form2 from '../../components/NewModule/Form2/Form2'
//importing the a commonent that allow to track the status of the form
import NewModuleStatus from '../../components/NewModule/NewModuleStatus/NewModuleState'
import api from '../../api/api'
//import an icon from react icons
import { MdImportantDevices } from 'react-icons/md'
//Redux import ,to access the store (the store is just like a global state accessible by all containers)
import { connect } from 'react-redux'
import { createModuleRequest,clearSubmit } from '../../actions'
class NewModule extends Component{
    //this is the state of the container,i used it to control ,and to fill the form.
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
        form1IsValid:false,
	}

    //this methode change the form we are filling,we have two forms and we need to fill them both to submit form.
	changephaseHandler=()=>{
		this.setState((prevState)=>{
			return{
				phase2:!prevState.phase2,

			}
		})
	}

    //a method that validates if the value of a form is an integer
    isInt=(value)=>{
        let x;
        return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);        
    }

    //this methods ensures that the data filled in the first form are valid    
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
  
    //this method allows  us to select the items to monitor in the second form
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

    //this method submits the data filled in both forms.
     submitHandler=async(e)=>{
       e.preventDefault()
       this.props.createModule({
            title:this.state.name,
            type:this.state.type,
            number:this.state.number,
            description:this.state.description,
            shouldMonitorData:this.state.dataExchange,
            shouldMonitorTemperature:this.state.temperature,
            shouldMonitorActivityState:this.state.activityState,
            shouldMonitorActivityDuration:this.state.activityDuration
       })
        
    }
    //this method renders the page
	render(){
        //if the module was successufuly created we navigate ,to the list modules route,and we clear the forms
        if(this.props.success){
            this.props.clearSubmit()
            this.props.history.push('/webreathe')

        }
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
                                        <Form2 navigate={this.changephaseHandler} submit={this.submitHandler}  submitting={this.props.submitting} form1IsValid={this.state.form1IsValid} form2IsValid={this.state.form2IsValid} selectItemsHandler={(item)=>this.selectItemsHandler(item)}  activityDuration={this.state.activityDuration} form2IsValid={this.state.form2IsValid} activityState={this.state.activityState} temperature={this.state.temperature}  dataExchange={this.state.dataExchange} phase={this.state.phase2}/>:
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
//the properties we load from the store
const mapStateToProps = state => ({
    submitting: state.moduleSubmit.submitting,
    error:state.moduleSubmit.errorSubmit,
    success:state.moduleSubmit.success
})
//the methods we can use to update the data in the  store
const mapDispatchToProps = dispatch => ({
    createModule: (module) => dispatch(createModuleRequest(module)),
    clearSubmit:() => dispatch(clearSubmit())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewModule)