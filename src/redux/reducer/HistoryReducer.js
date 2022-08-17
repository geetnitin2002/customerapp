import * as actions from '../../component/utils/Action';
import { notUndefinedAndNull } from '../../component/utils/Validation';

const initialState = {
    bookinghistory: []
}

export default function bookinghistory(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type){
        case actions.pending(actions.GET_ALL_BOOKINGS):
            return {
                ...state,
                showPageLoader: true,
                bookinghistory: []
            }

        case actions.fulfilled(actions.GET_ALL_BOOKINGS):
        //   console.log(".......................hhhhhh............................................")
          console.log( action.payload.data);
            return {
                ...state,
                showPageLoader: false,
                bookinghistory: action.payload.data
            }
        case actions.rejected(actions.GET_ALL_BOOKINGS):
        
            return {
                ...state,
                showPageLoader: false
                
            }

        default:
                return {...state}
        }
        }
