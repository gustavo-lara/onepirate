
import Offers from './Offers.jsx';
import styles from "./Cont4.module.css"
import icon4 from "../../assets/icone4.svg"
import icon6 from '../../assets/icone6.svg'
import icon5 from '../../assets/icone5.svg'
import { Button } from '@mui/material';

const Cont4 = () => {
        return (
        
        <div className={styles.titulo}>
            <h1>HOW IT WORKS</h1>
            <div className={styles.cont4}>

                <Offers p={"Appointment every Wednesday 9am."} icon={icon4} />

                <Offers p={'First come, first served. Our offers are in limited quantities, so be quick.'} icon={icon5} />

                <Offers p={'New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.'} icon={icon6} />
            </div>
            <div className={styles.button}>

                <Button onClick={() => navigate("/singup")} variant="outlined" type="submit" sx={{
                    mb: 3,
                    width: "200px", background: "#33C2FF", color: "#FFF", height: "50px", marginTop: "2em"
                }} >GET STARTED</Button>
            </div>
        </div>
    )
}

export default Cont4