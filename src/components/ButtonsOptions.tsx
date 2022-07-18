import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SellIcon from '@mui/icons-material/Sell';
import Badge from '@mui/material/Badge';

export default function ButtonsOptions() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={{backgroundColor: '#783183', width: '100%', paddingTop: '1em', paddingBottom: '1em'}}
    >
        <Badge badgeContent={4} color="warning">
          <BottomNavigationAction label="Recents" icon={<StarIcon sx={{ color: '#ffffff', fontSize: 40}} />} />
        </Badge>
        <BottomNavigationAction label="Pagar servicio" icon={<SellIcon sx={{ color: '#ffffff', fontSize: 40}}/>} />
        <BottomNavigationAction label="Suscripción" icon={<NotificationsIcon sx={{ color: '#ffffff', fontSize: 40}}/>} />

    </BottomNavigation>
  );
}
