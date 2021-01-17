import React, { useEffect, useContext, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ITable from "./TableComponent";
import SearchBar from "material-ui-search-bar";
import { useMediaQuery } from "react-responsive";
import { TableContainer, Button } from "@material-ui/core";

import { DataContext, useFetch } from "../Assets/DataContext";
import FolderList from "./ListComponent";
import { Link } from "react-router-dom";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    fontFamily: `'Roboto', 'sans-serif'`
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    margin: "auto ",
    fontFamily: `'Balsamiq Sans'`


  },
}));

export default function MiniDrawer(props) {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(!isTabletOrMobileDevice);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const {
    SelectedPlayers,
    setPlayers,
    SearchPlayers,
  } = useContext(DataContext);
  
  const [Search, setSearch] = useState("");

  const searchFilterFunction = (text) => {
    const newData = SearchPlayers.filter((item) => {
      const itemData = `${item.Name.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setSearch(text);
    setPlayers(newData);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar variant="regular"> 
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <SearchBar
            value={Search}
            onChange={(text) => searchFilterFunction(text)}
            onCancelSearch={() => setPlayers(SearchPlayers)}
          />
          <Typography variant="h5" className={classes.title}>
            Players Seleceted  :  {SelectedPlayers.length}
          </Typography>
          <Link to="/Page2" style={{textDecoration:'none'}} >
          <Button  variant="contained" color="secondary" disableElevation >
            <Typography className={classes.title}>
              Start
            </Typography>
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h5" align="center">
            Selected Players
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {SelectedPlayers.map((name, index) => {
            const Profile = SearchPlayers.find((p) => {
              if (p.Name === name) return p;
            });
            return (
              <FolderList
                key={index}
                Avtr={Profile["Profile Image"]}
                Name={Profile.Name}
                Wins={Profile.Wins}
                Bet={Profile.Bet}
                Price={Profile.Price}
              />
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <TableContainer>
          <div className={classes.toolbar} />
          {props.children}
        </TableContainer>
      </main>
    </div>
  );
}
