import { PlusCircle } from '@phosphor-icons/react'

import styles from './InputAndButton.module.css'
import { TaskType } from './Tasks/Task'
import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

interface InputProps {
    onCreateTask: (task:TaskType)  => void
}

export function ImputAndButton({onCreateTask}: InputProps) {
    const [inputTask, setInputTask] = useState('');

    function handleChangeInputs(evt){
        setInputTask(evt.target.value)
    }

    function handleCreateTask(evt){
        evt.preventDefault()
        console.log(inputTask)
        const newTask: TaskType = {
            id: uuidv4(),
            content: inputTask,
            isDone: true
        }
        console.log(newTask)
        onCreateTask(newTask)
        setInputTask('')
    }

    return (
        <form className={styles.inputTask} action="submit" onSubmit={handleCreateTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' onChange={handleChangeInputs} value={inputTask}/>
            <button className={styles.buttonAddTask} type='submit'>Criar
                <PlusCircle size={16} weight='bold'/>
            </button>
        </form>
    )
}   