import React, { useEffect, useState } from 'react'
import Navsidebar from './Navbar/Navsidebar'
import { TableBody, TableCell, TableRow } from '@mui/material'
import{Buffer} from 'buffer';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';


const Addpro = () => {
  var [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  const updateValues = (row) => {
    setSelected(row)
    setUpdate(true)
  }

  return (
    <div>
        <Navsidebar/>
     <div>
     {/* Added Products */}
     <TableBody>
            {category.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.offer_price}</TableCell>
                  <TableCell>{row.MRP}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>
                   {/* <TableCell>
                       <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}
                        width="50" height="50" alt="Error"/></TableCell>  */}
                        <TableCell>
                          <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}width="50" height="50" alt='error'/>
                        </TableCell>

                </TableRow>

              )
            })}
          </TableBody>

     </div>
    </div>
  )
}

export default Addpro
