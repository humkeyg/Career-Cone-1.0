function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../../button';
import Element from '../../../element';
import useModalContext from '../../context';

var ModalCardHead = function ModalCardHead(_ref) {
  var children = _ref.children,
      className = _ref.className,
      showClose = _ref.showClose,
      props = _objectWithoutProperties(_ref, ["children", "className", "showClose"]);

  var _useModalContext = useModalContext(),
      onClose = _useModalContext.onClose;

  return /*#__PURE__*/React.createElement(Element, _extends({}, props, {
    className: classnames('modal-card-head', className)
  }), children, showClose && /*#__PURE__*/React.createElement(Button, {
    remove: true,
    onClick: onClose
  }));
};

ModalCardHead.defaultProps = {
  showClose: true,
  renderAs: 'header'
};
export default ModalCardHead;
//# sourceMappingURL=header.js.map