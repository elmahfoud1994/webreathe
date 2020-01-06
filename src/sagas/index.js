import { all,takeLatest} from 'redux-saga/effects'
import {loadModules,loadModuleById,createModule} from './modules'
import {loadNotifications,loadNotificationById} from './notifications'
export default function *root(){

	yield all([
		takeLatest('LOAD_MODULES_REQUEST',loadModules),
		takeLatest('LOAD_MODULE_BY_ID_REQUEST',loadModuleById),
		takeLatest('CREATE_MODULE_REQUEST',createModule),
		takeLatest('LOAD_NOTIFICATIONS_REQUEST',loadNotifications),
		takeLatest('LOAD_NOTIFICATION_BY_ID_REQUEST',loadNotificationById)
	])
}