import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

/**
 * Header of application
 * @param {Obj} props.title
 */
function HeaderBar(props) {
  const { title, counter, position } = props;
  return (
    <AppBar position={position}>
      <Toolbar>
        <Typography variant="h6">
          {title} {!isNaN(counter) && `(${counter})`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
  counter: PropTypes.number,
  position: PropTypes.string,
};
props.defaultProps = {
  position: "static",
};

export default HeaderBar;
