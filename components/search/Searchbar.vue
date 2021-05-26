<template>
  <div
    class="bg-white border h-9 flex align-center rounded relative"
    :class="{
      border: color !== 'text-white',
    }"
  >
    <div>
      <div
        v-click-outside="hide"
        class="dropdown border-r"
        :class="{ 'is-active': focused }"
      >
        <div class="dropdown-trigger">
          <client-only>
            <div
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              class="flex align-center space-x-1 h-full bg-transparent clickable select-none px-2"
              :class="{
                'border-r': color !== 'text-white',
                'border-none': color === 'text-white',
              }"
              @click="
                {
                  focused = !focused
                }
              "
            >
              <p class="flex align-center">
                <span class="size-13 font-semibold block w-fit logo-color">{{
                  currency
                }}</span>
                <svg
                  class="w-4 h-4 relative top-03x ml-px logo-color transform"
                  :class="{ 'rotate-180 trans-x300': focused }"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>
          </client-only>
        </div>
        <div
          id="dropdown-menu"
          class="dropdown-menu walele"
          role="menu"
          :class="{
            '-mt-2': color !== 'text-white',
          }"
        >
          <div class="dropdown-content bg-white border">
            <a
              v-for="(element, i) in currencies"
              :key="i"
              class="dropdown-item clickable flex align-center space-x-1"
              @click="setcur(element)"
            >
              <span
                class="size-125"
                :class="{ 'font-semibold': currency === element }"
                >{{ element }}</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      v-click-outside="hidesearch"
      class="relative w-min-48 w-max-74 flex align-center mr-10"
      @submit.prevent="searchingme"
    >
      <div
        v-show="inputfocused && (searches.length > 0 || saved.length > 0)"
        class="rounded-bl border rounded-br bg-white shadow-xs w-full absolute z-12 top-0 mt-7.2 -ml-0.8 pb-1"
      >
        <client-only>
          <div
            v-show="
              searches !== null && searches !== undefined && searches.length > 0
            "
            class="max-h-40 pt-2 w-full overflow-y-auto"
            :class="{ 'border-b mb-1.5': saved.length > 0 }"
          >
            <div class="flex flex-col pb-2">
              <div
                v-for="(res, i) in searches"
                :key="i"
                class="flex px-3 py-1 clickable hover:bg-gray-100"
                @click="setSearch(res.adresse, res.ville)"
              >
                <svg
                  class="w-5 h-5 min-w-5 min-h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <a
                  :title="res.adresse + ', ' + res.ville"
                  class="search-res ml-1 lowercase color-363636 oneline"
                  >{{ res.adresse }}, {{ res.ville }}</a
                >
              </div>
            </div>
          </div>
        </client-only>
        <client-only>
          <div
            v-show="saved.length > 0"
            class="max-h-35 flex flex-col space-y-1.5 mx-4 overflow-y-auto pb-1.5"
          >
            <div
              class="flex align-center space-x-3"
              :class="{ 'pt-2': searches.length <= 0 }"
            >
              <h4 class="size-14 font-semibold logo-color">
                Recherches récentes
              </h4>
              <a class="delete mt-1" @click="deleteSearch"></a>
            </div>
            <div class="flex flex-wrap">
              <a
                v-for="(ss, j) in saved"
                :key="j"
                class="flex align-center space-x-2 button py-0 is-light rounded-full w-fit m-1.5"
                @click="gose(ss)"
              >
                <span class="py-0.5 pl-1 size-13 font-semibold">{{ ss }}</span>
                <svg
                  class="w-4 h-4 color-363636"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </client-only>
      </div>
      <input
        id="byuyc"
        v-model="search"
        autocomplete="none"
        class="w-full h-full outline-none pl-2 pr-9 size-15 bg-white rounded-tl rounded-bl"
        :class="{
          'ml-2': color !== 'text-white',
        }"
        type="search"
        :placeholder="'Rechercher une propriété par adresse, ville...'"
        @focus="
          {
            inputfocused = true
          }
        "
      />
      <a
        v-show="search !== ''"
        class="absolute right-0 delete mr-2"
        @click="
          {
            search = ''
          }
        "
      ></a>
    </div>
    <button
      class="h-full btn-008489 absolute h-9 right-0 px-3 rounded-tr rounded-br text-white size-13 font-semibold"
      @click="searching"
    >
      <svg
        class="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'text-white',
    },
  },
  data() {
    return {
      inputfocused: false,
      focused: false,
      currency: '',
      currencies: ['Toutes', 'Ventes', 'Locations'],
      history: {
        searches: [],
      },
      timestamp: 0,
      toSearch: '',
      results: [],
      what: '',
      search: '',
    }
  },
  computed: {
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
    saved() {
      return this.history !== null &&
        this.history !== undefined &&
        this.history.searches !== undefined &&
        this.history.searches !== undefined &&
        this.history.searches.length > 0
        ? this.history.searches
        : []
    },
    searches() {
      return this.results !== null &&
        this.results !== undefined &&
        this.results.length > 0
        ? this.results.slice(0, 10)
        : []
    },
    loading() {
      return this.$store.state.domloading === true
    },
  },
  watch: {
    search(nv, ov) {
      if (nv !== '') {
        if (this.timestamp === 0 || Date.now() - this.timestamp > 200) {
          this.timestamp = Date.now()
          this.callme()
        }
      }
    },
  },
  mounted() {
    this.currency = this.currencies[0]
    this.autoff()
    this.checkSearch()
  },
  methods: {
    hidesearch() {
      this.inputfocused = false
    },
    async checkSearch() {
      if (localStorage.history) {
        this.history = await JSON.parse(localStorage.getItem('history'))
      }
    },
    callme() {
      this.pendingmail()
        .then((res) => {
          this.results = res.adresse
          const text = document.querySelectorAll('.search-res')
          const ss = this.search
          if (this.searches.length > 0) {
            setTimeout(() => {
              for (let index = 0; index < text.length; index++) {
                const result = text[index]
                if (this.searches[index] !== undefined) {
                  this.searches[index].adresse = this.searches[
                    index
                  ].adresse.toLowerCase()
                  this.searches[index].ville = this.searches[
                    index
                  ].ville.toLowerCase()
                  result.innerHTML = `${this.searches[index].adresse}, ${this.searches[index].ville}`
                }
                const html = result.innerHTML
                const newText = html.replace(
                  ss.toLowerCase(),
                  `<strong>${ss}</strong>`
                )
                result.innerHTML = newText
              }
            }, 100)
          }
        })
        .catch(() => {
          console.error('Oops, maybe an undefined property for this error')
        })
    },
    deleteSearch() {
      if (localStorage.history) localStorage.removeItem('history')
      this.history.searches = []
      localStorage.setItem('history', JSON.stringify(this.history))
    },
    async setSearch(val1, val2) {
      this.search = val1 + ', ' + val2
      if (localStorage.history) {
        this.history = await JSON.parse(localStorage.getItem('history'))
      }
      if (!this.history.searches.includes(this.search))
        this.history.searches.unshift(this.search)
      this.history.searches = this.history.searches.slice(0, 10)
      if (localStorage.history) localStorage.removeItem('history')
      localStorage.setItem('history', JSON.stringify(this.history))
      this.searching()
    },
    async searchingme() {
      if (this.search !== '') {
        if (localStorage.history) {
          this.history = await JSON.parse(localStorage.getItem('history'))
        }
        if (!this.history.searches.includes(this.search))
          this.history.searches.unshift(this.search)
        this.history.searches = this.history.searches.slice(0, 10)
        if (localStorage.history) localStorage.removeItem('history')
        localStorage.setItem('history', JSON.stringify(this.history))
      }
      this.searching()
    },
    async pendingmail() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$get(
            'https://ofalooback.herokuapp.com/api/properties/search/' +
              this.search
          )
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise searching")
      })
    },
    gose(val) {
      this.search = val
      this.searching()
    },
    searching() {
      this.inputfocused = false
    },
    autoff() {
      const myel = document.getElementById('byuyc')
      myel.setAttribute('autocomplete', 'none')
    },
    hide() {
      this.focused = false
    },
    setcur(cur) {
      this.currency = cur
      this.hide()
    },
  },
}
</script>

<style scoped>
.walele {
  animation: appear 0.2s;
  top: 1.3rem !important;
  left: 0 !important;
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
