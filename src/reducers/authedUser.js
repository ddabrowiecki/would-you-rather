import { AUTHED_USER } from '../actions/authedUser'

export default function authReducer(state = null, action) {
    switch(action.type) {
        case AUTHED_USER:
            return {
                ...state,
                ...action.id,
            }
        default:
            return state
    }
}