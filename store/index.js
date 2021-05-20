export const state = () => ({
  // Status
  items: ['Renting', 'For Sale'],
  currentSearch: 'For Sale',
  scrollpos: 1500,
  size: 9999,
  dash_mod: true,
  minsearch: false,
  domloading: true,
  hasscrolled: false,
  green: false,
  red: false,
  message: '',
})

export const mutations = {
  // User info
  setRorS(state, value) {
    state.currentSearch = value
  },
  set_HasScrolled(state, value) {
    state.hasscrolled = value
  },
  set_Scroll(state, value) {
    state.scrollpos = value
  },
  set_Domload(state, value) {
    state.domloading = value
  },
  set_Size(state, value) {
    state.size = value
  },
  set_red(state, value) {
    state.red = value
  },
  set_green(state, value) {
    state.green = value
  },
  set_message(state, value) {
    state.message = value
  },
  set_MinSearch(state, value) {
    state.minsearch = value
  },
  DASH_MODALED(state, value) {
    state.dash_mod = value
  },
}
