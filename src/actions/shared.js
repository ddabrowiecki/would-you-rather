import { getInitialData, saveQuestion } from "../API";
import { receiveUsers, addQuestionToUser } from "../actions/users";
import { receiveQuestions, addQuestion } from "./questions";
import { getAuthedUser, loginAuthedUser } from "../actions/authedUser";

const AUTHED_ID = null;

export function handlePopulatingData() {
  return (dispatch) => {
    getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(getAuthedUser(AUTHED_ID));
    });
  };
}

export function handleLoginAuthedUser(id) {
  return (dispatch) => {
    dispatch(loginAuthedUser(id));
  };
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => {
      const id = question.id;
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(authedUser, id))
    });
  };
};
