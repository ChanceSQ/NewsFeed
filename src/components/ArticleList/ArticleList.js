import React, { Component } from "react";
import Articles from "../articles";
import classes from "./CountryDropDown.module.css";

class ArticleList extends Component {
  state = {
    articles: [],
  };

  grabList(country) {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ articles: data.articles });
      })
      .catch(console.log);
  }

  render() {
    const countries = [
      { name: "Argentina", value: "ar" },
      { name: "Australia", value: "au" },
      { name: "Austria", value: "at" },
      { name: "Belgium", value: "be" },
      { name: "Brazil", value: "br" },
      { name: "Bulgaria", value: "bg" },
      { name: "Canada", value: "ca" },
      { name: "China", value: "cn" },
      { name: "Colombia", value: "co" },
      { name: "Cuba", value: "cu" },
      { name: "Czechia", value: "cz" },
      { name: "Egypt", value: "eg" },
      { name: "France", value: "fr" },
      { name: "Germany", value: "de" },
      { name: "Great Britain", value: "gb" },
      { name: "Greece", value: "gr" },
      { name: "Hong Kong", value: "hk" },
      { name: "Hungary", value: "hu" },
      { name: "India", value: "in" },
      { name: "Indonesia", value: "id" },
      { name: "Ireland", value: "ie" },
      { name: "Israel", value: "il" },
      { name: "Italy", value: "it" },
      { name: "Japan", value: "jp" },
      { name: "Korea", value: "kr" },
      { name: "Latvia", value: "lv" },
      { name: "Lithuania", value: "lt" },
      { name: "Malaysia", value: "my" },
      { name: "Mexico", value: "mx" },
      { name: "Morocco", value: "ma" },
      { name: "Netherlands", value: "nl" },
      { name: "New Zealand", value: "nz" },
      { name: "Nigeria", value: "ng" },
      { name: "Norway", value: "no" },
      { name: "Philippines", value: "ph" },
      { name: "Poland", value: "pl" },
      { name: "Portugal", value: "pt" },
      { name: "Romania", value: "ro" },
      { name: "Russia", value: "ru" },
      { name: "Saudi Arabia", value: "sa" },
      { name: "Serbia", value: "rs" },
      { name: "Singapore", value: "sg" },
      { name: "Slovakia", value: "sk" },
      { name: "Slovenia", value: "si" },
      { name: "South Africa", value: "za" },
      { name: "Sweden", value: "se" },
      { name: "Switzerland", value: "ch" },
      { name: "Taiwan", value: "tw" },
      { name: "Thailand", value: "th" },
      { name: "Turkey", value: "tr" },
      { name: "Ukraine", value: "ua" },
      { name: "United Arab Emirates", value: "ae" },
      { name: "United States", value: "us" },
      { name: "Venezuela", value: "ve" },
    ];

    return (
      <>
        <div className={classes.center}>
          <select
            id="CountryList"
            name="Country"
            defaultValue="Global"
            className={classes.CountryDropDown}
          >
            {countries.map((country) => (
              <option value={country.value} key={country.value}>
                {country.name}
              </option>
            ))}
          </select>
          <button
            className={classes.SearchButton}
            onClick={() => {
              var e = document.getElementById("CountryList");
              var country = e.options[e.selectedIndex].value;

              this.grabList(country);
            }}
          >
            Search
          </button>
        </div>
        <div className={classes.resultList}>
          <Articles articles={this.state.articles} />
        </div>
      </>
    );
  }
}

export default ArticleList;
