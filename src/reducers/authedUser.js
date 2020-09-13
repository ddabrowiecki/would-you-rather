import { AUTHED_USER, CHANGE_AUTHED_USER } from '../actions/authedUser'

export default function authedUser(state = null, action) {
    switch(action.type) {
        case AUTHED_USER:
            return action.id
        case CHANGE_AUTHED_USER:
            return action.id
        default:
            return state
    }
}