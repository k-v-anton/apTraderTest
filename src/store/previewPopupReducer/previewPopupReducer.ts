type StateType = boolean
type ActionType = {
  type: string
}

const OPEN_POPUP = 'OPEN_POPUP'
const CLOSE_POPUP = 'CLOSE_POPUP'


const defaultState: StateType = false

export const previewPopupReducer = (state: StateType = defaultState, action: ActionType) => {
  switch (action.type) {
    case OPEN_POPUP:
      return true
      case CLOSE_POPUP:
        return false
  
    default:
      return state
  }
}

export const openPopupPreviewAction = () => {
  return {
    type: OPEN_POPUP,
  }
}

export const closePopupPreviewAction = () => {
  return {
    type: CLOSE_POPUP,
  }
}
