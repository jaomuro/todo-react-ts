import rocketLogo from './assets/rocket.svg'
import './global.css';
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.wrapper}>

      <header className={styles.headerPage}>
        <img src={rocketLogo} alt='Logotipo foguete'></img>
        <h1>to<span className={styles.do}>do</span></h1>
      </header>

      <form className={styles.inputTask} action="submit">
        <input type="text" />
        <button className={styles.buttonAddTask} type='submit'>Nova Tarefa <img src={rocketLogo}></img></button>
      </form>

      <section className={styles.sectionTasks}>
        <header className={styles.sectionTasksHeader}>
          <div>
          <h1>Cabeçalho do header das tarefas aqui</h1>
            <img src={rocketLogo}></img>
          </div>

          <div>
          <h1>Cabeçalho do header das tarefas aqui</h1>
            <img src={rocketLogo}></img>
          </div>
        </header>
        <aside className={styles.sectionTasksList}>
          <div className={styles.task}>
            <img src={rocketLogo} alt='Tarefa realizada?'/>
            <p className={styles.taskContent}>Tarefa 01</p>
            <button className={styles.deleteTask}>deletar</button>
          </div>
          <div className={styles.task}>
            <img src={rocketLogo} alt='Tarefa realizada?'/>
            <p className={styles.taskContent}>Tarefa 02</p>
            <button className={styles.deleteTask}>deletar</button> 
          </div>
          <div className={styles.task}>
            <img src={rocketLogo} alt='Tarefa realizada?'/>
            <p className={styles.taskContent}>Tarefa 03</p>
            <button className={styles.deleteTask}>deletar</button> 
          </div>
        </aside>
      </section>
      
    </div>
  )
}

export default App
