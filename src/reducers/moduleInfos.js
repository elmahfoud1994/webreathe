const moduleInfos=(state={module:null,loadingModule:false,temperatureHistory:[],activityStateHistory:[],dataExchangeHistory:[],errorModule:""},action)=>{
	switch(action.type){
		case 'LOAD_MODULE_BY_ID_REQUEST':
			return {
				module:null,
				loadingModule:true,
				temperatureHistory:[],
				activityStateHistory:[],
				dataExchangeHistory:[],
				errorModule:""
			}
		case 'LOAD_MODULE_BY_ID_SUCCESS':
			return{
				...state,
				module:action.model,
				loadingModule:false,
				temperatureHistory:action.temperatureHistory,
				activityStateHistory:action.activityStateHistory,
				dataExchangeHistory:action.dataExchangeHistory,
			}
		case 'LOAD_MODULE_BY_ID_FAILED':
			return{
				...state,
				loadingModule:false,
				errorModule:action.error
			}
		default:
			return state
	}
}
export default moduleInfos