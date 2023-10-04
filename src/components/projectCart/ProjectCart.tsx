import {useState, ChangeEventHandler} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GlobalStoreStateType } from '../../store'
import {
  compliteProjectAction,
  deleteProjectAction,
  inWorkProjectAction,
} from '../../store/projectsReducer/projectReducer'
import { ProjectType } from '../../types/project.Types'
import styles from './styles.module.scss'

type PropsType = {
  name: string
  route: string
  id: number
  status: string
}

export const ProjectCart = (props: PropsType) => {
  const { id, name, route, status } = props

  const [newName, setNewName] = useState<string>('')

  const dispatch = useDispatch()
  const project = useSelector((state: GlobalStoreStateType) => state.projects.filter((el) => el.id === id))[0]

  const handleClickDelete = (project: ProjectType) => {
    dispatch(deleteProjectAction(project))
  }

  const handleClickComplite = (project: ProjectType) => {
    const pr = { ...project }
    pr.status = 'complite'
    dispatch(compliteProjectAction(pr))
  }

  const handleClickToWork = (project: ProjectType) => {
    const pr = { ...project }
    pr.status = 'in_work'
    dispatch(inWorkProjectAction(pr))
  }

  const border = () => {
    if (project.status === 'in_work') return styles.borderInWork
    else if (project.status === 'complite') return styles.borderComplite
  }


  return (
    <div className={`${styles.projectCart} ${border()}`}>
      <h2 className={styles.projectName}>{name}</h2>
      <Link key={id} to={`/project/${route}`} className={`${styles.primaryBtn} ${styles.tasks}`}>
        tasks
      </Link>
      <button className={`${styles.primaryBtn} ${styles.delete}`} onClick={() => handleClickDelete(project)}>
        delete
      </button>
      {status === 'in_work' && (
        <button className={`${styles.primaryBtn} ${styles.complite}`} onClick={() => handleClickComplite(project)}>
          complite
        </button>
      )}
      {status === 'complite' && (
        <button className={`${styles.primaryBtn} ${styles.complite}`} onClick={() => handleClickToWork(project)}>
          for version
        </button>
      )}
    </div>
  )
}
