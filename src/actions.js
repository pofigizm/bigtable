export const change = (ix, field, value) => ({
  type: 'CHANGE',
  ix,
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
