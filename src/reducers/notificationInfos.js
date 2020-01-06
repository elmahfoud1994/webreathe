const notificationInfos= (state={notification:null,module:null,loadingNotification:false,errorNotification:""},action)=>{
	switch(action.type){
		case 'LOAD_NOTIFICATION_BY_ID_REQUEST':

			return {
				notification:null,
				module:null,
				loadingNotification:true,
				errorNotification:""
			}
		case 'LOAD_NOTIFICATION_BY_ID_SUCCESS':
			console.log("dsdsds")
			return{
				...state,
				notification:action.notification,
				module:action.model,
				loadingNotification:false,
			}
		case 'LOAD_NOTIFICATION_BY_ID_FAILED':
			console.log("herppe")
			return{
				...state,
				loadingNotification:false,
				errorNotification:action.error
			}
		default:
			return state
	}
}
export default notificationInfos