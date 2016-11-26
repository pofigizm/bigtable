export const change = (ix, field, value) => ({
  type: 'CHANGE',
  ix,
  field,
  value,
})

export const height = size => ({
  type: 'HEIGHT',
  size,
})

export const scroll = top => ({
  type: 'SCROLL',
  top,
})
