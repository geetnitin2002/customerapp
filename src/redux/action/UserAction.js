import * as action from "../../component/utils/Action";
import { request, asyncRequest } from "../../screen/services/Request";
import url from "../../component/utils/Url";



export function login(body){
    return async (dispatch) => {
        let http = await request(url);
        dispatch({
        type: action.LOGIN,
        payload: http.post('/api/signin',body)
      })
    }
}


export function signUp(body){
    return async (dispatch) => {
        let http = await request(url);
        dispatch({
        type: action.SIGNUP,
        payload: http.post('/api/signup',body)
      })
    }
}

export function resetActions(){
  return (dispatch)=>
    dispatch({
      type: action.RESET_ACTIONS,
    });
}

export function update(body, id){
  return async (dispatch) => {
      let http = await request(url);
      dispatch({
      type: action.UPDATE,
      payload: http.put('/api/profileupdate/'+id, body)
    })
  }
}

export function change_password(body, id){
  return async (dispatch) => {
      let http = await request(url);
      dispatch({
      type: action.CHANGE_PASSWORD,
      payload: http.put('/api/resetpassword/'+id, body)
    })
  }
}

export function getdata(id){
  return async (dispatch) => {
      let http = await request(url);
      dispatch({
      type: action.USER_DATA,
      payload: http.get('/api/userbyid/'+id)
    })
  }
}