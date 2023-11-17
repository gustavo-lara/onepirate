import React, {useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"
import styles from "./login.module.css"
 
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
 
    const handleSubmit = (event) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
 
        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
 
        if (email && password) {
            console.log(email, password)
        }
    }
     
    return ( 
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={styles.form}>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    type="email"
                    sx={{mb: 3,
                    width: "400px", height:"50px", marginTop: "1em"}}
                    fullWidth
                    value={email}
                    error={emailError}
                    
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3,
                        width: "400px"
                        ,height:"50px", marginTop: "1em"


                    }}
                 />
                 <Button variant="outlined" type="submit" sx={{mb: 3,
                        width: "400px", background: "#33C2FF", color: "#FFF", height:"50px", marginTop: "2em"}} >Login</Button>
             </div>
        </form>
        <small><Link to="/forget">Forgot password?</Link></small>
        </React.Fragment>
     );
}
 
export default Login;