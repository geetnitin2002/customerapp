import * as action from "../../component/utils/Action";
import { request, asyncRequest } from "../../screen/services/Request";
import url from "../../component/utils/Url";



export function getAllCategory(){
    return async (dispatch) => {
        let http = await request(url);
        dispatch({
        type: action.CATEGORY_ALL,
        payload: http.get('/api/getallmodels')
      })
    }
}