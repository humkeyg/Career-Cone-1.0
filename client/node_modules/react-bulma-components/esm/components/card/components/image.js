function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classnames from 'classnames';
import Image from '../../image';
import Element from '../../element';

var CardImage = function CardImage(_ref) {
  var className = _ref.className,
      domRef = _ref.domRef,
      props = _objectWithoutProperties(_ref, ["className", "domRef"]);

  return /*#__PURE__*/React.createElement(Element, {
    domRef: domRef,
    className: classnames('card-image', className)
  }, /*#__PURE__*/React.createElement(Image, props));
};

CardImage.defaultProps = {};
export default CardImage;
//# sourceMappingURL=image.js.map