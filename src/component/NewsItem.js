import React from "react";
const NewsItem = (props)=>  {
    let {title , description,imageurl,newsUrl}= props;
    return (
      <div className="card h-100" style={{width: "18rem"}}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">
           {description}....
          </p>
          {/* <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {date}</small></p> */}
          <a href={newsUrl} target="_blank" className="btn btn-primary" rel="noreferrer">
            Read more
          </a>
        </div>
      </div>
    );
}

export default NewsItem;
