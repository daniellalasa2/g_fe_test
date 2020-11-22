import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

/**
 * Header of application
 *
 * @param {string} title - Title of HeaderBar
 * @param {counter} counter - Header list length counter
 * @param {Obj} position - Type of header position : 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
 */
function HeaderBar({ title, counter, position }) {
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
HeaderBar.defaultProps = {
  position: "static",
};

export default HeaderBar;
