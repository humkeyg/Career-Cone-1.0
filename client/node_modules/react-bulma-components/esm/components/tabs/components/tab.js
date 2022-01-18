function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';

var Tab = function Tab(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      active = _ref.active,
      domRef = _ref.domRef,
      props = _objectWithoutProperties(_ref, ["children", "className", "style", "active", "domRef"]);

  return /*#__PURE__*/React.createElement("li", {
    ref: domRef,
    style: style,
    className: classnames(className, {
      'is-active': active
    })
  }, /*#__PURE__*/React.createElement(Element, props, children));
};

Tab.defaultProps = {
  renderAs: 'a'
};
export default Tab;
//# sourceMappingURL=tab.js.map