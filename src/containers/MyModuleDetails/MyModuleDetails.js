import React,{Component} from 'react'
import './MyModuleDetails.css'
import api from '../../api/api'
//importing the components building the container MyModuleDetails
import ModuleInfos from '../../components/MyModuleDetails/ModuleInfos/ModuleInfos'
import ModuleMonitor from '../../components/MyModuleDetails/ModuleMonitor/ModuleMonitor'
//Redux import ,to access the store (the store is just like a global state accessible by all containers)
import { connect } from 'react-redux'
import { loadModuleByIdRequest } from '../../actions'

//this container is responsible for the interactions with a Module Informations 
class MyModuleDetails extends Component{

	//once the page is visble this method will be called,it loads the module information
    componentDidMount(){
       this.props.loadModule(this.props.match.params.id) 
    }
    //this method renders the page.
    render(){
        {
            console.log(this.props.error)
        }

        return(
            <div className="MyModuleDetails">
                <ModuleInfos number={this.props.module&&this.props.module.number} title={this.props.module&&this.props.module.title} type={this.props.module&&this.props.module.type} state={this.props.module&&this.props.module.state} createdAt={this.props.module&&this.props.module.created_at} description={this.props.module&&this.props.module.description} />
                <div className="MyModuleStats">
                    <ModuleMonitor error={this.props.error} loading={this.props.loading} shouldMonitorDuration={this.props.module&& this.props.module.shouldMonitorActivityDuration} temperatureHistory={this.props.temperatureHistory} activityStateHistory={this.props.activityStateHistory} dataExchangeHistory={this.props.dataExchangeHistory}/>
                </div>
            </div>
            )
    }
}
//the properties we load from the store
const mapStateToProps = state => ({
    module:state.moduleInfos.module,
    loading:state.moduleInfos.loadingModule,
    temperatureHistory:state.moduleInfos.temperatureHistory,
    activityStateHistory:state.moduleInfos.activityStateHistory,
    dataExchangeHistory:state.moduleInfos.dataExchangeHistory,
    error:state.moduleInfos.errorModule
})
//the methods we can use to update the data in the  store
const mapDispatchToProps = dispatch => ({
    loadModule:(id)=>dispatch(loadModuleByIdRequest(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyModuleDetails)