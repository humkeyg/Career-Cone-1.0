function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../element';

var Heading = function Heading(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      subtitle = _ref.subtitle,
      weight = _ref.weight,
      spaced = _ref.spaced,
      heading = _ref.heading,
      props = _objectWithoutProperties(_ref, ["children", "className", "size", "subtitle", "weight", "spaced", "heading"]);

  return /*#__PURE__*/React.createElement(Element, _extends({}, props, {
    className: classnames(className, (_classnames = {
      title: !subtitle && !heading,
      subtitle: subtitle,
      heading: heading
    }, _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "has-text-weight-".concat(weight), weight), _defineProperty(_classnames, 'is-spaced', spaced && !subtitle), _classnames))
  }), children);
};

Heading.defaultProps = {
  renderAs: 'h1'
};
export default Heading;
//# sourceMappingURL=heading.js.map