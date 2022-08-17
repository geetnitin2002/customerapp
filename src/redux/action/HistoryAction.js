import * as action from "../../component/utils/Action";
import { request, asyncRequest } from "../../screen/services/Request";
import url from "../../component/utils/Url";

export function getbookings(id){
  return async (dispatch) => {
      let http = await request(url);
      dispatch({
      type: action.GET_ALL_BOOKINGS,
      payload: http.get(`/api/servicebookingsbasedonuserid/${id}`)
    })
  }
}

 