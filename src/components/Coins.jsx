import React from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

const Coins = (props) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-6 gap-2 font-bold text-gray-800">
        <div>#</div>
        <div>Coin</div>
        <div>Price</div>
        <div>24h</div>
        <div>Volume</div>
        <div>Market Cap</div>
      </div>
      {props.coins.map((coins) => (
        <Link to={`/coin/${coins.id}`} key={coins.id}>
          <CoinItem coins={coins} />
        </Link>
      ))}
    </div>
  );
};

export default Coins;
