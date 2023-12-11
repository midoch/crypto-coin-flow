import React from "react";

const CoinItem = (props) => {
  return (
    <div>
      <p>{props.coins.market_cap_rank}</p>
      <div>
        <img src={props.coins.image} alt="crypto" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p>${props.coins.total_volume.toLocaleString()}</p>
      <p>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
