import { saveQuestion, saveQuestionAnswer } from "../API";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_VOTE = "ADD_VOTE";

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
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
      dispatch(addQuestion(question));
    });
  };
};

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addVote(authedUser, questionId, voteOption) {
  return {
    type: ADD_VOTE,
    authedUser,
    questionId,
    voteOption,
  };
}

export const handleAddVote = (questionId, voteOption) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer: voteOption,
    }).then(() => {
      dispatch(addVote(authedUser, questionId, voteOption));
    });
  };
};
