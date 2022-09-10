import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // if Title is not props then we category as title
  // const capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  const Update = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setLoading(false);
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    // document.title=`${capitalizeFirstLetter(props.category)} - NewsDolfin`;
    document.title = `${props.title} - NewsDolphin `;
    Update();
    // eslint-disable-next-line
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const Fetch = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(article.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  const fetchMoreData = async () => {
    setpage(page + 1);
    if (Math.ceil(totalResults / props.pageSize) >= page) {
      Fetch();
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsDolphin - Top {props.title} Headlines{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        key={page}
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={Math.ceil(totalResults / props.pageSize) >= page}
        loader={<Spinner />}
      >
        <div className="container mr-5 ml-5">
          <div className="row my-3">
            {article.map((element, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    img={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  pageSize: 6,
  country: "in",
  category: "general",
  title: "",
};
// News.PropTypes = {
//   pageSize: PropTypes.number,
//   country: PropTypes.string,
//   category: PropTypes.string,
//   title: PropTypes.string,
// };

export default News;
