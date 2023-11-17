import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BaiscSelect() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <Box sx={{
        minWidth: 120,
        marginTop: '24px' 
        }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Lang"
          onChange={handleChange}
        >
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>Portuguese</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}