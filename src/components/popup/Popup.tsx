import styles from './styles.module.scss'


type PropsType = {
  children: JSX.Element | string
}

export const Popup = (props: PropsType) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <div className={styles.popup}>{children}</div>
    </div>
  )
}
