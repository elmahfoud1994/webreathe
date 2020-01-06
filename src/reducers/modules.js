const modules= (state={modules:[],loadingModules:false,countModules:1,pageModules:1,errorModules:""},action)=>{
	switch(action.type){
		case 'LOAD_MODULES_REQUEST':
			return {
				...state,
				modules:[],
				loadingModules:true,
				pageModules:action.page,
				errorModules:""
			}
		case 'LOAD_MODULES_SUCCESS':
			return{
				...state,
				modules:action.models,
				loadingModules:false,
				countModules:Math.ceil((action.count) / 10)
			}
		case 'LOAD_MODULES_FAILED':
			return{
				...state,
				loadingModules:false,
				countModules:1,
				pageModules:1,
				errorModules:action.error
			}
		default:
			return state
	}
}
export default modules