export const createModuleRequest = model => ({
	type:'CREATE_MODULE_REQUEST',
	model
})
export const createModuleSuccess= () =>({
	type:'CREATE_MODULE_SUCCESS'
})

export const creteModuleFailed= error => ({
	type:'CREATE_MODULE_FAILED',
	error
})
export const clearSubmit= ()=>({
	type:'CLEAR_SUBMIT'
})

export const loadModulesRequest= page => ({
	type:'LOAD_MODULES_REQUEST',
	page
}) 
export const loadModulesSuccess= (models,count) => ({
	type:'LOAD_MODULES_SUCCESS',
	models,
	count
})
export const loadModulesFailed= error =>({
	type:'LOAD_MODULES_FAILED',
	error
})

export const loadModuleByIdRequest = id => ({
	type:'LOAD_MODULE_BY_ID_REQUEST',
	id
})
export const loadModuleByIdSuccess = (model,temperatureHistory,activityStateHistory,dataExchangeHistory) =>({
	type:'LOAD_MODULE_BY_ID_SUCCESS',
	model,
	temperatureHistory,
	activityStateHistory,
	dataExchangeHistory
})
export const loadModuleByIdFailed= error =>({
	type:'LOAD_MODULE_BY_ID_FAILED',
	error
})

//Notification Actions

export const loadNotificationsRequest= page => ({
	type:'LOAD_NOTIFICATIONS_REQUEST',
	page
}) 
export const loadNotificationsSuccess= (notifications,count) => {
	console.log("dhjhsdhsdjshdjsldld jdsjsdj")
	return ({
	type:'LOAD_NOTIFICATIONS_SUCCESS',
	notifications,
	count
})}
export const loadNotificationsFailed= error =>({
	type:'LOAD_NOTIFICATIONS_FAILED',
	error
})

export const loadNotificationByIdRequest = id => ({
	type:'LOAD_NOTIFICATION_BY_ID_REQUEST',
	id
})
export const loadNotificationByIdSuccess = (notification,model) =>({
	type:'LOAD_NOTIFICATION_BY_ID_SUCCESS',
	notification,
	model
})
export const loadNotificationByIdFailed= error =>({
	type:'LOAD_NOTIFICATION_BY_ID_FAILED',
	error
})