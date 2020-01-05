

//this method loads the modules from a backend server.
const getModules=async(currentPage)=>{
	try{
		const response=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/modules?page='+(currentPage-1))
		const jsonResponse= await response.json()
		console.log(jsonResponse)
		return {
			modules:jsonResponse.modules,
			count:jsonResponse.count,
			error:""
		}
	}
	catch(error){
		return{
			modules:[],
			count:0,
			error:error.message
		}
	}
}

const getModuleInfos=async(id)=>{
	try{
		const response=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/modules/'+id)
		const jsonResponse= await response.json()
		return{
			module:jsonResponse.module,
			temperatureHistory:jsonResponse.temperatureHistory,
			activityStateHistory:jsonResponse.activityStateHistory,
			dataExchangeHistory:jsonResponse.dataExchangeHistory,
			error:""
		}
	}
	catch(error){
		return{
			module:null,
			temperatureHistory:[],
			activityStateHistory:[],
			dataExchangeHistory:[],
			error:error.message
		}
	}
}
const createNewModule=async(model)=>{
	try{
		const result=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/modules', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(model),
		});
		const response=await result.json()
		return response
	}
	catch(error){
		return error
	}
}
const getNotificationInfos=async(id)=>{
	try{
		const response=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/notifications/'+id)
		const jsonResponse= await response.json()
		return{
			module:jsonResponse.module,
			notification:jsonResponse.notification,
			error:""
		}
	}
	catch(error){
		return{
			module:null,
			notification:null,
			error:error.message
		}
	}
}

//this method loads the notifications from a backend server.
const getNotifications=async(currentPage)=>{
	try{
		
		const response=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/notifications?page='+(currentPage-1))
		const jsonResponse= await response.json()
		return {
			notifications:jsonResponse.notifications,
			count:jsonResponse.count,
			error:""
		}
	}
	catch(error){
		return{
			notifications:[],
			count:0,
			error:error.message
		}
	}
}




export default {getModules,getNotifications,getModuleInfos,getNotificationInfos,createNewModule}