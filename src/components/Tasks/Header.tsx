import styles from './Header.module.css'

export function Header() {

    return(
        <header className={styles.sectionTasksHeader}>
            <div className={styles.createdTasks}>
              <h4>Tarefas criadas</h4>
              <span>0</span>
            </div>

            <div className={styles.doneTasks}>
            <h4>Concluídas</h4>
              <span>0</span>
            </div>
          </header>
    )
}