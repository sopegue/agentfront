const utility = {
  name: 'Utility',
  sleep(milliseconds) {
    const date = Date.now()
    let currentDate = null
    do {
      currentDate = Date.now()
    } while (currentDate - date < milliseconds)
  },
  setheight(val) {
    return 'height: ' + val + 'px'
  },
}

export default ({ app }, inject) => {
  inject('utility', utility)
}
