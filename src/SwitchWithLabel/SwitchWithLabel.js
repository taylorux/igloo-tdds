import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function SwitchWithLabel(props) {
  const classes = useStyles();

  // Unique Id created by lodash
  const id = _.uniqueId("switchWithLabel-");

  return (
    <FormControlLabelM
      {...props}
      htmlFor={id}
      control={
        <Switch
          id={id}
          inputProps={{ role: "switch", "aria-checked": props.checked }}
        />
      }
      label={props.label}
      className={classes.root}
    />
  );
}

SwitchWithLabel.propTypes = {
  /**
   * If `true`, the checkbox appears selected.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

  /**
   * If `true`, the checkbox will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The label text.
   */
  label: PropTypes.string,

  /**
   * The value of the component.
   */
  value: PropTypes.string,

  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(["end", "start", "top", "bottom"]),

  /**
   * Change event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   * @uxpinignoreprop
   */
  control: PropTypes.element,
};

SwitchWithLabel.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
  onChange: () => undefined,
};

export { SwitchWithLabel as default };
