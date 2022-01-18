export var normalizeAlign = function normalizeAlign(align) {
  var map = {
    justify: 'justifyed',
    center: 'centered'
  };
  return map[align] || align;
};
export var normalizeStatus = function normalizeStatus(status) {
  var map = {
    focus: 'focused',
    hover: 'hovered',
    active: 'active'
  };
  return map[status] || status;
};
//# sourceMappingURL=normalizer.js.map