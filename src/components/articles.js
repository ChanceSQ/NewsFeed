import React from "react";
import classes from "./articles.module.css";
import ReactImageFallback from "react-image-fallback";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map(article => (
        <a
          className={classes.card}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.left}>
            <div className={classes.title}>{article.title}</div>
            <p className={classes.description}>{article.description}</p>
            <div className={classes.source}>{article.source.name}</div>
          </div>
          <div className={classes.right}>
            <ReactImageFallback
              src={article.urlToImage}
              fallbackImage="https://via.placeholder.com/75"
              className={classes.img}
              alt={article.title}
            />
          </div>
        </a>
      ))}
    </>
  );
};

export default Articles;
