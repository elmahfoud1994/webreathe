import { combineReducers } from 'redux'
import modules from './modules'
import notifications from './notifications'
import moduleInfos from './moduleInfos'
import notificationInfos from './notificationInfos'
import moduleSubmit from './moduleSubmit'
export default combineReducers({
  modules,
  notifications,
  moduleInfos,
  notificationInfos,
  moduleSubmit
})