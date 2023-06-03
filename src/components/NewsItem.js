import React from "react";
export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card">
      <img
        src={
          imageUrl
            ? imageUrl
            : "https://www.newsanyway.com/wp-content/uploads/2022/03/In-the-news-4-10-March-2022.jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{
            left: "95%",
            zIndex: 1,
          }}
        >
          {source.name}
        </span>
        <p className="card-text"> {description} ...</p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-dark"
        >
          Read more
        </a>
        <p className="card-text">
          <small className="text-muted">
            By {author} on {new Date(date).toGMTString()}
          </small>
        </p>
      </div>
    </div>
  );
}
