import React, { useState, useEffect } from "react";
import Newsitems from "./Newsitems";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArt, setTotalArt] = useState(0);
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    let isMounted = true;

    const fetchNews = async (pageNumber) => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}&page=${pageNumber}`;
        const response = await fetch(url);
        const data = await response.json();

        if (isMounted && data?.articles) {
          setArticles(data.articles);
          setTotalArt(data.totalResults);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        if (isMounted) {
          setArticles([]);
        }
      }
    };

    fetchNews(page);

    return () => {
      isMounted = false; // clean up
    };
  }, [page, apiKey]);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < Math.ceil(totalArt / pageSize)) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handlePrevPage}
        >
          &larr; Previous
        </button>
        <button
          disabled={page >= Math.ceil(totalArt / pageSize)}
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleNextPage}
        >
          Next &rarr;
        </button>
      </div>
      <hr />
      <div className="container my-4">
        <div className="row my-3">
          {articles && articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          ) : (
            <p className="text-muted">No articles available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default News;
