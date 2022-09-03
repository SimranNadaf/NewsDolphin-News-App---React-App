import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

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
      totalResults:0
    };
    // document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsDolfin`;
    document.title = `${this.props.title} - NewsDolphin`;
  }
  // capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  async Update() {
  
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53dddd918db94929b4e12404f3da1716&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    this.Update();
  }
  handlePrevoius =async () => {
    await this.setState({ page: this.state.page - 1 });
    this.Update();
  };

  handleNext = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.Update();
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center my-3">
          NewsDolphine - Top {this.props.title} Headlines{" "}
        </h1>
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className="row my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
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
        )}

        <div className="container d-flex justify-content-between mb-5">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevoius}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page ===
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
