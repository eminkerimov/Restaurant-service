import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import {
  SET_SERVANT,
  SET_TABLE,
  SET_FOOD,
  SET_FOOD_COUNT,
  SET_INITIAL,
  SET_ROW,
} from "../../store/actions/actionTypes";

import { connect } from "react-redux";

import { DeleteIcon } from "../../assets/Icons";
import "./CreateOrder.scss";

function CreateOrder(props) {
  const [orderStarted, setOrderStarted] = useState(false);
  const [rows, setRows] = useState([]);

  const handleChangeServant = (event) => {
    const target = event.target.value;
    props.servantSelectHandle(target);
  };

  const handleChangeTable = (event) => {
    const target = event.target.value;
    props.tableSelectHandle(target);
  };

  const handleChangeItem = (e) => {
    props.foodSelectHandle(e.target.value);
  };

  const handleChangeCount = (e) => {
    props.foodCountHandle(Number(e.target.value));
  };

  var today = new Date();
  var dateTime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const handleAddItem = () => {
    const order = rows.length + 1;
    let newItem = {
      order,
      masa: props.selectedTable,
      servant: props.selectedServant,
      name: props.selectedFood.name,
      amount: props.foodCount,
      date: dateTime,
      price: props.selectedFood.price,
    };
    setRows([...rows, newItem]);
  };

  const handleDelete = (id) => {
    setRows((prev) => {
      return prev.filter((item, index) => index !== id);
    });
  };

  const rowsSum = React.useMemo(() => {
    let total = 0;
    let rowTotal = 0;

    if (rows) {
      rows?.forEach((item) => {
        rowTotal = +item.amount * +item.price;
        total += +item.amount * +item.price;
      });
    }
    return { rowTotal, total };
  }, [rows]);

  const addRowInTable = () => {
    const newId = props.orders[props.orders.length - 1].id + 1;
    const newAmount = rows.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount * currentValue.price;
    }, 0);
    const newRow = {
      id: newId,
      masa: props.selectedTable,
      servant: props.selectedServant,
      status: "Sonlanmayan",
      foods: rows,
      endDate: "04.06.2022",
      amount: newAmount,
    };
    props.setRowHandle(newRow);
    props.setInitialState();
  };

  console.log(rows);

  return (
    <div className="container">
      {!orderStarted && (
        <div className="createOrder">
          <h2>Yeni Sifariş</h2>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Ofisiant</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.selectedServant}
              label="Ofisiant"
              onChange={handleChangeServant}
            >
              <MenuItem value={"Rasul"}>Rasul</MenuItem>
              <MenuItem value={"Emin"}>Emin</MenuItem>
              <MenuItem value={"Namiq"}>Namiq</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Masa</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.selectedTable}
              label="Masa"
              onChange={handleChangeTable}
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
            disabled={
              props.selectedServant === "" || props.selectedTable === ""
            }
          >
            Sifarişi Başlat
          </Button>
        </div>
      )}
      {orderStarted && (
        <div className="newOrder">
          <div className="newOrder__table">
            <h2>Masa: {props.selectedTable}</h2>
            <h2>Ofisiant : {props.selectedServant}</h2>
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
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.order}
                      </TableCell>
                      <TableCell align="right">{row?.name}</TableCell>
                      <TableCell align="right">{row?.amount}</TableCell>
                      <TableCell align="right">
                        {row.amount * row.price}
                      </TableCell>
                      <TableCell align="right">{row?.date}</TableCell>
                      <TableCell align="right">0</TableCell>
                      <TableCell align="right">
                        <span className="newOrder__table__success">
                          Verildi
                        </span>
                      </TableCell>
                      <TableCell
                        onClick={() => handleDelete(index)}
                        align="right"
                      >
                        {DeleteIcon}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p>Cəm Məbləğ : {rowsSum.total} AZN</p>
              <Link to={!rows.length ? "#" : "/"}>
                <Button
                  onClick={addRowInTable}
                  variant="contained"
                  color="error"
                  disabled={!rows.length}
                >
                  Sifarişi Sonlandır
                </Button>
              </Link>
            </TableContainer>
          </div>
          <div className="newOrder__modal">
            <h2>Yeni məhsul əlavə edin</h2>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Məhsul</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.selectedFood}
                label="Menu"
                onChange={(e) => handleChangeItem(e)}
              >
                {props.menu?.map((food, index) => (
                  <MenuItem key={index} value={food}>
                    {food.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              InputProps={{
                min: 0,
              }}
              id="outlined-number"
              label="Say"
              type="number"
              value={props.foodCount}
              onChange={handleChangeCount}
            />
            <p>Qiymət : {props.selectedFood?.price || 0} AZN</p>
            <Button
              variant="contained"
              color="success"
              onClick={handleAddItem}
              disabled={props.foodCount <= 0 || !props.selectedFood}
            >
              Əlavə et
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    menu: state.main.menu,
    selectedServant: state.main.selectedServant,
    selectedTable: state.main.selectedTable,
    selectedFood: state.main.selectedFood,
    foodCount: state.main.foodCount,
    orders: state.main.orders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    servantSelectHandle: (val) => dispatch({ type: SET_SERVANT, payload: val }),
    tableSelectHandle: (val) => dispatch({ type: SET_TABLE, payload: val }),
    foodSelectHandle: (val) => dispatch({ type: SET_FOOD, payload: val }),
    foodCountHandle: (val) => dispatch({ type: SET_FOOD_COUNT, payload: val }),
    setInitialState: () => dispatch({ type: SET_INITIAL }),
    setRowHandle: (val) => dispatch({ type: SET_ROW, payload: val }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);
