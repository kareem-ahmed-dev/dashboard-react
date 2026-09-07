import Button from '@mui/material/Button'
import React from 'react'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Box } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
const Dashboard = () => {
  return (
    <div>
      <Box sx={{textAlign: 'right'}}>

      <Button sx={{padding:"6px 8px",textTransform:"capitalize"}} variant="contained">
        <DownloadOutlinedIcon sx={{ mr: '10px' }} />
        Download Reports</Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />

    </div>
  )
}

export default Dashboard