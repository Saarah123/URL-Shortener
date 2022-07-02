
import './App.css';
import { AppBar, Button, Checkbox, TextField, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
       const [text,setText]=useState({
         fullUrl:"",
         shortUrl:""
       })
      const [data,setData]=useState([])
       const getInputData=(e)=>{
         let {id,value}=e.target
         setText({...text,[id]:value})

       }
      useEffect(()=>{
        getUrl()
      },[])

    const getUrl=()=>{
         axios.get("https://db-short-url.herokuapp.com/shortUrls").then((res)=>{
           setData(res.data)
         })
    }

  const generateUrl=()=>{
     axios.post("https://db-short-url.herokuapp.com/shortUrls",text).then((res)=>{
       alert("Url Generated Successfully!!")
        getUrl()
     }).catch((err)=>{
       console.log(err.message)
     })
  }
  return (
    <>
    <AppBar>
      <Toolbar>
        My Url Shortner
      </Toolbar>
    </AppBar>
    <Box sx={{margin:"auto" , marginTop:"140px" , width:"50%" , display:"flex" , justifyContent:"space-between"}}>
     <TextField id='fullUrl' label="Enter original url" variant='outlined' onChange={getInputData}/>
     <TextField id='shortUrl' label="Enter short url name" variant='outlined' onChange={getInputData}/>
     <Button variant='contained' onClick={generateUrl}>Generate Url</Button>
    </Box>
    <Box sx={{width:"50%" ,  margin:"auto" , marginTop:"30px"}}>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Original Url</TableCell>
            <TableCell align="right">Short Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <a href={row.fullUrl} target="_blank"><TableCell component="th" scope="row">
                {row.fullUrl}
              </TableCell></a>
           <a href={row.fullUrl} target="_blank">   <TableCell align="right">{row.shortUrl}</TableCell></a>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>
  );
}

export default App;