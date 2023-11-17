import * as React from 'react';
import Box from '@mui/system/Box';
import styles from "./Offers.module.css"

const Offers = ({ h2, p, icon }) => {
    return (

        <React.Fragment>
          
            <Box sx={{
                display: 'flex',
                height: '323.83px',
                padding: '0px 40px',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '39.1px',
            }}>
                <img src={icon} alt="" />
                <h2 className={styles.h2}>{h2}</h2>
                <p className={styles.p}>{p}</p>
            </Box>
        </React.Fragment >
    )
}

export default Offers