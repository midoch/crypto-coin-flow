// Coin.jsx
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setCoin(response.data);
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
      <div className="container mx-auto text-white p-4">
        <div className="text-center mt-5 mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">{coin.name}</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col">
            <h4 className="text-lg font-bold">Rank #{coin.market_cap_rank}</h4>
            {coin.image ? (
              <img
                src={coin.image.small}
                alt={coin.name}
                className="rounded-md mb-4"
              />
            ) : null}
            <p>Name: {coin.name}</p>
            <p>Ticker: {coin.symbol}</p>
          </div>

          <div className="col">
            <h4 className="text-lg font-bold">Price</h4>
            {coin.market_data ? (
              <p className="text-green-500">
                ${coin.market_data?.current_price?.usd.toLocaleString()}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mt-8">Price Change (%)</h4>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    ?.usd ? (
                    <p>
                      {
                        coin.market_data?.price_change_percentage_1h_in_currency
                          ?.usd
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency
                    ?.usd ? (
                    <p>
                      {
                        coin.market_data
                          ?.price_change_percentage_24h_in_currency?.usd
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency
                    ?.usd ? (
                    <p>
                      {
                        coin.market_data?.price_change_percentage_7d_in_currency
                          ?.usd
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency
                    ?.usd ? (
                    <p>
                      {
                        coin.market_data
                          ?.price_change_percentage_14d_in_currency?.usd
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency
                    ?.usd ? (
                    <p>
                      {
                        coin.market_data
                          ?.price_change_percentage_30d_in_currency?.usd
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency
                    ?.usd ? (
                    <p>
                      {
                        coin.market_data?.price_change_percentage_1y_in_currency
                          ?.usd
                      }
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h4 className="text-lg font-bold">24 Hour Low</h4>
            {coin.market_data?.low_24h ? (
              <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div>
            <h4 className="text-lg font-bold">24 Hour High</h4>
            {coin.market_data?.high_24h ? (
              <p>${coin.market_data?.high_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h4 className="text-lg font-bold">Market Cap</h4>
            {coin.market_data?.market_cap?.usd ? (
              <p>${coin.market_data?.market_cap?.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div>
            <h4 className="text-lg font-bold">Circulating Supply</h4>
            {coin.market_data?.circulating_supply ? (
              <p>{coin.market_data?.circulating_supply.toLocaleString()}</p>
            ) : null}
          </div>
        </div>

        {loading ? (
          <p className="text-gray-300 text-xl mt-8">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-xl mt-8">Error: {error}</p>
        ) : null}
      </div>
    </>
  );
};

export default Coin;
