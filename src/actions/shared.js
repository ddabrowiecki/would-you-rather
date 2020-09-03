import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receivePolls } from '../actions/polls'
import { getAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginness'

function handlePopulatingData() {
    return (dispatch) => {
        getInitialData()
        .then(( { users, polls }) => {
            dispatch(receiveUsers(users))
            dispatch(receivePolls(polls))
            dispatch(getAuthedUser(AUTHED_ID))
        })
    }
  }