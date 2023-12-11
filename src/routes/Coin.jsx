import React, { useState, useEffect } from "react";
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
        <div className="text-center mt-5 mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{coin.name}</h1>
          <p className="text-xl text-gray-300">Ticker: {coin.symbol}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-900 p-4 rounded-md shadow-md">
            <h4 className="text-lg font-bold mb-2">
              Rank #{coin.market_cap_rank}
            </h4>
            {coin.image && (
              <img
                src={coin.image.small}
                alt={coin.name}
                className="rounded-md mb-2"
              />
            )}
            <p className="text-gray-200">Name: {coin.name}</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-md shadow-md">
            <h4 className="text-lg font-bold mb-2">Price</h4>
            {coin.market_data && (
              <p className="text-2xl font-semibold text-green-500 mb-2">
                ${coin.market_data?.current_price?.usd.toLocaleString()}
              </p>
            )}
            <p className="text-gray-200">
              Last updated:{" "}
              {coin.last_updated && coin.last_updated.slice(0, 10)}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-bold text-white mt-8 mb-4">
            Price Change (%)
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-500 shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">
                    1h
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">
                    24h
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">
                    7d
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">
                    14d
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">
                    30d
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider">
                    1yr
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-300">
                <tr className="text-gray-800">
                  <td className="px-4 py-4">
                    {coin.market_data?.price_change_percentage_1h_in_currency
                      ?.usd ? (
                      <p className="text-green-500">
                        {
                          coin.market_data
                            ?.price_change_percentage_1h_in_currency?.usd
                        }
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-4">
                    {coin.market_data?.price_change_percentage_24h_in_currency
                      ?.usd ? (
                      <p className="text-green-500">
                        {
                          coin.market_data
                            ?.price_change_percentage_24h_in_currency?.usd
                        }
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-4">
                    {coin.market_data?.price_change_percentage_7d_in_currency
                      ?.usd ? (
                      <p className="text-green-500">
                        {
                          coin.market_data
                            ?.price_change_percentage_7d_in_currency?.usd
                        }
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-4">
                    {coin.market_data?.price_change_percentage_14d_in_currency
                      ?.usd ? (
                      <p className="text-green-500">
                        {
                          coin.market_data
                            ?.price_change_percentage_14d_in_currency?.usd
                        }
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-4">
                    {coin.market_data?.price_change_percentage_30d_in_currency
                      ?.usd ? (
                      <p className="text-green-500">
                        {
                          coin.market_data
                            ?.price_change_percentage_30d_in_currency?.usd
                        }
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-4">
                    {coin.market_data?.price_change_percentage_1y_in_currency
                      ?.usd ? (
                      <p className="text-green-500">
                        {
                          coin.market_data
                            ?.price_change_percentage_1y_in_currency?.usd
                        }
                        %
                      </p>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
