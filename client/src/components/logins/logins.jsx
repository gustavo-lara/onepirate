import React, {useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"
import styles from "./logins.module.css"
 
const Logins = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [names, setNames] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [namesError, setNamesError] = useState(false)
 
    const handleSubmit = (event) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
        setNameError(false)
 
        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
        if (name == ""){
            setNameError(true)
        }
        if (names == " "){
            setNameError(true)
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
                    label="First Name"
                    onChange={e => setNames(e.target.value)}
                    required
                    variant="outlined"
                    type="name"
                    sx={{mb: 3,
                        width: "195px", height:"50px", marginTop: "1em"}}
                        fullWidth
                        value={names}
                        error={namesError}
                        
                        />
                           <TextField 
                    label="Last Name"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    type="name"
                    sx={{mb: 3,
                        width: "195px", height:"50px", marginTop: "1em", marginLeft: "10px",}}
                        fullWidth
                        value={name}
                        error={nameError}
                        
                        />
                        </div>

                        <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    type="email"
                    sx={{mb: 3,
                        width: "400", height:"50px", marginTop: "1em",}}
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
                        width: "400px", background: "#33C2FF", color: "#FFF", height:"50px", marginTop: "1em"}} >Login</Button>
             </div>
        </form>
      
        </React.Fragment>
     );
}
 
export default Logins;