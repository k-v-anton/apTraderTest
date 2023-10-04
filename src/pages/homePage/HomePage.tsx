import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProjectForm } from '../../components/forms/addProjectForm'
import { Popup } from '../../components/popup'
import { ProjectCart } from '../../components/projectCart'
import { GlobalStoreStateType } from '../../store'
import {
  closePopUpCreateProjectAction,
  toglePopUpCreateProjectAction,
} from '../../store/createProjectPopUpReducer/createProjectPopUpReducer'
import { ProjectType } from '../../types/project.Types'
import styles from './styles.module.scss'

export const HomePage = () => {
  const dispatch = useDispatch()
  const showPopUpCreateProject = useSelector((state: GlobalStoreStateType) => state.popUpcreateProject)
  const projectList = useSelector((state: GlobalStoreStateType) => state.projects)

  const handleShowPopup = () => {
    dispatch(toglePopUpCreateProjectAction())
  }

  const handleUnload = () => {
    dispatch(closePopUpCreateProjectAction())
  }
  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload)
    return () => {
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>

      <button className={styles.primaryBtn} onClick={handleShowPopup}>
        Create new Project
      </button>
      <h2 className={styles.titleBoard}>in work:</h2>

      <div className={styles.board}>
        <div className={styles.wrapper}>
          {projectList
            .filter((el) => el.status === 'in_work')
            .map((el: ProjectType) => {
              return <ProjectCart key={el.id} {...el} />
            })}
        </div>
      </div>

      <h2 className={styles.titleBoard}>complite:</h2>
      <div className={styles.board}>
        <div className={styles.compliteProjectWrapper}>
          <div className={styles.wrapper}>
            {projectList
              .filter((el) => el.status === 'complite')
              .map((el: ProjectType) => {
                return <ProjectCart key={el.id} {...el} />
              })}
          </div>
        </div>
      </div>

      <Popup show={showPopUpCreateProject}>
        <AddProjectForm />
      </Popup>
    </div>
  )
}
