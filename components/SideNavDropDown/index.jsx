import React from "react";
import "./SideNavDropDown.css";

function SideNavDropDown(props) {
  const { spanText, className } = props;

  return (
    <div className={`side-nav-drop-down-1 ${className || ""}`}>
      <div className="frame-2206-1">
        <img
          className="vuesaxlinearcalendar-tick-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/vuesax-linear-calendar-tick-2@2x.png"
          alt="vuesax/linear/calendar-tick"
        />
        <div className="programs-1 poppins-medium-mine-shaft-16px">
          <span className="span-1 poppins-medium-mine-shaft-16px">{spanText}</span>
        </div>
      </div>
      <img
        className="vuesax-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/6493e2b71fb9e3c21b1bb4ca/releases/6493e8193a82226b137a7add/img/vuesax-2@2x.png"
        alt="vuesax"
      />
    </div>
  );
}

export default SideNavDropDown;
