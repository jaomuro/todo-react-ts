import { Check, CheckCircle, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { useState } from 'react'

export function Task() {
    const [isChecked, setisChecked] = useState(false)

    function handleCheckTask(event) {
    }

    return (
        <div className={styles.task}>

            <label htmlFor="checkbox" onClick={handleCheckTask}>
              <input readOnly type="checkbox" checked={isChecked} />
              {/* <CheckCircle size={16}/> */}
              <span className={styles.uncheckedBox}><CheckCircle size={22} weight='fill'/></span>

              <p className={styles.taskContent}>Tarefa 01</p>
            </label>
              <button className={styles.deleteTask}>
                <Trash size={16}/>
              </button>
        </div>
    )
}