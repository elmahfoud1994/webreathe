import React,{Component} from 'react'
import './MyModuleDetails.css'
import api from '../../api/api'
import ModuleInfos from './ModuleInfos/ModuleInfos'
import ModuleMonitor from './ModuleMonitor/ModuleMonitor'
class MyModuleDetails extends Component{
    state={
        module:null,
        loading:true,
        temperatureHistory:[],
        activityStateHistory:[],
        dataExchangeHistory:[],
        error:""
    }
    async componentDidMount(){
       let result= await api.getModuleInfos(this.props.match.params.id)
    
        this.setState({...result,loading:false})
       
      
     
    }
    render(){
        return(
            <div className="MyModuleDetails">
                <ModuleInfos title={this.state.module&&this.state.module.title} type={this.state.module&&this.state.module.type} state={this.state.module&&this.state.module.type} createdAt={this.state.module&&this.state.module.created_at} description={this.state.module&&this.state.module.description} />
                <div className="MyModuleStats">
                    <ModuleMonitor error={this.state.error} loading={this.state.loading} shouldMonitorDuration={this.state.module&& this.state.module.shouldMonitorActivityDuration} temperatureHistory={this.state.temperatureHistory} activityStateHistory={this.state.activityStateHistory} dataExchangeHistory={this.state.dataExchangeHistory}/>
                </div>
            </div>
            )
    }
}
export default MyModuleDetails
