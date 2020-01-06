import {call,put} from 'redux-saga/effects'
import api from '../api/api'
export function *loadModules(action){
	try{

		const result=yield call(api.getModules,action.page)
		yield put({type:'LOAD_MODULES_SUCCESS',models:result.modules,count:result.count})
	}
	catch(error){
		yield put({type:'LOAD_MODULES_FAILED',error:error.message})
	}
}

export function *loadModuleById(action){
	try{
		const result=yield call(api.getModuleInfos,action.id)
		yield put({type:'LOAD_MODULE_BY_ID_SUCCESS',model:result.module,temperatureHistory:result.temperatureHistory,activityStateHistory:result.activityStateHistory,dataExchangeHistory:result.dataExchangeHistory})
	}
	catch(error){
		yield put({type:'LOAD_MODULE_BY_ID_FAILED',error:error.message})
	}
}

export function *createModule(action){
	try{

		const result=yield call(api.createNewModule,action.model)
		yield put({type:'CREATE_MODULE_SUCCESS'})
	}
	catch(error){
		yield put({type:'CREATE_MODULE_FAILED',error:error.message})
	}
}