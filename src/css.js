export default {
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      margin: 0,
      font: 'normal 13px arial,sans-serif',
      height: '100%',
    },
    '#root': {
      height: '100%',
    },
  },
  box: {
    position: 'relative',
    height: '100%',
  },
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  stat: {
    composes: '$base',
    bottom: 'auto',
    right: 'auto',
    width: 100,
    height: 50,
    border: '1px solid blue',
    backgroundColor: 'yellow',
    padding: 5,
  },
  header: {
    composes: '$base',
    left: 100,
    bottom: 'auto',
    height: 50,
  },
  headerView: {
    composes: '$base',
    right: 'auto',
  },
  headerItem: {
    composes: '$base',
    right: 'auto',
    border: '1px solid blue',
    backgroundColor: 'aliceblue',
    padding: 5,
  },
  side: {
    composes: '$base',
    top: 50,
    right: 'auto',
    width: 100,
  },
  sideView: {
    composes: '$base',
    bottom: 'auto',
  },
  sideItem: {
    composes: '$base',
    bottom: 'auto',
    border: '1px solid blue',
    backgroundColor: 'aliceblue',
    padding: 5,
  },
  cells: {
    composes: '$base',
    top: 50,
    left: 100,
    backgroundColor: 'honeydew',
  },
  cellsView: {
    composes: '$base',
    bottom: 'auto',
    right: 'auto',
    backgroundColor: 'honeydew',
  },
  cell: {
    composes: '$base',
    bottom: 'auto',
    right: 'auto',
    border: '1px solid green',
    backgroundColor: 'honeydew',
    padding: 5,
  },
  scroll: {
    composes: '$base',
    top: 50,
    left: 100,
    background: 'none',
    overflow: 'auto',
  },
  selectedCell: {
    composes: '$cell',
    backgroundColor: 'springgreen',
  },
}
