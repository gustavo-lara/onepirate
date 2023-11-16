import React from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar'



const Nav = () => {
  return (
    <div className={styles.Nav}>
      <ButtonAppBar />
    </div>
  )
}

export default Nav