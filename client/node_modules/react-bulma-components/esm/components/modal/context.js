import React, { useContext } from 'react';
export var ModalContext = /*#__PURE__*/React.createContext({
  onClose: function onClose() {}
});

var useModalContext = function useModalContext() {
  return useContext(ModalContext);
};

export default useModalContext;
//# sourceMappingURL=context.js.map