function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */

import List from '../list';
import Element from '../../../../element';

var MenuListItem = function MenuListItem(_ref) {
  var children = _ref.children,
      active = _ref.active,
      className = _ref.className,
      ref = _ref.domRef,
      props = _objectWithoutProperties(_ref, ["children", "active", "className", "domRef"]);

  if (typeof children !== 'string' && React.Children.toArray(children).length === 1 && React.Children.only(children).type === List) {
    var child = React.Children.only(children);
    return /*#__PURE__*/React.createElement("li", {
      ref: ref
    }, /*#__PURE__*/React.createElement(Element, _extends({
      className: classnames(className, {
        'is-active': active
      })
    }, props), child.props.title), /*#__PURE__*/React.cloneElement(child, {
      title: undefined
    }));
  }

  return /*#__PURE__*/React.createElement("li", {
    ref: ref
  }, /*#__PURE__*/React.createElement(Element, _extends({
    className: classnames(className, {
      'is-active': active
    })
  }, props), children));
};

MenuListItem.defaultProps = {
  renderAs: 'a'
};
export default MenuListItem;
//# sourceMappingURL=item.js.map