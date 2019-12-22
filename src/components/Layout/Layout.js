import React,{Component} from 'react'
import Header from '../Navigation/Header/Header'
import NewModule from '../NewModule/NewModule'
import MyModules from '../MyModules/MyModules'
import Notifications from '../Notifications/Notifications'
import Aux from '../../hoc/Auxilary'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

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
               <Router>
                    <Header clicked={this.showAddNewModuleHandler}/>
                    <NewModule clicked={this.hideAddNewModuleHandler} show={this.state.addNewModuleVisble}/>
                     <div className="Main" >
                        <Switch>
                            <Route path="/" exact component={MyModules}/>
                            <Route path="/notifications" exact component={Notifications}/>
                        </Switch>
                    </div>
                </Router>
                
                
               
            </Aux>
        )
    }
    
        
  
  
}
export default Layaout