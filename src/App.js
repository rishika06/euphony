import React, { Component } from "react";
import "./assets/styles.css";
import Header from "./components/header_footer/header.comp";
import Featured from "./components/featured/index.featured";
import VenueInfo from "./components/venue info/index.venueInfo";
import Highlights from "./components/highlights/index.highlights";

class App extends Component {
  render() {
    return (
      <div style={{ height: "1500px" }}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
