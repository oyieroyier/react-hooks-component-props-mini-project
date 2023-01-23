import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Article from "./Article";
import Header from "./Header";

console.log(blogData);

function App() {
	return (
    <div className="App">
      <Header name={blogData.name} />
      <Article />
      <About />
		</div>
	);
}

export default App;
