export function throttle(func, ms) {
  let wait
  let lastThis
  let lastArgs
  return function wrapper(...args) {
    if (wait) {
      lastThis = this
      lastArgs = args
      return
    }

    wait = true
    setTimeout(() => {
      wait = false
      if (lastArgs) {
        wrapper.call(lastThis, ...lastArgs)
        lastThis = null
        lastArgs = null
      }
    }, ms)
    func.call(this, ...args)
  }
}
