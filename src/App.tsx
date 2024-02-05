
import './global.css';
import styles from './App.module.css'
import { Header } from './components/Header';
import { Header as HeaderList} from './components/Tasks/Header'
import {ImputAndButton} from './components/ImputAndButton'
import { EmptyTaskList } from './components/Tasks/EmptyTaskList';
import { Task, TaskType } from './components/Tasks/Task';

import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const doneTasks = tasks.reduce((acc, task)=> {
    if(task.isDone) return acc+1;
    return acc;
  },0)

  function addTask(newTask: TaskType){
    setTasks([...tasks, newTask]);

  }


  function deleteTask(id: string) {
    const tasksWithoutDeletdOne = tasks.filter( task => {
      return task.id !== id;
    });
    setTasks(tasksWithoutDeletdOne)
  }



  return (
    <main>
        <Header />
        <div className={styles.wrapper}>
        

        <ImputAndButton onCreateTask={addTask}/>

        <section className={styles.sectionTasks}>
          <HeaderList countTasks={tasks.length} countDoneTasks={doneTasks}/>
          <aside className={styles.sectionTasksList}>
          {tasks.length === 0 ? 
           <EmptyTaskList /> 
           :
           tasks.map((t) => {
            return <Task key={t.id} task={t} onDeleteTask={deleteTask}/>
            })
          }

          {
          }
          </aside>
        </section>
        
      </div>
    </main>
  )
}

export default App
