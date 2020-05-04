import React, { Component } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import Logo from "./components/Logo/Logo";

class App extends Component {
  render() {
    return (
      <>
        <Logo />
        <ArticleList />
      </>
    );
  }
}

export default App;
