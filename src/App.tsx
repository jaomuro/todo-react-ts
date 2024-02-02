import rocketLogo from './assets/rocket.svg'
import './global.css';
import styles from './App.module.css'
import { Header } from './components/Header';
import { Header as HeaderList} from './components/Tasks/Header'
import {ImputAndButton} from './components/ImputAndButton'
import { TaskList } from './components/Tasks/Task';


function App() {
  return (
    <main>
        <Header />
        <div className={styles.wrapper}>
        

        <ImputAndButton />

        <section className={styles.sectionTasks}>
          <HeaderList />
          <aside className={styles.sectionTasksList}>
          <TaskList />
          </aside>
        </section>
        
      </div>
    </main>
  )
}

export default App
