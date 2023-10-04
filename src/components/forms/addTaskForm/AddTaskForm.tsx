import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStoreStateType } from '../../../store'
import { ControllerFormInput } from '../../controllers/controllerFornInput'
import styles from './styles.module.scss'
// import { addTaskInProjectaction } from '../../../store/projectsReducer/projectReducer'
import { useParams } from 'react-router-dom'
import { toglePopUpAddTaskAction } from '../../../store/addTaskPopupReducer/AddTaskPopupReducer'
import { addTaskAction } from '../../../store/tasksReducer/tasksReducer'
import { TaskType } from '../../../types/task.Types'

export const AddTaskForm = () => {
  const form = useForm()
  const projectName = useParams().projectName
  const { register, handleSubmit } = form
  const dispatch = useDispatch()

  const tasks = useSelector((state: GlobalStoreStateType) => state.tasks)

  const dateCreate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    return `${year}-${month}-${day}`
  }

  const submitFormCreateNewProject = (data: any) => {
    const task = {
      ...data,
      id: tasks.length + 1,
      create: dateCreate(),
      status: 'queue',
      project: projectName,
    } as TaskType

    dispatch(addTaskAction(task))
    dispatch(toglePopUpAddTaskAction())
  }

  const handleShowPopup = () => {
    dispatch(toglePopUpAddTaskAction())
  }
  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <form onSubmit={handleSubmit(submitFormCreateNewProject)} className={styles.container}>
      <div className={styles.taskName}>
        {' '}
        <ControllerFormInput label={'Task name'} type='text' name='title' register={register} />
      </div>
      <div className={styles.dateEndProject}>
        <ControllerFormInput label={'Date end'} name='complite' type='date' register={register} />
      </div>

      <div className={styles.wrapperTextArea}>
        {' '}
        <textarea {...register('description')} className={styles.descriptionTask} />
      </div>
      <div className={styles.wrapperSelect}>
        <select {...register('priority')} className={styles.select}>
          <option value='low'>low</option>
          <option value='medium'>medium</option>
          <option value='high'>high</option>
        </select>
      </div>

      <div className={styles.btnBlock}>
        <input type='button' value={'cancel'} onClick={handleShowPopup} className={styles.inputBtn} />
        <input type='submit' value={'add task'} className={styles.inputBtn} />
      </div>
    </form>
  )
}
