const moduleSubmit=(state={submitting:false,errorSubmit:"",success:false},action)=>{
	switch(action.type){
		case 'CREATE_MODULE_REQUEST':
			return{
				submitting:true,
				errorSubmit:"",
				success:false
			}
		case 'CREATE_MODULE_SUCCESS':
			return{
				...state,
				submitting:false,
				success:true
			}
		case 'CREATE_MODULE_FAILED':
			console.log(action.error)
			return{
				submitting:false,
				errorSubmit:action.error
			}
		case 'CLEAR_SUBMIT':
			return{
				success:false,
				submitting:false,
				errorSubmit:""
			}
		default:
			return state
	}
}
export default moduleSubmit