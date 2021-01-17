import React, { useContext, useState } from "react";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  TableSortLabel,
  TablePagination,
} from "@material-ui/core";

import { DataContext } from "../Assets/DataContext";

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

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const ITableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const classes = useToolbarStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center" className={classes.title}>
          SELECT
        </TableCell>
        <TableCell align="center" className={classes.title}>
          PLAYER NAME
        </TableCell>
        <TableCell align="center" className={classes.title}>
          LEVEL
        </TableCell>
        <TableCell align="center" className={classes.title}>
          AVATAR
        </TableCell>
        <TableCell
          align="center"
          sortDirection={orderBy === "Bet" ? order : false}
          className={classes.title}
        >
          <TableSortLabel
            active={orderBy === "Bet"}
            direction={orderBy === "Bet" ? order : "asc"}
            onClick={createSortHandler("Bet")}
          >
            BET
          </TableSortLabel>
        </TableCell>
        <TableCell align="center" className={classes.title}>
          WINS
        </TableCell>
        <TableCell align="center" className={classes.title}>
          LOST
        </TableCell>
        <TableCell
          align="center"
          sortDirection={orderBy === "Price" ? order : false}
          className={classes.title}
        >
          <TableSortLabel
            active={orderBy === "Price"}
            direction={orderBy === "Price" ? order : "asc"}
            onClick={createSortHandler("Price")}
          >
            PRICE
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export const ITable = () => {
  const classes = TableStyles();

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const { Players, SelectedPlayers, setSelectedPlayers } = useContext(
    DataContext
  );

  const isSelected = (name) => SelectedPlayers.indexOf(name) !== -1;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleClick = (event, name) => {
    const selectedIndex = SelectedPlayers.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(SelectedPlayers, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(SelectedPlayers.slice(1));
    } else if (selectedIndex === SelectedPlayers.length - 1) {
      newSelected = newSelected.concat(SelectedPlayers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        SelectedPlayers.slice(0, selectedIndex),
        SelectedPlayers.slice(selectedIndex + 1)
      );
    }

    setSelectedPlayers(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <ITableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {Players ? (
              stableSort(Players, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.Name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>

                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.Name}
                      </TableCell>
                      <TableCell align="center">{row.Level}</TableCell>
                      <TableCell align="center">
                        <div
                          style={{
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          <Avatar alt="Remy Sharp" src={row["Profile Image"]} />
                        </div>
                      </TableCell>
                      <TableCell align="center">{row.Bet}</TableCell>
                      <TableCell align="center">{row.Wins}</TableCell>
                      <TableCell align="center">{row.Loss}</TableCell>
                      <TableCell align="center">{row.Price}</TableCell>
                    </TableRow>
                  );
                })
            ) : (
              <div />
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          labelRowsPerPage=""
          component="div"
          count={Players.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </Paper>
    </div>
  );
};

export default ITable;

const TableStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(0),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));
