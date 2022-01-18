function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import Icon from '../../icon';
import useFieldContext from './field/context';
import Button from '../../button';

var Control = function Control(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullwidth = _ref.fullwidth,
      loading = _ref.loading,
      iconType = _ref.iconType,
      props = _objectWithoutProperties(_ref, ["children", "className", "fullwidth", "loading", "iconType"]);

  var context = useFieldContext();

  var isIcon = function isIcon(child) {
    return child.type === (iconType || Icon) && (child.props.align === 'left' || child.props.align === 'right');
  };

  var updatedChildren = React.Children.map(children, function (child) {
    if (!child || !isIcon(child) && child.type !== Button) {
      return child;
    }

    return /*#__PURE__*/React.cloneElement(child, {
      size: child.props.size || context.size
    });
  });
  var icons = React.Children.toArray(updatedChildren).filter(isIcon).reduce(function (acc, icon) {
    return {
      iconLeft: acc.iconLeft || icon.props.align === 'left',
      iconRight: acc.iconRight || icon.props.align === 'right'
    };
  }, {
    iconLeft: false,
    iconRight: false
  });
  return /*#__PURE__*/React.createElement(Element, _extends({}, props, {
    className: classnames('control', className, {
      'is-expanded': fullwidth,
      'has-icons-left': icons.iconLeft,
      'has-icons-right': icons.iconRight,
      'is-loading': loading
    })
  }), updatedChildren);
};

Control.defaultProps = {};
export default Control;
//# sourceMappingURL=control.js.map