import { PlusCircle } from '@phosphor-icons/react'

import styles from './InputAndButton.module.css'

export function ImputAndButton() {

    return (
        <form className={styles.inputTask} action="submit">
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={styles.buttonAddTask} type='submit'>Criar
                <PlusCircle size={16} weight='bold'/>
            </button>
        </form>
    )
}