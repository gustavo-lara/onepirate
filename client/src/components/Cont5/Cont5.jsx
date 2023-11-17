import styles from './Cont5.module.css';
import Box from '@mui/system/Box';
import icon4 from './../../assets/icon4.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Cont5 = () => {
    return (
        <div className={styles.Cont5}>
            <div className={styles.parte1}>
                <div>

                    <Box sx={{
                        background: '#FFC7E2',
                        width: '570px',
                        height: '410px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '370px',
                        }}>
                            <Box sx={{ fontSize: '50px', textTransform: "uppercase", fontFamily: "Roboto Condensed", fontWeight: '600' }}> Receive Offers </Box>
                            <Box sx={{ fontSize: '20px', textDecoration: 'none', fontFamily: "Work Sans", color: "#000", marginTop: '10px' }}> Taste the holidays of the everyday close to home.</Box>
                            <TextField id="outlined-basic" label="Your email" variant="outlined" sx={{ marginTop: '20px' }} />
                            <Button variant="outlined" type="submit" sx={{
                                mb: 3,
                                width: "100%",
                                background: "#28282a",
                                color: "#F5f5ff",
                                height:"50px",
                                marginTop: "1em"
                            }}>Keep me updated</Button>
                        </Box>
                    </Box>

                    <Box>

                    </Box>

                    <Box>

                    </Box>

                </div>

            </div>


            <div className={styles.parte2}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '4px solid #28282A',
                    padding: '20px 30px 15px 40px',
                }}>
                    <p>Got any questions? Need help?</p>
                </Box>
                <h3>We are here to help. Get in touch!</h3>
                <img src={icon4} alt="" />
            </div>
        </div >
    )
}

export default Cont5