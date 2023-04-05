import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" 
    p={2} sx={{position: 'sticky', background:"rgb(10, 19, 48)",boxShadow:  "9px 10px 44px 1px rgba(113,140,196,0.74)", top: 0, justifyContent: 'space-between', borderRadius: 7, pt: 2}}
    >
      <Link to="/" style={{display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={65} width={95}/>
      </Link>
      <SearchBar/>
     </Stack> 
  )
}

export default Navbar
