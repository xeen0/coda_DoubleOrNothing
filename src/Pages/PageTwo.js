import React, { useContext,useState } from "react";
import { Divider,Button,Typography,makeStyles } from "@material-ui/core";
import MediaCard from "../Components/CardComponent";
import { DataContext } from "../Assets/DataContext";
import { Link } from "react-router-dom";

const useStyles =makeStyles({
  title: {
    margin: "auto ",
    fontFamily: `'Balsamiq Sans'`


  },
})
const PageTwo = () => {
  const { SelectedPlayers, SearchPlayers,Players,setPlayers } = useContext(DataContext);
  const [RandomNumber ,setRandomNumber ] =useState(Math.floor(Math.random() * 9) + 1);

 
  const setWinnedPlayerProfile= (Profile,index)=> {
    const p={
      ...Profile,
      Level:Profile.Level+1,
      Wins:Profile.Wins+1,
      Price:(Profile.Price*2)
    }
      const newPlayers = Players
      newPlayers[index] = p;
      setPlayers(newPlayers)
  }
  const setLosedPlayerProfile=(Profile,index) =>{
    const p={
      ...Profile,
      Level:Profile.Level>0?Profile.Level-1:0,
      Loss:Profile.Loss+1
    }
    const newPlayers = Players
      newPlayers[index] = p;
      setPlayers(newPlayers)
  }
  const classes = useStyles()

  return (

    <div style={{minHeight:"100vh" ,padding:"10px"}}>
      <div onClick={()=>setRandomNumber(Math.floor(Math.random() * 9) + 1)} className="RandomNumber" >
        {RandomNumber}
      </div>
      <Divider/>
      <div className="Cards-Container">
        {SelectedPlayers.map((name,index) => {
          
          const Profile  = SearchPlayers.find((p,index) => {
            if (p.Name === name) return p;
          });
          const idx = Players.findIndex(i => i.Name === name)
          if(Profile.Bet==RandomNumber){
            setWinnedPlayerProfile(Profile,idx)
          }else{
            setLosedPlayerProfile(Profile,idx)
          }
          return (
            <MediaCard
              key={index}
              Img={Profile["Profile Image"]}
              Name={Profile.Name}
              Wins={Profile.Wins}
              Bet={Profile.Bet}
              Price={Profile.Price}
              color={Profile.Bet==RandomNumber?'success':'danger'}
              RandomNumber={RandomNumber}
            />
          );
        })}
      </div>
      <Link to="/Page1" style={{textDecoration:'none'}} >
          <Button  variant="contained" color='primary' >
          <Typography className={classes.title}>
              Back
            </Typography>
          </Button>
          </Link>
    </div>
  );
};

export default PageTwo;
