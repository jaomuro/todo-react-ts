
import './global.css';
import styles from './App.module.css'
import { Header } from './components/Header';
import { Header as HeaderList} from './components/Tasks/Header'
import {ImputAndButton} from './components/ImputAndButton'
import { EmptyTaskList } from './components/Tasks/EmptyTaskList';


function App() {
  return (
    <main>
        <Header />
        <div className={styles.wrapper}>
        

        <ImputAndButton />

        <section className={styles.sectionTasks}>
          <HeaderList />
          <aside className={styles.sectionTasksList}>
          <EmptyTaskList />
          </aside>
        </section>
        
      </div>
    </main>
  )
}

export default App
