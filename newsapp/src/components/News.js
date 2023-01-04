import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7b815a8fd9684e9a97402cb6f970103c&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }

  handelPrevClick = async () => {
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7b815a8fd9684e9a97402cb6f970103c&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }


  handelNextClick = async () => {
    console.log("Next")

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7b815a8fd9684e9a97402cb6f970103c&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({ articles: parsedData.articles })

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }


  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handelPrevClick}> &larr; Previus</button>
          <button type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News
