import { ProjectType } from '../../types/project.Types'
import { TaskType } from '../../types/task.Types'

export type StateType = ProjectType[]

export type ActionType = {
  type: string
  projectId?: number
  payload: ProjectType | TaskType
}

const defaultState: StateType = []

export const DELETE_PROJECT = 'DELETE_PROJECT'
export const COMPLITE_PROJECT = 'COMPLITE_PROJECT'
export const IN_WORK_PROJECT = 'IN_WORK_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'

export const projectsReducer = (state: StateType = defaultState, action: ActionType): StateType => {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.payload] as StateType
    case DELETE_PROJECT:
      return [...state.filter((el) => el !== action.payload)]
    case COMPLITE_PROJECT:
      return [...state.filter((el) => el.id !== action.payload.id), action.payload] as StateType
    case IN_WORK_PROJECT:
      return [...state.filter((el) => el.id !== action.payload.id), action.payload] as StateType
    default:
      return state
  }
}


export const addProjectAction = (payload: ProjectType) => {
  return {
    type: ADD_PROJECT,
    payload,
  }
}

export const deleteProjectAction = (payload: ProjectType) => {
  return {
    type: DELETE_PROJECT,
    payload,
  }
}

export const compliteProjectAction = (payload: ProjectType) => {
  return {
    type: COMPLITE_PROJECT,
    payload,
  }
}

export const inWorkProjectAction = (payload: ProjectType) => {
  return {
    type: IN_WORK_PROJECT,
    payload,
  }
}
