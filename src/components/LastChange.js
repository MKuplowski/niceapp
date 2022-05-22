import React from 'react'
import styles from '../styles/Header.module.sass'
function LastChange ({children}){
  return (
     <div className={styles.lastchange}>
            {children}
        </div>
  )
}

export default LastChange

