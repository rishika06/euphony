import React, { Component } from "react";
import "./assets/styles.css";
import Header from "./components/header_footer/header.comp";
import Featured from "./components/featured/index.featured";
import VenueInfo from "./components/venue info/index.venueInfo";
import Highlights from "./components/highlights/index.highlights";
import Pricing from "./components/pricing/index.pricing";
import Location from "./components/location/index.location";
import Footer from "./components/header_footer/footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div style={{ height: "1500px" }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venueInfo">
          <VenueInfo />
        </Element>
        <Element name="highlight">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
