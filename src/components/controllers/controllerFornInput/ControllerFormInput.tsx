import { FieldValues, UseFormRegister } from 'react-hook-form'
import styles from './styles.module.scss'

type PropsType = {
  label: string
  type: string
  name: string
  register: UseFormRegister<FieldValues>
}

export const ControllerFormInput = (props: PropsType) => {
  const {label, type, name, register } = props

  return (
    <div className={styles.controller}>
      <label className={styles.label}>{label}</label>
      <input autoComplete='off' type={type} {...register(name)} className={styles.input} />
    </div>
  )
}
