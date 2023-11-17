import React from 'react'
import styles from "./forget.module.css"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logun from "../../components/logun/logun.jsx"
import { Link } from "react-router-dom"

const Forget = () => {
  return (
    <div className={styles.container}>
<h1>Forgot your password?</h1>
                    <h4>Enter your email address below and we'll send you a link to reset your password.</h4>
                 
                    <Logun />



    </div>
  )
}

export default Forget