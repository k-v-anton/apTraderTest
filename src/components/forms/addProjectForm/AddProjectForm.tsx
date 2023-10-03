import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStoreStateType } from '../../../store'
import { toglePopUpCreateProjectAction } from '../../../store/createProjectPopUpReducer/createProjectPopUpReducer'
import { addProjectAction } from '../../../store/projectsReducer/projectReducer'
import { ProjectType } from '../../../types/project.Types'
import styles from './styles.module.scss'

export const AddProjectForm = () => {
  const dispatch = useDispatch()
  const projectList = useSelector((state: GlobalStoreStateType) => state.projects)
  const formCreateNewProject = useForm()
  const { register, handleSubmit } = formCreateNewProject

  const hamdleSubmitNewProject = (data: { [key: string]: string | number }) => {
    console.log(data)

    const newProject = {
      id: projectList.length + 1,
      name: data.name,
      route: data.name.toString().toLowerCase().split(' ').join('_'),
    } as ProjectType
    dispatch(addProjectAction(newProject))
    dispatch(toglePopUpCreateProjectAction())
  }
  const handleShowPopup = () => {
    dispatch(toglePopUpCreateProjectAction())
  }

  return (
    <form name={'createNewProject'} onSubmit={handleSubmit(hamdleSubmitNewProject)} className={styles.form}>
      <div className={styles.controllers}>
     <div className={styles.controller}>
          <label className={styles.label}>
            Enter project name 
          </label>
          <input autoComplete='off' type='text' {...register('name')} className={styles.input} />
     </div>
      </div>
      <div className={styles.btnBlock}>
        <input type='button' value={'close'} onClick={handleShowPopup} className={styles.inputBtn} />
        <input type='submit' value={'create'} className={styles.inputBtn} />
      </div>
    </form>
  )
}
