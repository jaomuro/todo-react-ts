import clipboard from '../../assets/clipboard.png'
import styles from './EmptyTaskList.module.css'

export function EmptyTaskList() {

    return (
        <div className={styles.container}>
            <img src={clipboard} alt="" />
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}