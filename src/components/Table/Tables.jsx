import React from 'react'
import "./Table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Tables = () => {

    const rows = [
        {
          id: 1,
          productname: "iPhone 13",
          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&s",
          customername: "John Doe",
          date: "2024-09-20",
          amount: 999,
          method: "Credit Card",
          status: "Approved"
        },
        {
          id: 2,
          productname: "Samsung Galaxy S21",
          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&s",
          customername: "Jane Smith",
          date: "2024-09-21",
          amount: 799,
          method: "PayPal",
          status: "Pending"
        },
        {
          id: 3,
          productname: "MacBook Pro",
          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&s",
          customername: "Chris Johnson",
          date: "2024-09-18",
          amount: 1999,
          method: "Debit Card",
          status: "Approved"
        },
        {
          id: 4,
          productname: "Sony WH-1000XM4",
          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&s",
          customername: "Olivia Brown",
          date: "2024-09-19",
          amount: 349,
          method: "Bank Transfer",
          status: "Declined"
        },
        {
          id: 5,
          productname: "Dell XPS 13",
          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&s",
          customername: "William Davis",
          date: "2024-09-22",
          amount: 1299,
          method: "Credit Card",
          status: "Approved"
        },
        {
          id: 6,
          productname: "Apple Watch Series 7",
          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&s",
          customername: "Emily Wilson",
          date: "2024-09-23",
          amount: 399,
          method: "PayPal",
          status: "Pending"
        },
        {
          id: 7,
          productname: "Google Pixel 6",
          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&s",
          customername: "Michael White",
          date: "2024-09-24",
          amount: 699,
          method: "Credit Card",
          status: "Approved"
        }
      ];
      


  return (
  
      <TableContainer component={Paper} className='tables' >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className='tableCell'>Tracking ID</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Customer</TableCell>
          <TableCell className='tableCell'>Date</TableCell>
          <TableCell className='tableCell'>Amount</TableCell>
          <TableCell className='tableCell'>Payment Method</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell className='tableCell'>
                {row.id}
              </TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.img} alt='' className='image'/>
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customername}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables