function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FieldLabel from './field-label';
import FieldBody from './field-body';
import Element from '../../../element';
import { normalizeAlign } from '../../../../services/normalizer';
import useFieldContext, { FieldContext } from './context';

var Field = function Field(_ref) {
  var _classnames;

  var className = _ref.className,
      align = _ref.align,
      multiline = _ref.multiline,
      horizontal = _ref.horizontal,
      kind = _ref.kind,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["className", "align", "multiline", "horizontal", "kind", "size"]);

  var context = useFieldContext();
  var k = null;

  if (kind === 'addons') {
    k = 'has-addons';
  } else if (kind === 'group') {
    k = 'is-grouped';
  }

  return /*#__PURE__*/React.createElement(FieldContext.Provider, {
    value: {
      size: size || context.size
    }
  }, /*#__PURE__*/React.createElement(Element, _extends({}, props, {
    className: classnames('field', className, (_classnames = {}, _defineProperty(_classnames, "".concat(k), k), _defineProperty(_classnames, "".concat(k, "-").concat(normalizeAlign(align)), k === 'is-grouped' && align), _defineProperty(_classnames, "".concat(k, "-multiline"), k === 'is-grouped' && multiline), _defineProperty(_classnames, 'is-horizontal', horizontal), _classnames))
  })));
};

Field.Label = FieldLabel;
Field.Body = FieldBody;
Field.defaultProps = {};
export default Field;
//# sourceMappingURL=field.js.map