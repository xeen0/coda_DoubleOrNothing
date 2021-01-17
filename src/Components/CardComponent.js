import React from "react";
import { Card, Image, Media } from "react-bootstrap";
import { GiTrophyCup } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import { RiCopperCoinLine } from "react-icons/ri";
export default function MediaCard({ Img, Name, Bet, Price, Wins,color,RandomNumber }) {
  const c=color=='success'?"green":"red"
  return (
    <Card border={color} style={{ padding: "auto" ,borderWidth:3}}>
      <Media style={{ padding: "10px" }}>
        <img
          width={102}
          height={102}
          className=" mr-3"
          src={Img}
          alt="Generic placeholder"
        />

        <Media.Body>
          <h5>{Name}</h5>
          <div style={{ display: "inline", marginRight: 20 }}>
            <GiTrophyCup /> {Wins}
          </div>
          <div style={{ display: "inline", marginRight: 20 }}>
            <FaCoins /> {Bet}
          </div>

          <div style={{ display: "inline", marginRight: 20 }}>
            <RiCopperCoinLine /> {Price}
          </div>
          <br/>
          <br/>
          <br/>

          <h6 style={{color:`${c}`}}>{color=='success'?"Winner":"Loser"}</h6>
        </Media.Body>
      </Media>
    </Card>
  );
}
