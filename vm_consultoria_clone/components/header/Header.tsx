import React from 'react'
import styles from './header.module.scss'

function Header() {
  return (
    <>

    {/* create the navbar with the text aligned and and the logo */}
        <div className={styles.header}>
          <ul className={styles.unlisted}>
            <li>inicio</li>
            <li>empreedismentos</li>
            <li>sobre</li>
            <li>servicos</li>
            <li>Fala conosco</li>
          </ul>
        </div>
        
        
    </>
  )
}


export default Header
