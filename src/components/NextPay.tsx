import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';

  const card = (
    <React.Fragment>
      <CardContent>
      <Typography sx={{ fontSize: 16}} gutterBottom>
          Tu próximo pago
        </Typography>
        <Typography variant="h4" component="div">
          $28,860.00
        </Typography>
        <Typography sx={{ fontSize: 16}} gutterBottom>
          Fecha de pago
        </Typography>

        <Grid container spacing={2}>
            <Grid item xs={3} style={{paddingTop: '16px'}}>
              <Typography variant="h6" component="div">16 Enero</Typography>
            </Grid>
              <Grid item xs={6}>
              <Button variant="contained" sx={{backgroundColor: '#5acaee', float: 'right'}}>PAGAR AHORA </Button>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={0}>
                  <AttachMoneyIcon sx={{ color: '#5ACAEE'}}></AttachMoneyIcon>
            </Grid>
            <Grid item xs={3} style={{paddingTop: '26px'}}>
              <Typography>Mis logros</Typography>
            </Grid>
            <Grid item xs={5} style={{paddingTop: '26px'}}>
              <Typography style={{textAlign: 'right'}}>$27,260.00</Typography>
            </Grid>

        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={0}>
                  <CreditCardIcon sx={{ color: '#5ACAEE'}}></CreditCardIcon>
            </Grid>
            <Grid item xs={5} style={{paddingTop: '26px'}}>
              <Typography>Compras con TDC</Typography>
            </Grid>
              <Grid item xs={3} style={{paddingTop: '26px'}}>
              <Typography style={{textAlign: 'right'}}>$1,600.00</Typography>
            </Grid>

        </Grid>
      </CardContent>
    </React.Fragment>
  );

  export default function NextPay() {  
  return (
    <Box sx={{width: '100%', alignContent: 'center', alignItems: 'center', display: 'flow', flexDirection: 'column'}}>
      <Card variant="outlined" style={{borderRadius: 12, borderColor: 'white', boxShadow: '2px 2px 5px #999'}}>{card}</Card>
    </Box>

  );
}
