import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

function SearchSwap({ children, term, styles, swap, caseSensitive }) {
  if (!term) return children;
  const display = swap ? swap : term;
  const extendStyles = child => {
    const innerString = child.props.children;
    if (innerString.includes(term)) {
      const textArray = innerString.split(term);
      const matchSpan = React.createElement("span", {
        style: styles,
        children: display
      });
      let spliceIndex = 1;
      textArray.forEach((el, i) => {
        if (spliceIndex === textArray.length) return;
        textArray.splice(spliceIndex, 0, matchSpan);
        spliceIndex += 2;
      });
      const filtered = _.compact(textArray);
      return React.createElement(
        child.type,
        {
          ...child.props
        },
        filtered
      );
    }
    return React.cloneElement(child, { ...child.props });
  };

  const checkChildren = child => {
    if (!child) return;
    const hasChildren = child.props && child.props.children;
    if (hasChildren && _.isObject(child.props.children)) {
      const alteredChildren = React.Children.map(
        child.props.children,
        checkChildren
      );
      return React.createElement(
        child.type,
        {
          ...child.props
        },
        alteredChildren
      );
    } else if (hasChildren && _.isString(child.props.children)) {
      if (!child.props.children.includes(term)) return child;
      return extendStyles(child);
    } else {
      if (_.isString(child) && child.includes(term)) {
        const textArray = child.split(term);
        const matchSpan = React.createElement("span", {
          style: styles,
          children: display
        });
        let spliceIndex = 1;
        textArray.forEach((el, i) => {
          if (spliceIndex === textArray.length) return;
          textArray.splice(spliceIndex, 0, matchSpan);
          spliceIndex += 2;
        });
        return _.compact(textArray);
      }
      return child;
    }
  };
  const extended = React.Children.map(children, checkChildren);
  return extended;
}

export default SearchSwap;

SearchSwap.propTypes = {
  term: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  swap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  caseSensitive: PropTypes.bool
};
