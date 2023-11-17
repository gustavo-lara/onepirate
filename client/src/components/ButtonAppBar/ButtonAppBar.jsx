import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styles from "./ButtonAppBar.module.css"


export default function ButtonAppBar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ background: "#28282A", alignItems: 'center', position: 'relative' }}>
                <Toolbar>
                    <Typography align="center" variant="h6" component="div" sx={{  cursor: 'pointer',  }} onClick={() => navigate("/")}
                    >
                        ONEPIRATE
                    </Typography>
                    <div className={styles.links}>
                    <Button onClick={() => navigate("/singin")}
                        sx={{
                            fontFamily: "Roboto Condensed",
                            color: "#FFF",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "25.6px",
                            textTransform: "uppercase",
                        }}

                    >SIGN IN</Button>

                    <Button onClick={() => navigate("/singup")}
                        sx={{
                            fontFamily: "Roboto Condensed",
                            color: "#33C2FF",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "25.6px",
                            textTransform: "uppercase",
                        }}
                    >SIGN UP</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box >
    );
}