import React from "react";
import Zoom from "react-reveal/Zoom";
import locationIcon from "../../assets/icons/location.png";
import calenderIcon from "../../assets/icons/calendar.png";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${calenderIcon})` }}
                  ></div>
                  <div className="vn_title">Event Date $ Time</div>
                  <div className="vn_desc">12th Nov 2020 @ 7:00 PM</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${locationIcon})` }}
                  ></div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">
                    Akshya Nagar, CV Nagar, B-560016
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
