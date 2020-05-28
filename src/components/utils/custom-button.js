import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../assets/icons/ticket.png";

const CustomButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color,
      }}
    >
      <img src={TicketIcon} alt="button" className="iconImage" /> {props.text}
    </Button>
  );
};

export default CustomButton;
