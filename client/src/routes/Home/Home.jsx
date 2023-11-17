import React from 'react'

import Cont1 from '../../components/Cont1/Cont1'
import Cont2 from '../../components/Cont2/Cont2'
import Cont3 from '../../components/Cont3/Cont3'
import Cont4 from '../../components/Cont4/Cont4'
import Cont5 from '../../components/Cont5/Cont5'

import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.Home}>
      <Cont1/>
      <Cont2/>
      <Cont3/>
      <Cont4/>
      <Cont5/>
    </div>
  )
}

export default Home