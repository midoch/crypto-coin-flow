import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://crypto-news16.p.rapidapi.com/news/top/5",
        headers: {
          "X-RapidAPI-Key":
            "294df55e38mshbe81b278a530b6ep12af76jsn2c2a14ee6e5d",
          "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setArticles(response.data);
      } catch (error) {
        setError("Failed to fetch news. Please try again later.");
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Latest News</h2>

      {loading && <p className="text-teal-500">Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div
            key={article.title}
            className="bg-teal-800 text-white p-4 rounded-md"
          >
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-200 mb-2">{article.description}</p>
            <p className="text-gray-300 mb-2">
              Date: {new Date(article.date).toLocaleString()}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
