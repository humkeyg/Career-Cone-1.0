function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import useFieldContext from './field/context';
import { normalizeStatus } from '../../../services/normalizer';

var Input = function Input(_ref) {
  var _classnames;

  var className = _ref.className,
      size = _ref.size,
      color = _ref.color,
      readOnly = _ref.readOnly,
      isStatic = _ref.isStatic,
      status = _ref.status,
      rounded = _ref.rounded,
      props = _objectWithoutProperties(_ref, ["className", "size", "color", "readOnly", "isStatic", "status", "rounded"]);

  var context = useFieldContext();
  var calculatedSize = size || context.size;
  return /*#__PURE__*/React.createElement(Element, _extends({}, props, {
    readOnly: readOnly || isStatic,
    className: classnames('input', className, (_classnames = {
      'is-static': isStatic
    }, _defineProperty(_classnames, "is-".concat(normalizeStatus(status)), status), _defineProperty(_classnames, 'is-rounded', rounded), _defineProperty(_classnames, "is-".concat(calculatedSize), calculatedSize), _defineProperty(_classnames, "is-".concat(color), color), _classnames))
  }));
};

Input.defaultProps = {
  renderAs: 'input'
};
export default Input;
//# sourceMappingURL=input.js.map