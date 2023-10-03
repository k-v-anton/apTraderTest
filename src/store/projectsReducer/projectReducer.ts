import { ProjectType } from "../../types/project.Types"

type StateType = ProjectType[]

type ActionType = {
  type: string
  payload: StateType
}

const defaultState: StateType = []

const ADD_PROJECT = 'ADD_PROJECT'

export const projectsReducer = (state:StateType = defaultState, action: ActionType): StateType=> {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.payload] as StateType
  
    default:
      return state
  }
}


export const addProjectAction = (newProject: ProjectType) => {
  return {
    type: ADD_PROJECT,
    payload: newProject
  }
}

