import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSearchTask } from '../../hooks/useSearchTask'
import { chanjeTaskStatusAction, deleteTaskAction } from '../../store/tasksReducer/tasksReducer'
import styles from './styles.module.scss'
import { openPopupPreviewAction } from '../../store/previewPopupReducer/previewPopupReducer'
import { addPreviewTaskAction } from '../../store/previewTask/previewTaskReducer'

type PropsType = {
  id: string
  title: string
  create: string
  complite: string
  description?: string
  priority: string
  status: string
}

export const Task = (props: PropsType) => {
  const { id, title, create, complite, priority, status } = props
  const projectName = useParams().projectName
  const task = useSearchTask(projectName, id)
  const dispatch = useDispatch()

  const shadow = () => {
    if (status === 'queue') return styles.shadowQueue
    else if (status === 'development') return styles.shadowDevelopment
    else if (status === 'done') return styles.shadowDone
  }

  const handleClickRemove = () => {
    if (status === 'done') {
      const newTask = { ...task, status: 'development' }
      dispatch(chanjeTaskStatusAction(newTask))
    } else if (status === 'development') {
      const newTask = { ...task, status: 'queue' }
      dispatch(chanjeTaskStatusAction(newTask))
    }
  }
  const handleClickNext = () => {
    if (status === 'queue') {
      const newTask = { ...task, status: 'development' }

      dispatch(chanjeTaskStatusAction(newTask))
    } else if (status === 'development') {
      const newTask = { ...task, status: 'done' }
      dispatch(chanjeTaskStatusAction(newTask))
    }
  }

  const handleCkickDeleteTask = () => {
    dispatch(deleteTaskAction(task))
  }

  const colorPriority = () => {
    if (priority === 'low') {
      return {'background-color': 'green'} as React.CSSProperties
    }
    else if (priority ==='medium') {
      return {'background-color': 'orange'} as React.CSSProperties
    }
    else if (priority ==='high') {
      return {'background-color': 'red'} as React.CSSProperties
    }
  }

  const handleClickPreview = () => {
    dispatch(addPreviewTaskAction(task))
    dispatch(openPopupPreviewAction())
  }

  return (
    <div className={`${styles.container} ${shadow()}`}>
      <span className={styles.number}>
        {id}
        <span className={styles.priority} style={colorPriority()}/>
      </span>

      <span className={styles.titleTask}>{title}</span>
      <span className={styles.dateCreate}>date create: {create}</span>
      <span className={styles.dateComplite}>date complite: {complite}</span>
      <div className={styles.wrapperBtns}>
        {(status === 'development' || status === 'done') && (
          <button className={styles.btn} onClick={handleClickRemove}>
            {'<='}
          </button>
        )}
        <button className={styles.btn} onClick={handleCkickDeleteTask}>
          delete
        </button>
        <button className={styles.btn}>edit</button>
        <button className={styles.btn} onClick={handleClickPreview}>preview</button>
        {(status === 'development' || status === 'queue') && (
          <button className={styles.btn} onClick={handleClickNext}>
            {'=>'}
          </button>
        )}
      </div>
    </div>
  )
}
