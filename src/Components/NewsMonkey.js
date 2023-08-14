import React, { useEffect, useState } from "react";
import News from "./News";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const NewsMonkey =(props)=> {


const [articles, setarticles] = useState([]);
const [page, setpage] = useState(1)
const [loading, setloading] = useState(true)
const [totalResults, settotalResults] = useState(0)

    
    document.title = `${props.category} - News`;
  
  const UpadateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f5bb4b7c19b246168c566acdb6a9fbb5&page=${page}&pageSize=${props.PageSize}`;
    props.setProgress(10);
    setloading(true)
    let Data = await fetch(url);
    props.setProgress(60);
    let Display_Data = await Data.json();
    props.setProgress(100);
    setarticles(Display_Data.articles)
    settotalResults(Display_Data.totalResults)
    setloading(false)
  };

  useEffect(() => {
    UpadateNews();
  },[ ])
  
  const fetchMoreData = async () => {
    setpage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f5bb4b7c19b246168c566acdb6a9fbb5&page=${page+1}&pageSize=${props.PageSize}`;
    setloading(true)
    let Data = await fetch(url);
    let Display_Data = await Data.json();

    setarticles(articles.concat(Display_Data.articles))
    settotalResults(Display_Data.totalResults)
    setloading(false)
  };


    return (
      <>
        
        <h1 className="spc my-2 mb-3  text-center">
          NewsMonkey -Top {props.category} HeadLines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container" >
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <News
                      src={element.urlToImage}
                      title={element.title ? element.title : ""}
                      author={element.author}
                      date={element.publishedAt}
                      discription={
                        element.description ? element.description : ""
                      }
                      MoreUrl={element.url}
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
export default NewsMonkey
