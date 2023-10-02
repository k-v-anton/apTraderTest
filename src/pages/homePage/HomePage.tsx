import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

type ProjectType = {
  id: string | number
  name: string
  route: string
}

export const HomePage = () => {
  const projectList: ProjectType[] = [
    {
      id: 1,
      name: 'Project one',
      route: 'project_one',
    },
    {
      id: 2,
      name: 'Project two',
      route: 'project_two',
    },
    {
      id: 3,
      name: 'Project three',
      route: 'project_three',
    },
    {
      id: 4,
      name: 'Project fore',
      route: 'project_fore',
    },
    {
      id: 5,
      name: 'Project five',
      route: 'project_five',
    },
  ]
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.wrapper}>
        {projectList.map((el: ProjectType) => {
          return (
            <Link to={`/project/${el.route}`} className={styles.projectCart}>
              {el.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
