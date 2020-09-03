import { getInitialData } from '../API'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from './questions'
import { getAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginness'

export function handlePopulatingData() {
    return (dispatch) => {
        getInitialData()
        .then(( { users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(getAuthedUser(AUTHED_ID))
        })
    }
  }