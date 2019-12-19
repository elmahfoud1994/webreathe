import React,{Component} from 'react'
import Header from '../Navigation/Header/Header'
import NewModule from '../NewModule/NewModule'
import Aux from '../../hoc/Auxilary'
import './Layout.css'
class Layaout extends Component{
    state={
        addNewModuleVisble:false
    }
    showAddNewModuleHandler=()=>{
        this.setState({
            addNewModuleVisble:true
        })
    }
    hideAddNewModuleHandler=()=>{
        this.setState({
            addNewModuleVisble:false
        })
    }
    render(){
        return(
            <Aux>
               
                <Header clicked={this.showAddNewModuleHandler}/>
                <NewModule clicked={this.hideAddNewModuleHandler} show={this.state.addNewModuleVisble}/>
                <div className="Main" >
                {this.props.children}
               
                </div>
            </Aux>
        )
    }
    
        
  
  
}
export default Layaout