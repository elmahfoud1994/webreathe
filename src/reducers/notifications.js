const notifications= (state={notifications:[],loadingNotifications:false,countNotifications:1,pageNotifications:1,errorNotifications:""},action)=>{
	switch(action.type){
		case 'LOAD_NOTIFICATIONS_REQUEST':

			return {
				...state,
				notifications:[],
				loadingNotifications:true,
				pageNotifications:action.page,
				errorNotifications:""
			}
		case 'LOAD_NOTIFICATIONS_SUCCESS':
			return{
				...state,
				notifications:action.notifications,
				loadingNotifications:false,
				countNotifications:Math.ceil((action.count) / 40)
			}
		case 'LOAD_NOTIFICATIONS_FAILED':
			return{
				...state,
				loadingNotifications:false,
				countNotifications:1,
				pageNotifications:1,
				errorNotifications:action.error
			}
		default:
			return state
	}
}
export default notifications