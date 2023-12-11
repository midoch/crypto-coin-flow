import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "../components/Coins";
import Navbar from "../components/Navbar";

const Home = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-start text-white">
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Welcome to Crypto Coin Flows
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Explore the world of cryptocurrencies and stay updated with
            real-time market data.
          </p>
        </div>
        <Coins coins={coins} />
      </div>
    </>
  );
};

export default Home;
