function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import useFieldContext from './field/context';
import { normalizeAlign } from '../../../services/normalizer';

var InputFile = function InputFile(_ref) {
  var _classnames;

  var className = _ref.className,
      style = _ref.style,
      onChange = _ref.onChange,
      color = _ref.color,
      size = _ref.size,
      fullwidth = _ref.fullwidth,
      align = _ref.align,
      boxed = _ref.boxed,
      name = _ref.name,
      label = _ref.label,
      icon = _ref.icon,
      inputProps = _ref.inputProps,
      filename = _ref.filename,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["className", "style", "onChange", "color", "size", "fullwidth", "align", "boxed", "name", "label", "icon", "inputProps", "filename", "value"]);

  var ref = useRef();
  var context = useFieldContext();
  var calculatedSize = size || context.size;
  useEffect(function () {
    if (!ref.current) {
      return;
    }

    if (value) {
      ref.current.files = value;
    } else {
      ref.current.value = '';
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(Element, _extends({
    style: style
  }, props, {
    className: classnames('file', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(calculatedSize), calculatedSize), _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, "is-".concat(normalizeAlign(align)), align), _defineProperty(_classnames, 'has-name', !!filename), _defineProperty(_classnames, 'is-boxed', boxed), _defineProperty(_classnames, 'is-fullwidth', fullwidth), _classnames))
  }), /*#__PURE__*/React.createElement("label", {
    className: "file-label"
  }, /*#__PURE__*/React.createElement("input", _extends({}, inputProps, {
    name: name,
    type: "file",
    className: "file-input",
    onChange: onChange,
    ref: ref
  })), /*#__PURE__*/React.createElement("span", {
    className: "file-cta"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "file-icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "file-label"
  }, label)), filename && /*#__PURE__*/React.createElement("span", {
    className: "file-name"
  }, filename)));
};

InputFile.defaultProps = {
  label: 'Choose a file...',
  inputProps: {}
};
export default InputFile;
//# sourceMappingURL=input-file.js.map