import React from "react";

import { Article } from "../../components";

const articles = [
  {
    id: 1,
    title: "Lorem Ipsum",
    author: "Jack Russell",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tortor eu justo dictum finibus.",
  },
  {
    id: 2,
    title: "Donec non eros eros",
    author: "Joh Smith",
    text:
      "Donec non eros eros. Vivamus tincidunt maximus augue quis porta. Etiam egestas odio finibus tincidunt auctor.",
  },
  {
    id: 3,
    title: "Pellentesque pretium mattis",
    author: "Michael Morgan",
    text:
      "Pellentesque pretium mattis dui at accumsan. Sed dignissim felis a purus rutrum dictum. Interdum et malesuada fames.",
  },
];

const Home = () => {
  const articleList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{articleList}</div>;
};

export default Home;
