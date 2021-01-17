import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Box, Typography } from "@material-ui/core";
import { GiTrophyCup } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import { RiCopperCoinLine } from "react-icons/ri";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  sub: {
    direction: "flex",
  },
}));

export default function FolderList({ Name, Avtr, Wins, Bet, Price }) {
  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={Avtr} />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="h6">{Name}</Typography>
        <Typography variant="caption" className={classes.sub}>
          <div style={{ display: "inline" ,marginRight:20 }}>
            <GiTrophyCup /> {Wins}
          </div>
          <div style={{ display: "inline" ,marginRight:20 }}>
            <FaCoins /> {Bet}
          </div>

          <div style={{ display: "inline",marginRight:20  }}>
            <RiCopperCoinLine /> {Price}
          </div>
        </Typography>
      </ListItemText>
    </ListItem>
  );
}
