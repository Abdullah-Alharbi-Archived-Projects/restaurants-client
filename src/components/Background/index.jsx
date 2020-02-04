import React from "react";
import "./style.css";

const Background = ({
  background = "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
}) => {
  return (
    <div
      className="bg-main"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default Background;
