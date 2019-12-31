import React,{Component} from 'react'
import Header from '../Navigation/Header/Header'
import NewModule from '../NewModule/NewModule'
import MyModules from '../MyModules/MyModules'
import MyModuleDetails from '../MyModuleDetails/MyModuleDetails'
import Notifications from '../Notifications/Notifications'
import NotificationDetails from '../NotificationDetails/NotificationDetails'
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
               <Router >
                    <Header clicked={this.showAddNewModuleHandler}/>
                    
                     <div className="Main" >
                        <Switch>
                            <Route path="/webreathe/" exact component={MyModules}/>
                            <Route path="/webreathe/newmodule" exact component={NewModule} />
                            <Route path="/webreathe/notifications" exact component={Notifications}/>
                            <Route path="/webreathe/:id" exact component={MyModuleDetails} />
                            <Route path="/webreathe/notifications/:id" exact component={NotificationDetails} />
                            
                        </Switch>
                    </div>
                </Router>
                
                
               
            </Aux>
        )
    }
    
        
  
  
}
export default Layaout