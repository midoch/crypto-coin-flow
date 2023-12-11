import React from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

const Coins = (props) => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white">
      <div className="grid grid-cols-6 gap-4 font-bold mb-4 pl-4">
        <div className="col">#</div>
        <div className="col">Coin</div>
        <div className="col sm:hidden pl-12">Price</div>
        <div className="col hidden md:block">24h Change</div>
        <div className="col hidden md:block">Volume</div>
        <div className="col hidden md:block">Market Cap</div>
      </div>
      {props.coins.map((coins) => (
        <Link
          to={`/coin/${coins.id}`}
          element={<Coin />}
          key={coins.id}
          className="cursor-pointer"
        >
          <div className="grid grid-cols-6 gap-4 bg-gray-800 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 items-center mb-4">
            <div className="col">{coins.market_cap_rank}</div>
            <div className="col flex items-center space-x-2">
              <img
                src={coins.image}
                alt="crypto"
                className="w-8 h-8 mr-2 rounded-full"
              />
              <p className="text-sm">{coins.symbol.toUpperCase()}</p>
            </div>
            <div className="col sm:hidden pl-12">
              ${coins.current_price.toLocaleString()}
            </div>
            <div className="col hidden md:block">
              {coins.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="col hidden md:block">
              ${coins.total_volume.toLocaleString()}
            </div>
            <div className="col hidden md:block">
              ${coins.market_cap.toLocaleString()}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Coins;
