import { useDispatch, useSelector } from 'react-redux'
import { GlobalStoreStateType } from '../../store'
import { closePopupPreviewAction } from '../../store/previewPopupReducer/previewPopupReducer'
import { clearPreviewTaskAction } from '../../store/previewTask/previewTaskReducer'
import { TaskType } from '../../types/task.Types'
import styles from './styles.module.scss'
type PropsType = {
  task: TaskType
}
export const PreviewPopup = (props: PropsType) => {
  const { task } = props
  const dispatch = useDispatch()
  const popupState = useSelector((state: GlobalStoreStateType) => state.previewPopup)

  const handleClickClose = () => {
    dispatch(closePopupPreviewAction())
    dispatch(clearPreviewTaskAction())
  }

  return (
    <div className={popupState ? `${styles.container} ${styles.active}` : styles.container}>
      <span>{task.id}</span>
      <span>{task.description}</span>
      <button onClick={handleClickClose} className={styles.btn}>
        close
      </button>
    </div>
  )
}
