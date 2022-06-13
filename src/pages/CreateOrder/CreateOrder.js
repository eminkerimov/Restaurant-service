import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DeleteIcon } from '../../assets/Icons';
import "./CreateOrder.scss"

export default function CreateOrder() {
  const [orderStarted, setOrderStarted] = useState(false)
  const [servant, setServant] = useState('');
  const [masa, setMasa] = useState('');
  const [item, setItem] = useState('');
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const [allItems, setAllItems] = useState([])
  const [price, setPrice] = useState('')

  const getAllItems = () => {
    axios.get("http://localhost:3000/db.json")
  .then(function (response) {
    if (response.status === 200)
    setAllItems(response.data.menu)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  };

  useEffect(() => {
    getAllItems();
  }, []);

  // useEffect(() => {
  //   const getItemObj = allItems?.find(o => o.item === item);
  //   setPrice(getItemObj.price)
  // }, [allItems, item])

  const handleChangeServant = (event) => {
    setServant(event.target.value);
  };

  const handleChangeMasa = (event) => {
    setMasa(event.target.value);
  };

  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };

  const handleChangeCount = (event) => {
    setCount(event.target.value);
  };

  var today = new Date();
  var dateTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const handleAddItem = () => {
    const order = rows.length + 1;
    let newItem = {order, masa, servant, item, count, dateTime };
    setRows([...rows, newItem])
  }

  return (
    <div className="container">

      {!orderStarted &&
        <div className='createOrder'>
          <h2>Yeni Sifariş</h2>
          <FormControl>
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
          <FormControl>
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOrderStarted(true)}
            disabled={(servant === "") || (masa === "")}
          >
            Sifarişi Başlat
          </Button>
        </div>}
      {orderStarted &&
        <div className="newOrder">
          <div className="newOrder__table">
            <h2>Masa : {masa}</h2>
            <h2>Ofisiant : {servant}</h2>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Say</TableCell>
                    <TableCell align="right">Məhsulun Adı</TableCell>
                    <TableCell align="right">Miqdar</TableCell>
                    <TableCell align="right">Məbləğ</TableCell>
                    <TableCell align="right">Sifariş saatı</TableCell>
                    <TableCell align="right">Gözləmə</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Geri</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row"> {row.order}</TableCell>
                      <TableCell align="right">{row?.item}</TableCell>
                      <TableCell align="right">{row?.count}</TableCell>
                      <TableCell align="right">?</TableCell>
                      <TableCell align="right">{row?.dateTime}</TableCell>
                      <TableCell align="right">0</TableCell>
                      <TableCell align="right">
                        <span className="newOrder__table__success">Verildi</span>
                      </TableCell>
                      <TableCell align="right">
                        {DeleteIcon}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p>Cəm Məbləğ : {}</p>
              <Button
            variant="contained"
            color="error"
            disabled={!rows.length}
          >
            Sifarişi Sonlandır
          </Button>
            </TableContainer>
          </div>
          <div className="newOrder__modal">
            <h2>Yeni məhsul əlavə edin</h2>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Məhsul</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={item}
                label="Menu"
                onChange={handleChangeItem}
              >
                {allItems?.map((items, index)=>(
                <MenuItem key={index} value={items.item}>{items.item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              InputProps={{
                min: 0
              }}
              id="outlined-number"
              label="Say"
              type="number"
              value={count}
              onChange={handleChangeCount}
            />
            <TextField
              id="standard-read-only-input"
              label="Qiymət"
              value={price}
               InputProps={{
                readOnly: true,
              }}
              variant="standard"

            />
            <Button
              variant="contained"
              color="success"
              onClick={handleAddItem}
              disabled={
                (count <=0) || item === ""
              }
              >
              Əlavə et
            </Button>
          </div>
        </div>
      }

    </div>
  );
}
