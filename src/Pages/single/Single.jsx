import React from 'react'
import "./Single.scss"
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/Table/Tables';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
        <div className='left'>

        <div  className='editButton'>Edit</div>

          <h1 className='title'>Information</h1>
          <div className='item'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KehZ0Xz2eEw6uQZDN7YcxdzRfLNfyDs-Hg&s' alt=''  className='itemImg'/>

            <div className='details'>
              <h1 className='itemTitle'>Joh deo</h1>
              <div className='detailItem'>
                <span className='itemKey' >Email:</span>
                <span className='itemValue' >abc@gmail.com</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey' >Phone:</span>
                <span className='itemValue' >+91 8989898989</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey' >Address:</span>
                <span className='itemValue' >Mars - Solar System</span>
              </div>
              <div className='detailItem'>
                <span className='itemKey' >Country:</span>
                <span className='itemValue' >Galaxy</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <Chart aspect={3/1} title="User Spending ( Last 6 Months ) " />
        </div>
        </div>
        <div className='bottom'>
        <h1 className='title'>Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single;