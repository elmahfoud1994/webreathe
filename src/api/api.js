//this is the list of the methods we use to communicate with the backend.


/*
	Modules methods
*/

//this method loads the modules from a backend server using a get request (supports pagination).
const getModules=async(currentPage)=>{
	try{
		const response=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/modules?page='+(currentPage-1))
		const jsonResponse= await response.json()
		if(jsonResponse.errorMessage){
			throw {message:jsonResponse.errorMessage}
		}
		return {
			modules:jsonResponse.modules,
			count:jsonResponse.count,
		}
	}
	catch(error){
		throw {message:error.message}
	}
}
//this method loads a module information from a backend server using a get request.
const getModuleInfos=async(id)=>{
	try{
		const response=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/modules/'+id)
		const jsonResponse= await response.json()
		if(jsonResponse.errorMessage){
			throw {message:jsonResponse.errorMessage}
		}
		return{
			module:jsonResponse.module,
			temperatureHistory:jsonResponse.temperatureHistory,
			activityStateHistory:jsonResponse.activityStateHistory,
			dataExchangeHistory:jsonResponse.dataExchangeHistory
		}
	}
	catch(error){
		throw {message:error.message}
	}
}
//this method allows us to create a new module i using a post request.
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
		const jsonResponse= await result.json()
		if(jsonResponse.errorMessage){

			throw {message:jsonResponse.errorMessage}
		}
	}
	catch(error){
		throw {message:error.message}
	}
}

/**
	Notifications related methods
*/

const updateNotificationSeen=async(model)=>{
	try{
		const result=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/notifications', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(model),
		});
	}
	catch(error){

	}
}

//this method loads a module information from a backend server using a get request.
const getNotificationInfos=async(id)=>{
	try{
		const response=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/notifications/'+id)
		const jsonResponse= await response.json()
		if(jsonResponse.errorMessage){
			throw {message:jsonResponse.errorMessage}
		}
		return{
			module:jsonResponse.module,
			notification:jsonResponse.notification,
		}
	}
	catch(error){
		throw {message:error.message}
	}
}

//this method loads the notifications from a backend server using a get request (supports pagination).
const getNotifications=async(currentPage)=>{
	try{
		
		const response=await fetch('https://bouatim-webreath-iot-backend.herokuapp.com/api/notifications?page='+(currentPage-1))
		const jsonResponse= await response.json()
		if(jsonResponse.errorMessage){
			throw {message:jsonResponse.errorMessage}
		}
		return {
			notifications:jsonResponse.notifications,
			count:jsonResponse.count
		}
	}
	catch(error){
		throw {message:error.message}
	}
}




export default {getModules,getNotifications,getModuleInfos,getNotificationInfos,createNewModule,updateNotificationSeen}