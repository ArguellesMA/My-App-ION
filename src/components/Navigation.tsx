import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';

import Balance from './Balance'
import ButtonsOptons from './ButtonsOptions'
import NextPay from './NextPay'
import DataMovements from './DataMovements';

export default function Navigation(props: any) {

  const { services, setservices } = props;

  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);


  return (
    <Box sx={{bottom: 0, left: 0, right: 0, pb: 7 }} ref={ref}>
        <Balance ></Balance>
        <ButtonsOptons></ButtonsOptons>
        <NextPay></NextPay> 
        <DataMovements services={services} setservices = {setservices}/>

      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            <Badge badgeContent={4} color="warning">
              <BottomNavigationAction icon={<HomeIcon />} />
            </Badge>
            <BottomNavigationAction icon={<AttachMoneyIcon />} />
            <BottomNavigationAction icon={<CreditCardIcon />} />
            <BottomNavigationAction icon={<StarBorderIcon />} />
            <BottomNavigationAction icon={<NotificationsNoneIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}


