import * as React from 'react';
import styles from './Footer.module.css';
import Box from '@mui/system/Box';
import BoxLink from './BoxLink.jsx';
import BasicSelect from './Select.jsx';

import img1 from '../../assets/imgFacebook.png'
import img2 from '../../assets/imgTwitter.png'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 'fit-content',
        height: 'fit-content',
      }}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '64px',
          width: 'fit-content',
        }}>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%'
          }}>
            <BoxLink img={img1} />
            <BoxLink img={img2} />
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontFamily: "Work Sans",
            fontSize: '16px',
            textDecoration: 'none',
            marginTop: '10px',
          }}>
            © {'   '}
            <a href="">
              <Box sx={{
                fontSize: '16px',
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
            fontSize: '18px',
            fontWeight: '600',
            fontFamily: "Roboto Condensed",
          }}> Legal </Box>
          <Box sx={{
            marginTop: '16px',
          }}>
            <a href="">
              <Box sx={{ typography: 'body1', paddingTop: '10px'}}>
                Terms
              </Box>
            </a>
            <a href="">
              <Box sx={{ typography: 'body1', paddingTop: '10px' }}>
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
            fontSize: '18px',
            fontWeight: '600',
            fontFamily: "Roboto Condensed",
          }}> Language </Box>
          <Box>
            <BasicSelect />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Footer