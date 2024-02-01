import rocketLogo from './assets/rocket.svg'
import './global.css';
import styles from './App.module.css'
function App() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={rocketLogo} alt='Logotipo foguete'></img>
        <h1>to<span>do</span></h1>
      </header>
      <form action="">
        <input type="text" />
        <button type='submit'>Nova Tarefa <img src={rocketLogo}></img></button>
      </form>
      <main>

      </main>
      
    </div>
  )
}

export default App
