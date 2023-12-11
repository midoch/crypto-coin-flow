import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "../components/Coins";
import Navbar from "../components/Navbar";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setCoins(response.data);
      } catch (error) {
        setError("Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start text-white">
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold text-teal-500 mb-4">
            Discover Crypto Coin Flows
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Dive into the realm of cryptocurrencies and keep pace with real-time
            market data.
          </p>
        </div>
        {loading ? (
          <p className="text-gray-300 text-xl">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-xl">Error: {error}</p>
        ) : (
          <Coins coins={coins} />
        )}
      </div>
    </>
  );
};

export default Home;
