import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./Feature.scss"
const Feature = () => {
  return (
    <div className='feature'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featureChart'>
        <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className='title'>Total Sales Made Today</p>
        <p className='amount'>$210</p>
        <p className='desc'>Previous transaction processing. Last Payments may not be included.</p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
            <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>$20.9B</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult positive'>
            <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>$9.2B</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positive'>
            <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>$78.9B</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature