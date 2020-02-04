import React from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import "./style.css";

const TopInfo = ({
  title,
  image,
  description,
  center = false,
  variant = "h3",
  // authenticated,
  isOwner = false,
  component
}) => {
  return (
    <div className={`preview-container${center ? " center" : ""}`}>
      <img src={image} alt="placeholder" />
      <div className="w-800">
        <Typography variant={variant}>{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </div>

      {isOwner && (
        <React.Fragment>
          <div className="rel">
            <div className="vertical-line"></div>
          </div>
          {component && (
            <div className="flex center column w-250">{component()}</div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps, null)(TopInfo);
