import * as action from "../../component/utils/Action";

export function showErrorToast(message){
    return (dispatch)=>
      dispatch({
        type: action.SHOW_ERROR_TOAST,
        meta: {message: message}
      });
  }
  
export function resetErrorToast(){
    return (dispatch)=>
    dispatch({
    type: action.RESET_TOAST
    });
}