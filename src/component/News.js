import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import Spinner from "./Spinner";
const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const updateNews= async ()=>{
    const url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=15`;
    // `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5b7e5459b83a470ab05cac10e4429787&page=${this.state.page}&pagesize=15`;
    setLoading(true);
  let data = await fetch(url);
  let parseData = await data.json(); 
  setArticles(parseData.articles)
  // setTotalResults(parseData.totalResults)
  setLoading(false)
  }
  useEffect(()=>{
    updateNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const PClicked = async()=>{
  setPage(page-1)
  updateNews()
  }
 const NClicked = async ()=>{
    setPage(page+1)

updateNews()

  }
    return ( 
      <>
        <div className="container my-3">
          <h2 className="text-center">News-Top Headlines</h2>
          {loading && <Spinner/>}
          <div className="row">
            {!loading && articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 37) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://static.vecteezy.com/system/resources/previews/000/089/907/original/vector-cute-sorry-smiley-illustration.jpg"
                    }
                    newsUrl={element.url}
                    // author={element.author}
                    // date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between my-3">
          <button disabled={page<=1} type="button" className="btn btn-dark" onClick={PClicked} >&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={NClicked} >Next &rarr;</button>
          </div>
        </div>
      </>
    );
}

 News.defaultProps ={
  country:'in',
  category:'general'
}
News.propTypes={
  country:PropTypes.string,
  category:PropTypes.string
}

export default News;
