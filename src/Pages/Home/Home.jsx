import React from 'react'
import  "./Home.scss"
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';
import Feature from '../../components/featured/Feature';
import Chart from '../../components/chart/Chart';
import Tables from '../../components/Table/Tables';
const Home = () => {
  return (
    <div className='home' >
        <Sidebar />
        <div className='homecontainer'>
        <Navbar />
            <div className='widgets'>
              <Widgets type="user" />
              <Widgets type="order" />
              <Widgets type = "earning" />
              <Widgets type = "balance" />
            </div>
            <div className='charts'>
              <Feature />
              <Chart title="Last 6 Months ( Revenue ) " aspect={2/1} />
            </div>
            <div className='listContainer'>
              <div className='listTitle'>Latest Transactions</div>
              <Tables />
            </div>
        </div>
    </div>
  )
}

export default Home;