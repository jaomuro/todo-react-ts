import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task() {


    return (
        <div className={styles.task}>

            <label htmlFor="checkbox" >
              <input readOnly type="checkbox" checked={false} />
              <span className={styles.uncheckedBox}></span>
              <span className={styles.checkedBox}><Check size={12} /></span>
              <p className={styles.taskContent}>Tarefa 01</p>
              <p className={styles.taskContentMarked}>Tarefa 01</p>
            </label>
              <button className={styles.deleteTask}>
                <Trash size={16}/>
              </button>
        </div>
    )
}