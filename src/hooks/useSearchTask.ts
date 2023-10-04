import { useSelector } from 'react-redux'
import { GlobalStoreStateType } from '../store'
import { TaskType } from '../types/task.Types'

export const useSearchTask = (projectName: string | undefined, taskId: string) => {
  const tasks = useSelector((state: GlobalStoreStateType) => state.tasks)

  if (projectName) {
   
    const task = tasks.filter((el) => el.id === taskId)

    return task[0]
  } else return {} as TaskType
}
