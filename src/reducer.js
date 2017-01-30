const WIDTH = 75
const HEIGHT = 25
const SIZE = Number(location.search.slice(1)) || 500

const rnd = v => Math.floor(Math.random() * v)

const gen = (size, s, tl, wh) => {
  let acc = 0
  return Array(size)
    .fill(0)
    .map((_, i) => {
      const cs = s + rnd(s)
      acc += cs
      return {
        id: i,
        value: i,
        style: {
          [tl]: acc - cs,
          [wh]: cs,
        },
      }
    })
}

console.time('allocate_data')

const cols = gen(SIZE, WIDTH, 'left', 'width')
const rows = gen(SIZE, HEIGHT, 'top', 'height')

const initial = {
  cols,
  rows,
  cells: cols
    .map(c => ({
      xid: c.id,
      rows: rows
        .map(r => ({
          yid: r.id,
          value: `${c.id} - ${r.id}`,
          selected: false,
        })),
    })),
  showCols: {
    style: {
      width: cols[cols.length - 1].style.left + cols[cols.length - 1].style.width,
      left: 0,
    },
    width: 0,
    first: 0,
    last: 0,
  },
  showRows: {
    style: {
      height: rows[rows.length - 1].style.top + rows[rows.length - 1].style.height,
      top: 0,
    },
    height: 0,
    first: 0,
    last: 0,
  },
}
console.timeEnd('allocate_data')
console.time('other')

export default (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE':
      // TODO change to immutability helper
      return {
        ...state,
        cells: [
          ...(state.cells.slice(0, action.xid)),
          {
            ...state.cells[action.xid],
            rows: [
              ...(state.cells[action.xid].rows.slice(0, action.yid)),
              {
                ...state.cells[action.xid].rows[action.yid],
                [action.field]: action.value,
              },
              ...(state.cells[action.xid].rows.slice(action.yid + 1)),
            ],
          },
          ...(state.cells.slice(action.xid + 1)),
        ],
      }
    case 'SIZE':
      return {
        ...state,
        showCols: {
          ...state.showCols,
          width: action.width,
          last: state.cols.findIndex(el =>
            el.style.left + el.style.width >= state.showCols.style.left + action.width
          ) + 1,
        },
        showRows: {
          ...state.showRows,
          height: action.height,
          last: state.rows.findIndex(el =>
            el.style.top + el.style.height >= state.showRows.style.top + action.height
          ) + 1,
        },
      }
    case 'SCROLL':
      return {
        ...state,
        showCols: {
          ...state.showCols,
          style: {
            ...state.showCols.style,
            left: -action.left,
          },
          first: state.cols.findIndex(el =>
            el.style.left + el.style.width > action.left
          ),
          last: state.cols.findIndex(el =>
            el.style.left + el.style.width >= action.left + state.showCols.width
          ) + 1,
        },
        showRows: {
          ...state.showRows,
          style: {
            ...state.showRows.style,
            top: -action.top,
          },
          first: state.rows.findIndex(el =>
            el.style.top + el.style.height > action.top
          ),
          last: state.rows.findIndex(el =>
            el.style.top + el.style.height >= action.top + state.showRows.height
          ) + 1,
        },
      }
    default:
      return state
  }
}
