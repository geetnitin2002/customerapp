import * as actions from '../../component/utils/Action';
import { notUndefinedAndNull } from '../../component/utils/Validation';

const initialState = {
    getAllCategory : []
}


export default function category(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type){
       
        case actions.pending(actions.CATEGORY_ALL):
            return {
                ...state,
                showPageLoader: true,
                
            }

        case actions.fulfilled(actions.CATEGORY_ALL):
           
            return {
                ...state,
                showPageLoader: false,
                getAllCategory: action.payload.data
            }
        case actions.rejected(actions.CATEGORY_ALL):
           
            return {
                ...state,
                showPageLoader: false
            }

        default:
                return {...state}
        }
        }
