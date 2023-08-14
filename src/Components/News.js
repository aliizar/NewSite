import React  from "react";
import './App.css';
const  News =(props)=> {
  
    let { title, discription, src ,MoreUrl , date , author } = props;
    return (
      <>
        <div className="card mb-3" style={{backgroundColor:"transparent",color:"white",border:'2px solid white'}}>
          <img
            src={!src?"https://www.hindustantimes.com/ht-img/img/2023/08/04/1600x900/Screenshot_2023-08-04_200512_1691159769180_1691159781025.png":src}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small>By {!author?"Unknown":author} On {new Date(date).toGMTString()}</small></p>

            <a rel="noreferrer" href={MoreUrl} target="_blank" className="btn btn-danger">
             Read More
            </a>
          </div>
        
        </div>
        

      </>
    );
  
}
export default News
