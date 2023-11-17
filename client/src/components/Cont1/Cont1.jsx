import React from 'react'
import styles from './Cont1.module.css'
import BasicButtons from '../btn'
import bg from "./../../assets/bgimg.png"

const Cont1 = () => {
    return (
        <div className={styles.Cont}>
            <div className={styles.Cont1}>
                <div className={styles.p}>
                    <p>Upgrade your Sundays</p>
                </div>
                <h4>Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</h4>
                <BasicButtons />
                <h5>Discover the experience</h5>
            </div>
        </div>
    )
}

export default Cont1