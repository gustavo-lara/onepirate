import * as React from 'react';
import styles from './Footer.module.css';
import { useNavigate } from 'react-router-dom';


import Box from '@mui/system/Box';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import BoxLink from './BoxLink.jsx';
import BasicSelect from './Select.jsx';


const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Footer}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '100px',
      }}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            margin: '64px',
            width: 'fit-content',
          }}>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%'
            }}>
              <BoxLink img={FacebookIcon} />
              <BoxLink img={TwitterIcon} />
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              fontFamily: "Work Sans",
              fontSize: '18px',
              marginTop: '10px',
            }}>
              © {'   '}
              <a href="">
                <Box sx={{
                  fontSize: '18px',
                  textDecoration: 'none',
                  fontFamily: "Work Sans",
                  color: "#000"
                }}>My Website</Box>
              </a>
              2023
            </Box>

          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '64px',
          }}>
            <Box sx={{
              textTransform: 'uppercase',
              fontSize: '20px',
              fontWeight: '600',
              fontFamily: "Roboto Condensed",
            }}> Legal </Box>
            <Box sx={{
              marginTop: '18px',
            }}>
              <a href="">
                <Box sx={{ typography: 'body1', paddingTop: '10px', color: "#000" }} onClick={() => navigate("/terms")} >
                  Terms
                </Box>
              </a>
              <a href="">
                <Box sx={{ typography: 'body1', paddingTop: '10px', color: "#000" }} onClick={() => navigate("/priva")} >
                  Privacy
                </Box>
              </a>
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '64px',
          }}>
            <Box sx={{
              textTransform: 'uppercase',
              fontSize: '20px',
              fontWeight: '600',
              fontFamily: "Roboto Condensed",
            }}> Language </Box>
            <Box>
              <BasicSelect />
            </Box>
          </Box>
        </Box>

        <Box sx={{
          marginLeft: '64px'
        }}>
          <Box sx={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '64px',
          }}>
            Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Footer