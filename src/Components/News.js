import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import { Spinner } from "./Spinner";

export class News extends Component {
  static defaultProps = {
    pageSize: 9,
    country: "in",
    category: "sports",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello Iam from News Constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    console.log("COMPONENT DID MOUNT!!!");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=35bdaeab58554a098f9218a966f895b7&pageSize=${this.props.pageSize}&page=${this.state.page}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrevClick = async () => {
    console.log("PREV!!");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=35bdaeab58554a098f9218a966f895b7&pageSize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("NEXT!!");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=35bdaeab58554a098f9218a966f895b7&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    console.log("RENDER!!!");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px" }}>
          NewsMonkey - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((article) => {
              return (
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    title={article.title ? article.title.slice(0, 45) : ""}
                    description={
                      article.description
                        ? article.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              Math.floor(this.state.totalResults / this.props.pageSize) <
              this.state.page
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
