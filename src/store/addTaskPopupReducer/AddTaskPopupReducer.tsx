type StateType = boolean
type ActionType = {
  type: string
}

const TOGLE_POPUP = 'TOGLE_POPUP'
const CLOSE_POPUP = 'CLOSE_POPUP'

const defaultStatePopUpCreateProject: StateType = false

export const addTaskPopupReducer = (state: StateType = defaultStatePopUpCreateProject, action: ActionType) => {
  switch (action.type) {
    case TOGLE_POPUP:
      return !state
      case CLOSE_POPUP:
        return false
  
    default:
      return state
  }
}

export const toglePopUpAddTaskAction = () => {
  return {
    type: TOGLE_POPUP,
  }
}

export const closePopUpAddTaskAction = () => {
  return {
    type: CLOSE_POPUP,
  }
}
