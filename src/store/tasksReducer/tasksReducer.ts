import { TaskType } from '../../types/task.Types'

export type StateType = TaskType[]
export type ActionType = {
  type: string
  payload: TaskType
}

const defaultState = [] as StateType

export const CHANGE_STATUS_TASK = 'CHANGE_STATUS_TASK'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export const tasksReducer = (state: StateType = defaultState, action: ActionType) => {
  switch (action.type) {
    case CHANGE_STATUS_TASK:
      return [...state.filter((el) => el.id !== action.payload.id), action.payload]
    case ADD_TASK:
      return [...state, action.payload]
      case DELETE_TASK:
        return [...state.filter(el => el.id !== action.payload.id)]

    default:
      return state
  }
}

export const chanjeTaskStatusAction = (payload: TaskType) => {
  return {
    type: CHANGE_STATUS_TASK,
    payload,
  }
}

export const addTaskAction = (payload: TaskType) => {
  return {
    type: ADD_TASK,
    payload,
  }
}

export const deleteTaskAction = (payload: TaskType) => {
  return {
    type: DELETE_TASK,
    payload,
  }
}
