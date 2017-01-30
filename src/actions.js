export const change = (xid, yid, field, value) => ({
  type: 'CHANGE',
  xid,
  yid,
  field,
  value,
})

export const size = (width, height) => ({
  type: 'SIZE',
  width,
  height,
})

export const scroll = (left, top) => ({
  type: 'SCROLL',
  left,
  top,
})
