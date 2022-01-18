function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { normalizeAlign } from '../../services/normalizer';
import Element from '../element';

var getFirstPage = function getFirstPage(current, last, delta) {
  if (current === 1) {
    return 1;
  }

  var minPage = last - delta * 2;
  var page = Math.min(current - delta, minPage);
  return page <= 0 ? 1 : page;
};

var getLastPage = function getLastPage(current, total, delta) {
  if (current === total) {
    return total;
  }

  var maxPage = delta * 2 + 1;
  var page = Math.max(current + delta, maxPage);
  return page > total ? total : page;
};

var Pagination = function Pagination(_ref) {
  var _classnames;

  var current = _ref.current,
      disabled = _ref.disabled,
      total = _ref.total,
      next = _ref.next,
      previous = _ref.previous,
      showPrevNext = _ref.showPrevNext,
      showFirstLast = _ref.showFirstLast,
      delta = _ref.delta,
      autoHide = _ref.autoHide,
      className = _ref.className,
      size = _ref.size,
      align = _ref.align,
      rounded = _ref.rounded,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["current", "disabled", "total", "next", "previous", "showPrevNext", "showFirstLast", "delta", "autoHide", "className", "size", "align", "rounded", "onChange"]);

  if (total <= 1 && autoHide || current > total) {
    return null;
  }

  var lastPage = getLastPage(current, total, delta);
  var firstPage = getFirstPage(current, lastPage, delta);
  var prevDisabled = current === 1 || disabled;
  var nextDisabled = current === total || disabled;
  return /*#__PURE__*/React.createElement(Element, _extends({}, props, {
    className: classnames('pagination', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat(normalizeAlign(align)), align), _defineProperty(_classnames, 'is-rounded', rounded), _classnames)),
    "aria-label": "pagination"
  }), showPrevNext && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: prevDisabled ? undefined : function () {
      return onChange(current - 1);
    },
    className: "pagination-previous",
    title: "This is the first page",
    disabled: prevDisabled
  }, previous), /*#__PURE__*/React.createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: nextDisabled ? undefined : function () {
      return onChange(current + 1);
    },
    className: "pagination-next",
    disabled: nextDisabled
  }, next)), delta > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "pagination-list"
  }, showFirstLast && current !== 1 && firstPage !== 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    key: 1
  }, /*#__PURE__*/React.createElement("a", {
    role: "button",
    tabIndex: 0,
    className: "pagination-link",
    onClick: function onClick() {
      return onChange(1);
    },
    "aria-label": "Page 1",
    "aria-current": "page",
    disabled: disabled
  }, "1")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "pagination-ellipsis"
  }, "\u2026"))), Array(lastPage - firstPage + 1).fill(0).map(function (_, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("li", {
        key: i + firstPage
      }, /*#__PURE__*/React.createElement("a", {
        role: "button",
        tabIndex: 0,
        className: classnames('pagination-link', {
          'is-current': current === i + firstPage
        }),
        onClick: current === firstPage + i ? undefined : function () {
          return onChange(firstPage + i);
        },
        "aria-label": "Page ".concat(i + firstPage),
        "aria-current": "page",
        disabled: disabled
      }, i + firstPage))
    );
  }), showFirstLast && current !== lastPage && total !== lastPage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    key: total
  }, /*#__PURE__*/React.createElement("span", {
    className: "pagination-ellipsis"
  }, "\u2026")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    role: "button",
    tabIndex: 0,
    className: "pagination-link",
    onClick: function onClick() {
      return onChange(total);
    },
    "aria-label": "Page ".concat(total),
    "aria-current": "page",
    disabled: disabled
  }, total))))));
};

Pagination.defaultProps = {
  total: 1,
  current: 1,
  delta: 1,
  next: 'Next',
  previous: 'Previous',
  renderAs: 'nav',
  showPrevNext: true,
  autoHide: true
};
export default Pagination;
//# sourceMappingURL=pagination.js.map