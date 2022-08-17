import * as action from "../../component/utils/Action";
import { request, asyncRequest } from "../../screen/services/Request";
import url from "../../component/utils/Url";



export function bookAppointment(body){
    return async (dispatch) => {
        let http = await request(url);
        dispatch({
        type: action.BOOK_APPOINTMENT,
        payload: http.post('/api/servicebooking',body)
      })
    }
}

export function getSlots(modelId,day){
  return async (dispatch) => {
      let http = await request(url);
      dispatch({
      type: action.GET_ALL_SLOTS,
      payload: http.get(`/api/slotbymodelid/${modelId}/${day}`)
    })
  }
}

export function addVehicle(body){
  return async (dispatch) => {
      let http = await request(url);
      dispatch({
      type: action.ADD_VEHICLE,
      payload: http.post(`/api/vehiclemst`,body)
    })
  }
}

export function resetActions(){
    return (dispatch)=>
      dispatch({
        type: action.RESET_ACTIONS,
      });
  }