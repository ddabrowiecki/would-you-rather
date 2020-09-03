import { combinedReducers } from 'redux'
import authUser from '../reducers/authedUser'
import userReducer from '../reducers/users'
import pollsReducer from '../reducers/polls'

export default combinedReducers({
    authUser,
    userReducer,
    pollsReducer,
})