import {combineReducers} from 'redux'

import bookinghistory from './HistoryReducer';
import user from './UserReducer';
import booking from './BookingReducer'
import category from './CategoryReducer';
 

const appReducer = combineReducers({
    user,
    booking,
    category,
    bookinghistory

});

const reducer = (state, action) => {
    
    return appReducer(state, action);
}
export default reducer;