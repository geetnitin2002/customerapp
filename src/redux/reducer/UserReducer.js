import * as actions from '../../component/utils/Action';
import { notUndefinedAndNull } from '../../component/utils/Validation';
import { setUser_data } from '../../screen/services/Session';

const initialState = {
    signIn : null,
    signUpMessage: null,
    signUpError: null,
    signInError: null,
    userdata : null,
}


export default function user(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type){
       
        case actions.RESET_ACTIONS:
            console.log("....................... called...............")
            return {
                ...state,           
                signUpMessage: null,
                signUpError: null,
                signIn: null,
                signInError: null
            }
        //// signup
       
        case actions.pending(actions.SIGNUP):
            return {
                ...state,
                showPageLoader: true,
                user: null
            }

        case actions.fulfilled(actions.SIGNUP):
        
            return {
                ...state,
                showPageLoader: false,
                signUpMessage: action.payload.data.message
            }
        case actions.rejected(actions.SIGNUP):
            let message = notUndefinedAndNull(action.payload.data) ? action.payload.data : ''
           
            return {
                ...state,
                showPageLoader: false, 
                signUpError: message.message
            }

        //// signin

        case actions.pending(actions.LOGIN):
                return {
                    ...state,
                    showPageLoader: true,
                    signIn: null
                }
    
        case actions.fulfilled(actions.LOGIN):
            
                return {
                    ...state,
                    showPageLoader: false,
                    signIn: action.payload.data
                }
        case actions.rejected(actions.LOGIN):
                let loginMessage = notUndefinedAndNull(action.payload.data) ? action.payload.data : ''
               
                return {
                    ...state,
                    showPageLoader: false, 
                    signInError: loginMessage.message
                }  
                

        ///////user data
        case actions.pending(actions.USER_DATA):
            return {
                ...state,
               // showPageLoader: true,
                //user: null
            }

        case actions.fulfilled(actions.USER_DATA):
            return {
                ...state,
               // showPageLoader: false,
                userdata: action.payload.data
            }
        case actions.rejected(actions.USER_DATA):
            let err_msg = notUndefinedAndNull(action.payload.data) ? action.payload.data : ''
            return {
                ...state,
            }        
                
        /////update
        
        case actions.pending(actions.UPDATE):
            return {
                ...state,
               // showPageLoader: true,
                //user: null
            }

        case actions.fulfilled(actions.UPDATE):
        
            return {
                ...state,
               // showPageLoader: false,
                userdata: action.payload.data
            }
        case actions.rejected(actions.UPDATE):
            let updateMessage = notUndefinedAndNull(action.payload.data) ? action.payload.data : ''
            return {
                ...state,
            }

        /// change password
        
        case actions.pending(actions.CHANGE_PASSWORD):
            return {
                ...state,
            }

        case actions.fulfilled(actions.CHANGE_PASSWORD):
            alert("Password Updated Successfully")
            return {
                initialState,
            }
        case actions.rejected(actions.CHANGE_PASSWORD):
            let change_pass_Message = notUndefinedAndNull(action.payload.data) ? action.payload.data : ''
            return {
                ...state,
            }
        
        default:
                return {...state}
        }
        }
