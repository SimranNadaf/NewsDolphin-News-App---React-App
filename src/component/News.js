import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general",
    title: "",
  };
  PropTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    // document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsDolfin`;
    document.title = `${this.props.title} - NewsDolphin `;
  }
  // capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  async Update() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.Update();
  }
  Fetch = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      if (
        Math.ceil(this.state.totalResults / this.props.pageSize) >=
        this.state.page
      ) {
        this.Fetch();
      }
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center my-3">
          NewsDolphin - Top {this.props.title} Headlines{" "}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          key={this.state.page}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            Math.ceil(this.state.totalResults / this.props.pageSize) >=
            this.state.page
          }
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-4 my-4" key={index}>
                    <NewItem
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
  }
}

export default News;
