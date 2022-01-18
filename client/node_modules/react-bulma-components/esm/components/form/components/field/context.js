import React, { useContext } from 'react';
export var FieldContext = /*#__PURE__*/React.createContext({
  size: undefined
});

var useFieldContext = function useFieldContext() {
  return useContext(FieldContext);
};

export default useFieldContext;
//# sourceMappingURL=context.js.map