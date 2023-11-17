import * as React from 'react';
import Box from '@mui/system/Box';

const BoxLink = ({img}) => {
  return (
    <Box sx={{
      margin: '5px',
      height: 'fit-content',
    }}>
          <a href="">
            <Box sx={{
              background: '#FFC7E2',
              height: '48px',
              width: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img src={img}/>
            </Box>
          </a>
    </Box>
  )
}

export default BoxLink