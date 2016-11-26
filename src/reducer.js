const initial = {
  list: new Array(5000).fill({ value: 'txt' }),
}

export default (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        list: [
          ...(state.list.slice(0, action.ix)),
          { value: action.value },
          ...(state.list.slice(action.ix + 1)),
        ],
      }
    default:
      return state
  }
}
