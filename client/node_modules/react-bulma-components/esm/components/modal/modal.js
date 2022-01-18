function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ModalContent from './components/content';
import ModalCard from './components/card';
import { ModalContext } from './context';
import Element from '../element';
var KEYCODES = {
  ESCAPE: 27
};

var Modal = function Modal(_ref) {
  var domRef = _ref.domRef,
      children = _ref.children,
      className = _ref.className,
      show = _ref.show,
      closeOnBlur = _ref.closeOnBlur,
      showClose = _ref.showClose,
      onClose = _ref.onClose,
      closeOnEsc = _ref.closeOnEsc,
      props = _objectWithoutProperties(_ref, ["domRef", "children", "className", "show", "closeOnBlur", "showClose", "onClose", "closeOnEsc"]);

  var ref = useRef(domRef);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      portalContainer = _useState2[0],
      setPortalContainer = _useState2[1];

  useEffect(function () {
    if (!show) {
      return undefined;
    }

    var doc = props.document || document;
    var container = doc.createElement('div');
    container.setAttribute('class', 'modal-container');
    doc.body.appendChild(container);
    setPortalContainer(container);

    var handleKeydown = function handleKeydown(evt) {
      if (evt.keyCode === KEYCODES.ESCAPE && show) {
        onClose();
      }
    };

    if (closeOnEsc) {
      doc.addEventListener('keydown', handleKeydown);
    }

    return function () {
      doc.removeEventListener('keydown', handleKeydown);
      container.parentNode.removeChild(container);
    };
  }, [show]);

  if (!portalContainer) {
    return null;
  }

  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: {
      onClose: onClose
    }
  }, /*#__PURE__*/React.createElement(Element, {
    domRef: ref,
    className: classnames('modal', className, {
      'is-active': show
    })
  }, /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    className: "modal-background",
    onClick: closeOnBlur ? onClose : undefined
  }), children, showClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "modal-close is-large",
    "aria-label": "close"
  }))), portalContainer);
};

Modal.Content = ModalContent;
Modal.Card = ModalCard;
Modal.defaultProps = {
  closeOnEsc: true,
  showClose: true,
  // Expose mount point for testing
  document: undefined
};
export default Modal;
//# sourceMappingURL=modal.js.map