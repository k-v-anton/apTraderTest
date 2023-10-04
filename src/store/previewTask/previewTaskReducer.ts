import { TaskType } from "../../types/task.Types"

export type ActionType = {
  type: string
  payload: TaskType
}

const defaultState = {} as TaskType

export const CLEAR_STATE = 'CLEAR_STATE'
export const ADD_TASK = 'ADD_TASK'

export const previewTaskReducer = (state:TaskType = defaultState, action: ActionType) => {
  switch (action.type) {
    case ADD_TASK:
      return {...action.payload}

      case CLEAR_STATE:
        return defaultState
  
    default:
      return state
  }
}

export const addPreviewTaskAction = (payload: TaskType) => {
  return {
    type: ADD_TASK,
    payload,
  }
}

export const clearPreviewTaskAction = () => {
  return {
    type: CLEAR_STATE,
  }
}