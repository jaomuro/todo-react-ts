import { CheckCircle } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { useState } from 'react'

export function TaskList() {
    const [isChecked, setisChecked] = useState(false)

    function handleCheckTask(event) {
    }

    return (
        <div className={styles.task}>
            <label htmlFor="checkbox" onClick={handleCheckTask}>
              <input readOnly type="checkbox" checked={isChecked} />
              <CheckCircle size={20}/>
              <p className={styles.taskContent}>Tarefa 01</p>
              </label>
              <button className={styles.deleteTask}>deletar</button>
              
        </div>
    )
}