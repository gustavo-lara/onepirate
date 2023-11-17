import React from 'react'
import styles from "./form.module.css"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Login from "../../components/login/login.jsx"
import { Link } from "react-router-dom"

const Form = () => {
  return (
    <div className={styles.container}>
<h1>Sign IN</h1>
                    <h4>not a member yet?<Link  to="/singup"> Sign Up here</Link></h4>
                 
                    <Login />



    </div>
  )
}

export default Form