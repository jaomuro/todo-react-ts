import rocketLogo from '../assets/rocket.svg'

import styles from './Header.module.css'

export function Header() {

    return (
        <header className={styles.headerPage}>
        <img src={rocketLogo} alt='Logotipo foguete'></img>
        <h1>to<span className={styles.do}>do</span></h1>
      </header>
    )
}