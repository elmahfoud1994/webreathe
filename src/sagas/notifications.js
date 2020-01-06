import {call,put,fork} from 'redux-saga/effects'
import api from '../api/api'

export function *loadNotifications(action){
	try{
		const result=yield call(api.getNotifications,action.page)
		yield put({type:'LOAD_NOTIFICATIONS_SUCCESS',notifications:result.notifications,count:result.count})
	}
	catch(error){
		yield put({type:'LOAD_NOTIFICATIONS_FAILED',error:error.message})
	}
}

export function *loadNotificationById(action){
	try{
		const result=yield call(api.getNotificationInfos,action.id)
		yield put({type:'LOAD_NOTIFICATION_BY_ID_SUCCESS',notification:result.notification,model:result.module})
		yield call(api.updateNotificationSeen,{id:action.id})
	}
	catch(error){
		yield put({type:'LOAD_NOTIFICATION_BY_ID_FAILED',error:error.message})
	}
}
