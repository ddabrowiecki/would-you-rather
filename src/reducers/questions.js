import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_VOTE,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_VOTE:
      const { questionId, voteOption, authedUser } = action;
      return {
            ...state,
            [questionId]: {
                ...state[questionId],
                [voteOption]: {
                    ...state[questionId][voteOption],
                    votes: state[questionId][voteOption].votes.concat([authedUser])
                }
            },
        }
    default:
      return state;
  }
}
