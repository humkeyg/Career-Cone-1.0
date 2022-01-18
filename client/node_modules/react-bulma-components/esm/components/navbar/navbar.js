function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Brand from './components/brand';
import Burger from './components/burger';
import Menu from './components/menu';
import Item from './components/item';
import Dropdown from './components/dropdown';
import Divider from './components/divider';
import Link from './components/link';
import Container from './components/container';
import { ShowContext } from './context';
import Element from '../element';

var Navbar = function Navbar(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      fixed = _ref.fixed,
      transparent = _ref.transparent,
      color = _ref.color,
      active = _ref.active,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["children", "className", "fixed", "transparent", "color", "active", "size"]);

  useEffect(function () {
    var html = window.document.querySelector('html');

    if (!html.classList.contains("has-navbar-fixed-".concat(fixed))) {
      html.classList.remove('has-navbar-fixed-top');
      html.classList.remove('has-navbar-fixed-bottom');
    }

    if (fixed) {
      html.classList.add("has-navbar-fixed-".concat(fixed));
    }

    return function () {
      return window.document.querySelector('html').classList.remove("has-navbar-fixed-".concat(fixed));
    };
  }, [fixed]);
  return /*#__PURE__*/React.createElement(ShowContext.Provider, {
    value: active
  }, /*#__PURE__*/React.createElement(Element, _extends({}, props, {
    role: "navigation",
    className: classnames('navbar', className, (_classnames = {
      'is-transparent': transparent
    }, _defineProperty(_classnames, "is-fixed-".concat(fixed), fixed), _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, "is-spaced", size === 'large'), _classnames))
  }), children));
};

Navbar.defaultProps = {
  renderAs: 'nav'
};
Navbar.Brand = Brand;
Navbar.Burger = Burger;
Navbar.Menu = Menu;
Navbar.Item = Item;
Navbar.Dropdown = Dropdown;
Navbar.Link = Link;
Navbar.Divider = Divider;
Navbar.Container = Container;
export default Navbar;
//# sourceMappingURL=navbar.js.map