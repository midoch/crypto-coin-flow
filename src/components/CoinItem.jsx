import React from "react";

const CoinItem = (props) => {
  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-md mb-4">
      <p className="text-lg font-bold text-green-500 mb-2">
        Rank #{props.coins.market_cap_rank}
      </p>
      <div className="flex items-center mb-4">
        <img src={props.coins.image} alt="crypto" className="w-10 h-10 mr-2" />
        <p className="text-xl font-semibold text-white">
          {props.coins.symbol.toUpperCase()}
        </p>
      </div>
      <p className="text-lg font-semibold text-white">
        Price: ${props.coins.current_price.toLocaleString()}
      </p>
      <p
        className={`text-lg ${
          props.coins.price_change_percentage_24h >= 0
            ? "text-green-500"
            : "text-red-500"
        } mb-2`}
      >
        24h Change: {props.coins.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="text-lg font-semibold text-white">
        Volume: ${props.coins.total_volume.toLocaleString()}
      </p>
      <p className="text-lg font-semibold text-white">
        Market Cap: ${props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;
