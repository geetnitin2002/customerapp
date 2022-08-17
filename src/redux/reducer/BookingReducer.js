import * as actions from '../../component/utils/Action';
import { notUndefinedAndNull } from '../../component/utils/Validation';

const initialState = {
    bookingAppointment: null,
    bookingAppointmentError: null,
    getAllSlots: [],
    addVehicleResponse: null
}


export default function user(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type){
       
        case actions.RESET_ACTIONS:
            return {
                ...state,           
                bookingAppointment: null,
                bookingAppointmentError: null
            }
       
        case actions.pending(actions.BOOK_APPOINTMENT):
            return {
                ...state,
                showPageLoader: true,
                bookingAppointment: null
            }

        case actions.fulfilled(actions.BOOK_APPOINTMENT):
            console.log('reducer..',action.payload.data)
            return {
                ...state,
                showPageLoader: false,
                bookingAppointment: action.payload.data.bookingrefno
            }
        case actions.rejected(actions.BOOK_APPOINTMENT):
            console.log(action.payload.data)
            let message = notUndefinedAndNull(action.payload.data) ? action.payload.data : ''
           
            return {
                ...state,
                showPageLoader: false, 
                bookingAppointmentError: message.message
            }

        case actions.pending(actions.GET_ALL_SLOTS):
            return {
                ...state,
                showPageLoader: true,
                getAllSlots: []
            }

        case actions.fulfilled(actions.GET_ALL_SLOTS):
        
            return {
                ...state,
                showPageLoader: false,
                getAllSlots: action.payload.data
            }
        case actions.rejected(actions.GET_ALL_SLOTS):
        
            return {
                ...state,
                showPageLoader: false
                
            }

        case actions.pending(actions.ADD_VEHICLE):
            return {
                ...state,
                showPageLoader: true
            }

        case actions.fulfilled(actions.ADD_VEHICLE):

        console.log('dgdas vehicle',action.payload.data)
        
            return {
                ...state,
                showPageLoader: false,
                addVehicleResponse: action.payload.data
            }
        case actions.rejected(actions.ADD_VEHICLE):
        
            return {
                ...state,
                showPageLoader: false
                
            }

        default:
                return {...state}
        }
        }
