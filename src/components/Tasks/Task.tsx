import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export interface TaskType {
  id: string;
  content: string;
  isDone: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: string) => void
}

export function Task({task, onDeleteTask} : TaskProps) {

  function handleDeleteTask(){
    const confirmDelete = window.confirm('Tem certeza que deseja deletar esta tarefa?')
    if(confirmDelete) onDeleteTask(task.id)
  }

  return (
      <div className={styles.task}>

          <label htmlFor="checkbox" >
            <input readOnly type="checkbox" checked={false} />
            {task.isDone ? 
            <span className={styles.checkedBox}><Check size={12} /></span>
            : <span className={styles.uncheckedBox}></span>
            }
            {task.isDone ?
            <p className={styles.taskContentMarked}>{task.content}</p>
            :
            <p>{task.content}</p>
            }
            
            
          </label>
            <button className={styles.deleteTask} onClick={handleDeleteTask} title="Deletar tarefa">
              <Trash size={16}/>
            </button>
      </div>
  )
}