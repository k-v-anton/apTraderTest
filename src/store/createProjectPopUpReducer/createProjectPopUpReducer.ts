type StateType = boolean
type ActionType = {
  type: string
}

const TOGLE_POPUP = 'TOGLE_POPUP'

const defaultStatePopUpCreateProject: StateType = false

export const createProjectPopUpReducer = (state: StateType = defaultStatePopUpCreateProject, action: ActionType) => {
  switch (action.type) {
    case TOGLE_POPUP:
      return !state

    default:
      return state
  }
}

export const toglePopUpCreateProjectAction = () => {
  return {
    type: TOGLE_POPUP,
  }
}
