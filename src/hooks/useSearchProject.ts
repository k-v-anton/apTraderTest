import { useSelector } from 'react-redux'
import { GlobalStoreStateType } from '../store'
import { ProjectType } from '../types/project.Types'
import { useParams } from 'react-router-dom'

export const useSearchProject = () => {
  const projectName = useParams().projectName
  const projects = useSelector((state: GlobalStoreStateType) => state.projects)

  if (projectName) {
    const project = projectName ? projects.filter((el) => el.name === projectName)[0] : {} as ProjectType
    return project
  } else return {} as ProjectType
}
