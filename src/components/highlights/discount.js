import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import CustomButton from "../utils/custom-button";

class Discount extends React.Component {
  constructor() {
    super();

    this.state = {
      discountStart: 0,
      discountEnd: 30,
    };
  }

  percentageAnimate = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentageAnimate();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentageAnimate()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 14th SEP 2020</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                quibusdam reprehenderit quis totam mollitia incidunt eius. Quia
                dolore velit recusandae.
              </p>
              <CustomButton
                text="Purchase Tickets"
                bck="#ff8a00"
                color="#fff"
                link="google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
