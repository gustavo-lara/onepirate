import React from 'react'
import Cont1 from '../../components/Cont1/Cont1'
import Cont2 from '../../components/Cont2/Cont2'
import Cont3 from '../../components/Cont3/Cont3'
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.Home}>
      <Cont1/>
      <Cont2/>
      <Cont3/>
    </div>
  )
}

export default Home