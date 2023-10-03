import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddProjectForm } from '../../components/forms/addProjectForm'
import { Popup } from '../../components/popup'
import { GlobalStoreStateType } from '../../store'
import { toglePopUpCreateProjectAction } from '../../store/createProjectPopUpReducer/createProjectPopUpReducer'
import { ProjectType } from '../../types/project.Types'
import styles from './styles.module.scss'

export const HomePage = () => {
  const dispatch = useDispatch()
  const showPopUpCreateProject = useSelector((state: GlobalStoreStateType) => state.popUpcreateProject)
  const projectList = useSelector((state: GlobalStoreStateType) => state.projects)

  const handleShowPopup = () => {
    dispatch(toglePopUpCreateProjectAction())
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>

      <button className={styles.primaryBtn} onClick={handleShowPopup}>
        Create new Project
      </button>
      <div className={styles.wrapper}>
        {projectList.map((el: ProjectType) => {
          return (
            <Link key={el.id} to={`/project/${el.route}`} className={styles.projectCart}>
              {el.name}
            </Link>
          )
        })}
      </div>

      {showPopUpCreateProject && (
        <Popup>
          <AddProjectForm />
        </Popup>
      )}
    </div>
  )
}
