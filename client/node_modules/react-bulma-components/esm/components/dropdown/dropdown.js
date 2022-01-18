function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DropdownItem from './components/item';
import DropdownDivider from './components/divider';
import Button from '../button';
import Element from '../element';

var Dropdown = function Dropdown(_ref) {
  var className = _ref.className,
      children = _ref.children,
      value = _ref.value,
      color = _ref.color,
      align = _ref.align,
      right = _ref.right,
      up = _ref.up,
      hoverable = _ref.hoverable,
      label = _ref.label,
      onChange = _ref.onChange,
      closeOnSelect = _ref.closeOnSelect,
      icon = _ref.icon,
      domRef = _ref.domRef,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["className", "children", "value", "color", "align", "right", "up", "hoverable", "label", "onChange", "closeOnSelect", "icon", "domRef", "disabled"]);

  var ref = useRef(domRef);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var close = function close(evt) {
    // IDK yet how to test using the ref in enzime
    // istanbul ignore if
    if (hoverable || evt && ref && ref.current && ref.current.contains(evt.target)) {
      return;
    }

    if (ref.current) {
      setIsOpen(false);
    }
  };

  var onSelect = function onSelect(selectedValue) {
    return function () {
      if (onChange) {
        onChange(selectedValue);
      }

      if (closeOnSelect) {
        close();
      }
    };
  };

  useEffect(function () {
    window.addEventListener('click', close);
    return function () {
      window.removeEventListener('click', close);
    };
  }, []);
  var current = label;
  var childrenArray = React.Children.map(children, function (child, i) {
    if (child.type === DropdownItem && (i === 0 && !label || child.props.value === value)) {
      current = child.props.children;
    }

    return /*#__PURE__*/React.cloneElement(child, child.type === DropdownItem ? {
      active: child.props.value === value,
      onClick: onSelect(child.props.value)
    } : {});
  });
  return /*#__PURE__*/React.createElement(Element, _extends({}, props, {
    domRef: ref,
    className: classnames('dropdown', className, {
      'is-active': isOpen,
      'is-up': up,
      'is-right': right || align === 'right',
      'is-hoverable': hoverable
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-trigger",
    role: "presentation",
    onClick: function onClick() {
      if (disabled) {
        return;
      }

      setIsOpen(function (open) {
        return !open;
      });
    }
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: disabled,
    color: color
  }, /*#__PURE__*/React.createElement("span", null, current), icon)), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu",
    id: "dropdown-menu",
    role: "menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-content"
  }, childrenArray)));
};

Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.defaultProps = {
  closeOnSelect: true
};
export default Dropdown;
//# sourceMappingURL=dropdown.js.map