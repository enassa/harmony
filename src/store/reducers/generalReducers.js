import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        announcements:[],
        contributers:[],
        snackBarState:false,
        snackBarMessage:'',
        snackBarType:'',
        profileInfoState:false,
        unjoined:[],
    }
const generalReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ANNOUNCEMENT:  
        console.log(action.payload)
          
            return {
                ...state,
                announcements:[...state.announcements, ...action.payload]
            }   
        case ACTION_TYPES.GET_CONTRIBUTERS:
            return {
                ...state,
                contributers:[...state.contributers, ...action.payload]
            }   
        case ACTION_TYPES.OPEN_SNACK_BAR:
            // alert("opeeen")
            return {
                ...state,
                snackBarMessage:action.payload.message,
                snackBarType:action.payload.snackType,
                snackBarState:true,
            }   
        case ACTION_TYPES.CLOSE_SNACK_BAR:
            return {
                ...state,
                snackBarState:false,
            }   
        case ACTION_TYPES.OPEN_PROFILE_INFO:
            return {
                ...state,
                profileInfoState:true,
            }   
        case ACTION_TYPES.CLOSE_PROFILE_INFO:
            return {
                ...state,
                profileInfoState:false,
            }   
        case ACTION_TYPES.UNJOIN_ORGANIZATION:
            return {
                ...state,
                unjoined:false,
            }   
        default:
            break;
    }
    return state;
}

export default generalReducer;
