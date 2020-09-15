import { AUTHED_USER, LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from '../actions/authedUser'

export default function authedUser(state = null, action) {
    switch(action.type) {
        case AUTHED_USER:
            return action.id
        case LOGIN_AUTHED_USER:
            return action.id
        case LOGOUT_AUTHED_USER:
            return null
        default:
            return state
    }
}