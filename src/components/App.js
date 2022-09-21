import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Article />
    </div>
  );
}

export default App;
