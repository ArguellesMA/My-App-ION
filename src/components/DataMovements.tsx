import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

export default function DataMovements(props: any) {
  const { services, setservices } = props;

  console.log(services)
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, display: 'contents' }} aria-label="simple table">
        <TableBody>
          {services.map((services: any) => (
            <TableRow
              key={services.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Avatar alt="Remy Sharp" src={services.image}/>
              </TableCell>
              <TableCell>{services.name}</TableCell>
              <TableCell>{services.status}</TableCell>
              <TableCell>{services.species}</TableCell>
              <TableCell>{services.episode.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
