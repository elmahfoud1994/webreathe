import React,{Component} from 'react'
import './Layout.css'
//those are the components who constructs this container
import Header from '../Navigation/Header/Header'
import NewModule from '../../containers/NewModule/NewModule'
import MyModules from '../../containers/MyModules/MyModules'
import MyModuleDetails from '../../containers/MyModuleDetails/MyModuleDetails'
import Notifications from '../../containers/Notifications/Notifications'
import NotificationDetails from '../../containers/NotificationDetails/NotificationDetails'
import Aux from '../../hoc/Auxilary'
//importing the library responsible of handling the navigation in our app
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

class Layaout extends Component{
   //this method is responsible to render the page
   //this page is defining the structure of our website.
   //please note that each route call a container ,wich will be displayed.
   /*
    please note  this should be placed with the 
    containers,i only missed to place him in the
    containers folder
    */
    render(){
        return(
            <Aux>
               <Router >
                    <Header/>
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