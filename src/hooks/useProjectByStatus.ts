import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GlobalStoreStateType } from '../store'
import { TaskType } from '../types/task.Types'

export const useProjectByStatus = () => {
  const projectName = useParams().projectName

  const tasks = useSelector((state: GlobalStoreStateType) => state.tasks)
  console.log('tasks', tasks)

  const projectTaskList = projectName ? tasks.filter((el) => el.project === projectName) : ([] as TaskType[])
  console.log(projectTaskList)

  return {
    queueList: projectTaskList.filter((el) => el.status === 'queue'),
    developmentList: projectTaskList.filter((el) => el.status === 'development'),
    doneList: projectTaskList.filter((el) => el.status === 'done'),
  }
}
