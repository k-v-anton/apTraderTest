import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { BoardTasks } from '../../components/boardTasks'
import { AddTaskForm } from '../../components/forms/addTaskForm'
import { Popup } from '../../components/popup'
import { Task } from '../../components/task'
import { useProjectByStatus } from '../../hooks/useProjectByStatus'
import { GlobalStoreStateType } from '../../store'
import { closePopUpAddTaskAction, toglePopUpAddTaskAction } from '../../store/addTaskPopupReducer/AddTaskPopupReducer'
import styles from './styles.module.scss'
import { PreviewPopup } from '../../components/previewPopup'
import { closePopupPreviewAction } from '../../store/previewPopupReducer/previewPopupReducer'

export const ProjectPage = () => {
  const projectName = useParams().projectName?.split('_').join(' ')
  const dispatch = useDispatch()
  const showPopup = useSelector((state: GlobalStoreStateType) => state.popupAddTask)
  const previewTask = useSelector((state: GlobalStoreStateType) => state.previewTask)

  const list = useProjectByStatus()
  console.log(list)

  const { queueList, developmentList, doneList } = list

  const handleClickNewTask = () => {
    dispatch(toglePopUpAddTaskAction())
  }

  const handleUnload = () => {
    dispatch(closePopUpAddTaskAction())
    dispatch(closePopupPreviewAction())
  }
  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Popup show={showPopup}>
        <AddTaskForm />
      </Popup>
      <PreviewPopup task={previewTask}></PreviewPopup>
      <h1 className={styles.title}>{projectName}</h1>
      <Link to={'/'} className={styles.home}>
        home
      </Link>
      <button className={styles.home} onClick={handleClickNewTask}>
        create new task
      </button>
      <div className={styles.wrapper}>
        <BoardTasks title={'queue'}>
          {queueList.map((el) => (
            <Task key={el.id} {...el} />
          ))}
        </BoardTasks>
        <BoardTasks title='development'>
          {developmentList.map((el) => (
            <Task key={el.id} {...el} />
          ))}
        </BoardTasks>
        <BoardTasks title='done'>
          {doneList
            .filter((el) => el.status === 'done')
            .map((el) => (
              <Task key={el.id} {...el} />
            ))}
        </BoardTasks>
      </div>
    </div>
  )
}
