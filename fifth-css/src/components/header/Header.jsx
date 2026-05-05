import React from 'react'
import styles from "./Header.module.css"
// import one from"../Button/Button.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
        <h3>sanskar</h3>
        <button className={styles.btn} >this is btn</button>
    </div>
  )
}

export default Header
