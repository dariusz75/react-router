import React from "react";

const Article = ({ title, author, text }) => {
  return (
    <article>
      <h3
        style={{
          marginBottom: "5px",
          textTransform: "uppercase",
          fontSize: 22,
        }}
      >
        {title}
      </h3>
      <span style={{ display: "block", marginBottom: 10, fontSize: 14 }}>
        {author}
      </span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
