import React, { Children } from "react";
import PropTypes from "prop-types";

const InputRow = ({ children, label }) => {
  const singleChild = Children.only(children);
  const hasInputElement = Children.map(children, (child) => {
    if (child.type === "input") return true;
    return false;
  });
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <div>
        {hasInputElement[0]
          ? React.cloneElement(singleChild, {
              className:
                "form-control form-control-lg border border-1 border-dark",
            })
          : new Error("an input element is required!")}
      </div>
    </div>
  );
};

InputRow.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
export default InputRow;
