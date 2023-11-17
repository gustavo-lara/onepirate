import React from 'react'
import styles from "./forms.module.css"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logins from "../../components/logins/logins.jsx"
import { Link } from "react-router-dom"

const Forms = () => {
  return (
    <div className={styles.container}>
<h1>Sign Up</h1>
                    <h4><Link  to="/singin"> Already have an account?</Link></h4>
                 
                    <Logins />



    </div>
  )
}

export default Forms