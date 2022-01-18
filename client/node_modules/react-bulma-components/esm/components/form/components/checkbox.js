function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      style = _ref.style,
      disabled = _ref.disabled,
      children = _ref.children,
      domRef = _ref.domRef,
      props = _objectWithoutProperties(_ref, ["className", "style", "disabled", "children", "domRef"]);

  return /*#__PURE__*/React.createElement(Element, {
    renderAs: "label",
    domRef: domRef,
    disabled: disabled,
    className: classnames('checkbox', className),
    style: style
  }, /*#__PURE__*/React.createElement(Element, _extends({
    type: "checkbox",
    disabled: disabled
  }, props)), " ", children);
};

Checkbox.defaultProps = {
  renderAs: 'input'
};
export default Checkbox;
//# sourceMappingURL=checkbox.js.map