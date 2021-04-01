import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
 
const db = [
    {
        Avatar: 'abc',
        first_name:'duong',
        last_name:'nguyen',
        email:'vanduong@gmail.com'
    },
    {
        Avatar: 'abc',
        first_name:'duong',
        last_name:'nguyen',
        email:'vanduong@gmail.com'
    },
    {
        Avatar: 'abc',
        first_name:'duong',
        last_name:'nguyen',
        email:'vanduong@gmail.com'
    },
    {
        Avatar: 'abc',
        first_name:'duong',
        last_name:'nguyen',
        email:'vanduong@gmail.com'
    },
    {
        Avatar: 'abc',
        first_name:'duong',
        last_name:'nguyen',
        email:'vanduong@gmail.com'
    },
    {
        Avatar: 'abc',
        first_name:'duong',
        last_name:'nguyen',
        email:'vanduong@gmail.com'
    },
]
    const a = 10;
    const style = {
        backgroundColor: 'green',
        color: 'white',
    }
const columns = [
  {
    name: 'province ID',
    // cell: row => <img height="30px" width="30px" alt={row.first_name} src={row.avatar} />,
    selector: 'province_id',
    sortable:true,
    width: '120px',
    wrap:true,
    cell:row => <h2 onClick={()=>{console.log(row)}}>{row.province_name}</h2>
  },
  {
    name: 'province Name',
    selector: 'province_name',
  },
  {
    name: 'province Type',
    selector: 'province_type',
  },
  {
    name: 'province Type',
    selector: 'province_type',
  }
  ,
  {
    name: 'province Type',
    selector: 'province_type',
  }
];

const conditionalRowStyles = [
    {
      when: row => row.calories > 300,
      style: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    // You can also pass a callback to style for additional customization
    {
      when: row => row.calories < 300,
      style: row => ({
        backgroundColor: row.isSpecia ? 'pink' : 'inerit',
      }),
    },
  ];
 const MyTable = ({province}) => {
        console.log({province});
       const [currentPage,setCurrentPage] = useState(1);
        const countPerPage = 10;
        const [displayPerPage,setDisplayPerPage] = useState([]);
        const [loading,setLoading] = useState(false);
        
        useEffect(()=>{
            console.log("ở đây");
            var end = currentPage * countPerPage;
            var start = end-countPerPage;
            setDisplayPerPage(province.slice(start,end));
        },[currentPage,province])
        
        
        return (
            <div className="App">
            <h3>Server side pagination in DataTable - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
            <DataTable
                title="Employees"
                columns={columns}
                data={displayPerPage}
                
                pagination
                paginationServer
                paginationTotalRows={province.length}
                paginationPerPage={countPerPage}
                paginationComponentOptions={{
                    noRowsPerPage: true
                }}
                // onChangePage={(page)=>handleChange(page)}
                onChangePage={page =>{setCurrentPage(page)} }

                conditionalRowStyles={conditionalRowStyles}
                highlightOnHover
                selectableRows // add for checkbox selection
                Clicked
                // onRowClicked = {(e)=>{console.log(e)}}
                onCellClicked = {(e)=>{console.log(e)}}
            />
            </div>
        );
        
        
        
}
 
export default MyTable;