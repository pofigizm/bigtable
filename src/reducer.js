const HEIGHT = 25
const SIZE = Number(location.search.slice(1)) || 50000

const initial = {
  list: new Array(SIZE)
    .fill({ value: 'txt' })
    .map((e, i) => ({
      value: `txt-${i}`,
      ix: i,
      select: false,
    })),
  height: SIZE * HEIGHT,
  show: 0,
  first: 0,
}

export default (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        list: [
          ...(state.list.slice(0, action.ix)),
          {
            ...state.list[action.ix],
            [action.field]: action.value,
          },
          ...(state.list.slice(action.ix + 1)),
        ],
      }
    case 'HEIGHT':
      return {
        ...state,
        show: Math.ceil(action.size / HEIGHT) * 2,
      }
    case 'SCROLL':
      return {
        ...state,
        first: Math.max(Math.floor(-action.top / HEIGHT) - (state.show / 4), 0),
      }
    default:
      return state
  }
}
