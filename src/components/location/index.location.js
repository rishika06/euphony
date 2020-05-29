import React from "react";

const Location = () => {
  return (
    <div class="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.262286214292!2d77.64393931482246!3d13.018962290824804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172915d30117%3A0x405bb8b355673e43!2sHRBR%20Park!5e0!3m2!1sen!2sin!4v1590715852347!5m2!1sen!2sin"
        width="100%"
        height="500px"
        frameBorder="0"
        title="location"
        allowFullScreen
      ></iframe>

      <div class="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
