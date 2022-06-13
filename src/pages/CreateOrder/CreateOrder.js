import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react';
import "./CreateOrder.scss"

export default function CreateOrder() {
  const [orderStarted, setOrderStarted] = useState(false)
  const [servant, setServant] = React.useState('');
  const [masa, setMasa] = React.useState('');

  const handleChangeServant = (event) => {
    setServant(event.target.value);
  };

  const handleChangeMasa = (event) => {
    setMasa(event.target.value);
  };

  return (
    <div className="container">
      {!orderStarted &&
       <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Ofisiant</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={servant}
            label="Ofisiant"
            onChange={handleChangeServant}
          >
            <MenuItem value={"Azer"}>Azer</MenuItem>
            <MenuItem value={"Emin"}>Emin</MenuItem>
            <MenuItem value={"Namiq"}>Namiq</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Masa</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={masa}
            label="Masa"
            onChange={handleChangeMasa}
          >
            <MenuItem value={"A1"}>A1</MenuItem>
            <MenuItem value={"B1"}>B1</MenuItem>
            <MenuItem value={"C1"}>C1</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOrderStarted(true)}
      >
        Sifarişi Başlat
      </Button>
      </>}

    </div>
  );
}
