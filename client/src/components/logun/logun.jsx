import React, {useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import styles from "./logun.module.css"
 
const Logins = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)

 
 
    const handleSubmit = (event) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
 
        if (email == '') {
            setEmailError(true)
        }

 
        if (email && password) {
            console.log(email, password)
        }
    }
     
    return ( 
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={styles.form}>
                <div classname={styles.primeiro}>

                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    type="name"
                    sx={{mb: 3,
                        width: "400px", height:"50px", marginTop: "1em"}}
                        fullWidth
                        value={email}
                        error={emailError}
                        
                        />
                        </div>

                 <Button variant="outlined" type="submit" sx={{mb: 3,
                        width: "400px", background: "#33C2FF", color: "#FFF", height:"50px", marginTop: "1em"}} onClick={() => navigate("/")} >Login</Button>
             </div>
        </form>
      
        </React.Fragment>
     );
}
 
export default Logins;