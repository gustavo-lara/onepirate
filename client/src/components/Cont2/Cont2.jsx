import React from 'react'
import styles from './Cont2.module.css'
import BoxCont2 from './BoxCont2'
import icon1 from './../../assets/icon1.png'
import icon2 from './../../assets/icon2.png'
import icon3 from './../../assets/icon3.png'


const Cont2 = () => {
    return (
        <div className={styles.Cont}>
            <div className={styles.Cont2}>
                <BoxCont2 h2={'The best luxury hotels'} p={"From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."} icon= {icon1} />
                <BoxCont2 h2={'New experiences'} p={'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.'} icon={icon2} />
                <BoxCont2 h2={'Exclusive rates'} p={'By registering, you will access specially negotiated rates that you will not find anywhere else.'} icon={icon3} />
            </div>
        </div>
    )
}

export default Cont2