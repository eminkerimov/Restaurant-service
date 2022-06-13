import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { Button } from "@mui/material";

const rows = [
  {
    masa: "m5",
    servant: "emin",
    status: "Ləğv edilən",
    amount: 25,
    endDate: "23.23.2022",
  },
  {
    masa: "m9",
    servant: "emin",
    status: "Sonlanan",
    amount: 25,
    endDate: "23.23.2022",
  },
  {
    masa: "m5",
    servant: "anar",
    status: "Sonlanmayan",
    amount: 25,
    endDate: "23.23.2022",
  },
  {
    masa: "m5",
    servant: "emin",
    status: "Sonlanan",
    amount: 25,
    endDate: "23.23.2022",
  },
  {
    masa: "m5",
    servant: "emin",
    status: "Sonlanmayan",
    amount: 25,
    endDate: "23.23.2022",
  },
  {
    masa: "m5",
    servant: "emin",
    status: "Ləğv edilən",
    amount: 25,
    endDate: "23.23.2022",
  },
  {
    masa: "m5",
    servant: "emin",
    status: "Sonlanmayan",
    amount: 25,
    endDate: "23.23.2022",
  },
  {
    masa: "m5",
    servant: "emin",
    status: "Sonlanmayan",
    amount: 25,
    endDate: "23.23.2022",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "order", label: "Sıra sayı" },
  {
    id: "masa",
    label: "Masa",
  },
  {
    id: "servant",
    label: "Xidmətçi",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "amount",
    label: "Məbləğ",
  },
  {
    id: "endDate",
    label: "Sonlanma Tarixi",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="right"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>Ətraflı</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function AllOrders() {
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("status");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container">
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow>
                        <TableCell id={index} align="right">
                          №
                        </TableCell>
                        <TableCell align="right">{row.masa}</TableCell>
                        <TableCell align="right">{row.servant}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{row.endDate}</TableCell>
                        <TableCell>
                          <Button variant="contained" color="primary">
                            BAX
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
}
