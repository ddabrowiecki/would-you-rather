import {
    _getUsers,
    _getQuestions,
    formatQuestion,
    _saveQuestion,
    _saveQuestionAnswer,
  } from '../src/_Data'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }
  
  export function saveQuestion (info) {
    return _saveQuestion(info)
  }
  
  export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
  }