import styles from './Header.module.css'

interface HeaderProps{
  countTasks: number;
  countDoneTasks: number;
}

export function Header({countTasks, countDoneTasks}:HeaderProps) {

    return(
        <header className={styles.sectionTasksHeader}>
            <div className={styles.createdTasks}>
              <h4>Tarefas criadas</h4>
              <span>{countTasks}</span>
            </div>
            <div className={styles.doneTasks}>
            <h4>Concluídas</h4>
            {countDoneTasks > 0 ?
            <span>{countDoneTasks} de {countTasks}</span>:
            <span>{countDoneTasks}</span>}
              
            </div>
          </header>
    )
}