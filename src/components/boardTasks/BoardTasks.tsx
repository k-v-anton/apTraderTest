import styles from './styles.module.scss'

type PropsType = {
  children: JSX.Element | string | JSX.Element[]
  title: string
}

export const BoardTasks = (props: PropsType) => {
  const { children, title } = props
  return (
    <div className={styles.board}>
      <h2 className={styles.titleBoard}>{title}</h2>
      <div className={styles.tasks}>{children}</div>
    </div>
  )
}
