import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14}} color="text.secondary"  gutterBottom>
        SALDO DISPONIBLE
      </Typography>
      <Typography variant="h3" component="div" style={ {color: 'rgb(191,109,203)', paddingTop: '1em'} } >
        $1,499,970.00
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Balance() {
  return (
    <Box sx={{width: '100%', alignContent: 'center', alignItems: 'center', display: 'flow', flexDirection: 'column'}}>
      <Card variant="outlined" style={{borderRadius: 12, borderColor: 'white', boxShadow: '2px 2px 5px #999'}}>{card}</Card>
    </Box>

  );
}
