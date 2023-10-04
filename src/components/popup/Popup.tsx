import {MouseEvent, MouseEventHandler} from 'react'

import { useDispatch } from 'react-redux'
import { closePopUpAddTaskAction } from '../../store/addTaskPopupReducer/AddTaskPopupReducer'
import styles from './styles.module.scss'
import { closePopUpCreateProjectAction } from '../../store/createProjectPopUpReducer/createProjectPopUpReducer'

type PropsType = {
  show: boolean
  children: JSX.Element | string
}

export const Popup = (props: PropsType) => {
  const dispatch = useDispatch()
  const stylesShow: { [key: string]: string } = {
    opacity: '1',
    visibility: 'visible',
    transition: 'opacity .25s linear',
  }
  const stylesHight: { [key: string]: string } = {
    opacity: '0',
    visibility: 'hidden',
    transition: 'opacity .25s linear',
  }

  const handleClickContainer = (e: any) => {
    if (e.target.getAttribute('data-name')) {
          dispatch(closePopUpAddTaskAction())
          dispatch(closePopUpCreateProjectAction())
    }
  }
  const { children, show } = props
  return (
    <div className={styles.containerPopup} data-name='popup' style={show ? stylesShow : stylesHight} onClick={handleClickContainer}>
      <div className={styles.popup}>{children}</div>
    </div>
  )
}
