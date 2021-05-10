<template>
  <div>
    <div v-show="loading"></div>
    <div v-show="!loading" id="ofaloo" class="m-0-auto h-full max-w-x1366s">
      <div class="w-full flex">
        <div
          :class="{
            drawerh: modaled,
            draweros: !modaled,
          }"
          class="bg-gray-800 drawer h-full fixed w180mins z-10000"
        >
          <div class="w-full h-15 border-b b-rg">
            <div class="m-0-auto w-fit vertical-center">
              <a
                href="/dashboard"
                :class="{ flex: size > 409, 'flex flex-col': size <= 409 }"
              >
                <h4
                  class="text-white font-semibold"
                  :class="{
                    'size-26': size > 767,
                    'size-24': size <= 767,
                    'mb-1': size > 409,
                    'size-24 text-center': size <= 409,
                  }"
                >
                  Ofaloo
                </h4>
                <h4
                  class="size-18 text-white font-semibold mb-2"
                  :class="{
                    'size-16': size > 767,
                    'size-14': size <= 767,
                    'text-center': size <= 409,
                  }"
                >
                  Agent
                </h4>
              </a>
            </div>
          </div>
          <div class="flex flex-col mt-5 h-x485 relative overflow-y-auto aside">
            <nuxt-link
              to="/dashboard"
              :class="{
                'focuss ': curoute === '/dashboard',
              }"
              class="dropdown-itemww flex align-center space-x-2.5 px-6"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z"
                  fill="#fff"
                /></svg
              ><span class="text-white">Accueil</span></nuxt-link
            >
            <nuxt-link
              to="/dashboard/proprietes"
              :class="{
                'focuss ': curoute.includes('/dashboard/proprietes'),
              }"
              class="dropdown-itemww clickable text-white flex align-center space-x-2.5 px-6"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4V16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H13C12.4477 18 12 17.5523 12 17V15C12 14.4477 11.5523 14 11 14H9C8.44772 14 8 14.4477 8 15V17C8 17.5523 7.55228 18 7 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16V4ZM7 5H9V7H7V5ZM9 9H7V11H9V9ZM11 5H13V7H11V5ZM13 9H11V11H13V9Z"
                  fill="#fff"
                />
              </svg>
              <span class="text-white">Mes propriétés</span></nuxt-link
            >
            <nuxt-link
              to="/dashboard/statistiques"
              :class="{
                'focuss ': curoute === '/dashboard/statistiques',
              }"
              class="dropdown-itemww clickable text-white flex align-center space-x-2.5 px-6"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5V13C3 14.1046 3.89543 15 5 15H7.58579L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L10 15.4142L12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071C14.0976 17.3166 14.0976 16.6834 13.7071 16.2929L12.4142 15H15C16.1046 15 17 14.1046 17 13V5C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H3ZM14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7V11C12 11.5523 12.4477 12 13 12C13.5523 12 14 11.5523 14 11V7ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V8ZM8 9C8 8.44772 7.55228 8 7 8C6.44772 8 6 8.44772 6 9V11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11V9Z"
                  fill="#fff"
                /></svg
              ><span class="text-white">Statistiques</span></nuxt-link
            >
            <div class="flex flex-col mt-5">
              <nuxt-link
                to="/dashboard/notifications"
                :class="{
                  'focuss ': curoute.includes('/dashboard/notifications'),
                }"
                class="dropdown-itemww flex align-center space-x-2.5 px-6"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
                    fill="#fff"
                  />
                  <path
                    d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z"
                    fill="#fff"
                  />
                </svg>
                <span class="text-white">Notifications</span></nuxt-link
              >
              <nuxt-link
                to="/dashboard/user"
                :class="{
                  'focuss ': curoute.includes('/dashboard/user'),
                }"
                class="dropdown-itemww flex align-center space-x-2.5 px-6"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9ZM3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z"
                    fill="#fff"
                  />
                </svg>
                <span class="text-white">Mon compte</span></nuxt-link
              >
              <!-- <nuxt-link
                to="/dashboard/inbox"
                :class="{
                  'focuss ': curoute.includes('/dashboard/inbox'),
                }"
                class="dropdown-itemww flex align-center space-x-2.5 px-6"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5C2 3.89543 2.89543 3 4 3H11C12.1046 3 13 3.89543 13 5V9C13 10.1046 12.1046 11 11 11H9L6 14V11H4C2.89543 11 2 10.1046 2 9V5Z"
                    fill="#fff"
                  />
                  <path
                    d="M15 7V9C15 11.2091 13.2091 13 11 13H9.82843L8.06173 14.7667C8.34154 14.9156 8.66091 15 9 15H11L14 18V15H16C17.1046 15 18 14.1046 18 13V9C18 7.89543 17.1046 7 16 7H15Z"
                    fill="#fff"
                  />
                </svg>
                <span class="text-white">Messages</span></nuxt-link
              > -->
            </div>
          </div>
        </div>
        <div
          id="blanc"
          class="w-full h-full border-l border-r border-white"
          :class="{
            'go-x240': modaled,
            fixed: curoute === '/dashboard/inbox',
            'w-min-186 overflow-x-auto':
              size < 740 && curoute === '/dashboard/inbox',
          }"
        >
          <div
            class="w-full h-15 sticky top-0 bg-white border-b z-40 pl-2 pr-4 pt-1.5"
            :class="{
              'w-min-186': size < 740 && curoute === '/dashboard/inbox',
            }"
          >
            <div class="vertical-center flex align-center space-x-3 h-fit">
              <div v-if="size < 1400">
                <button
                  v-if="!modaled"
                  class="p-2 button p-3 hover:shadow border-none h-auto w-auto rounded-full h-fit w-fit p-1 no-outlines outline-none"
                  @click="openmodal"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H12M4 18H20"
                      stroke="#2d3748"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  v-if="modaled"
                  class="p-2 button p-3 hover:shadow border-none h-auto w-auto rounded-full h-fit w-fit p-1 no-outlines outline-none"
                  @click="hide"
                >
                  <svg
                    class="transform rotate-180"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H12M4 18H20"
                      stroke="#2d3748"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex align-center justify-between w-full">
                <span class="text-white"></span>
                <div class="flex align-center space-x-10">
                  <div class="flex align-center space-x-6">
                    <!-- <nuxt-link
                      to="/dashboard/inbox"
                      class="text-white relative size-12 rounded font-semibold rounded-full p-2 hover:shadow"
                    >
                      <button
                        class="p-2 button scale absolute h-8 w-8 font-semibold bg-red-500w text-white rounded-full border-white top-0 right-0 -mr-2.5 -mt-1.5"
                      >
                        <span class="text-white size-12 -mt-0.6 block"
                          >99+</span
                        ></button
                      ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5C2 3.89543 2.89543 3 4 3H11C12.1046 3 13 3.89543 13 5V9C13 10.1046 12.1046 11 11 11H9L6 14V11H4C2.89543 11 2 10.1046 2 9V5Z"
                          fill="#2d3748"
                        />
                        <path
                          d="M15 7V9C15 11.2091 13.2091 13 11 13H9.82843L8.06173 14.7667C8.34154 14.9156 8.66091 15 9 15H11L14 18V15H16C17.1046 15 18 14.1046 18 13V9C18 7.89543 17.1046 7 16 7H15Z"
                          fill="#2d3748"
                        />
                      </svg>
                    </nuxt-link> -->
                    <nuxt-link
                      to="/dashboard/notifications"
                      class="text-white relative size-12 rounded font-semibold rounded-full p-2 hover:shadow"
                    >
                      <button
                        class="p-2 button scale absolute h-8 w-8 font-semibold bg-red-500w text-white rounded-full border-white top-0 right-0 -mr-2.5 -mt-1.5"
                      >
                        <span class="text-white size-12 -mt-0.6 block"
                          >5</span
                        ></button
                      ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
                          fill="#2d3748"
                        />
                        <path
                          d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z"
                          fill="#2d3748"
                        />
                      </svg>
                    </nuxt-link>
                  </div>
                  <div>
                    <signdrop></signdrop>
                  </div>
                </div>
              </div>
              <div
                v-show="false"
                class="fixed w-fit top-0 -right-5 mt-13.5 appearxhz z-10"
              >
                <span
                  class="block text-c bg-red-500 py-3 px-10 text-white font-semibold size-12"
                  >Oops désolé, il y a eu une erreur!</span
                >
              </div>
            </div>
          </div>
          <div
            class="flex flex-col"
            :class="{
              'fixed w-full h-full': curoute === '/dashboard/inbox',
            }"
          >
            <nuxt-child
              keep-alive
              :keep-alive-props="{ max: 10 }"
              class="px-4 py-5 w-full h-full"
            />
          </div>
          <footers v-if="curoute !== '/dashboard/inbox'"></footers>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Signdrop from '~/components/dropdown/Signdrop.vue'
import Footers from '~/components/footer/Footers.vue'
export default {
  components: { Signdrop, Footers },
  middleware: 'auth',
  data() {
    return {
      scroll: false,
      prop: true,
      stat: true,
      scrollpos: 0,
      opacity: -1,
      width: 9999,
      once: false,
      stillscrolling: false,
      menu: true,
    }
  },
  computed: {
    isScrolled() {
      return this.$store.state.scrollpos === true
    },
    modaled() {
      return this.menu === true
    },
    curoute() {
      return this.$route.path
    },
    loading() {
      return this.$store.state.domloading === true
    },
    size() {
      return this.$store.state.size
    },
  },
  watch: {
    curoute() {
      this.scrolltop()
    },
    modaled(nv, ov) {
      if (!nv && this.size < 768) document.body.style.overflowX = 'visible'
      this.$store.commit('DASH_MODALED', nv)
    },
    size(nv, ov) {
      if (this.modaled && nv >= 1400) {
        this.setblanc(1160)
      }
      if (this.modaled && nv <= 1024) {
        this.setblanc(827)
      }
      if (this.modaled && nv > 1024 && nv < 1400) {
        this.setblanc(this.size - 257)
      }
      if (!this.modaled) {
        this.setblanc(5000)
      }
      if (nv < 1024) this.menu = false
      else if (nv > 1024) this.menu = true
      if (!this.modaled && this.size < 768)
        document.body.style.overflowX = 'visible'
      if (this.size < 740 && this.curoute === '/dashboard/inbox')
        document.body.style.overflowX = 'visible'
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
    window.addEventListener('DOMContentLoaded', this.domload, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.large)
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('DOMContentLoaded', this.domload, false)
  },
  updated() {
    if (!this.modaled && this.size < 768)
      document.body.style.overflowX = 'visible'
    if (this.modaled && this.size >= 1400) {
      this.setblanc(1160)
    }
    if (this.modaled && this.size <= 940) {
      this.setblanc(827)
    }
    if (this.modaled && this.size > 940 && this.size < 1400) {
      this.setblanc(this.size - 257)
    }
    if (!this.modaled) {
      this.setblanc(5000)
    }
  },
  mounted() {
    if (!this.modaled && this.size < 768)
      document.body.style.overflowX = 'visible'
    if (this.modaled && this.size >= 1400) {
      this.setblanc(1160)
    }
    if (this.modaled && this.size <= 940) {
      this.setblanc(827)
    }
    if (this.modaled && this.size > 940 && this.size < 1400) {
      this.setblanc(this.size - 257)
    }
    if (!this.modaled) {
      this.setblanc(5000)
    }
    this.large()
    this.handleScroll()
    this.checkDomload()
    this.scrolltop()
    if (!this.modaled && this.size < 768)
      document.body.style.overflowX = 'visible'
  },
  methods: {
    setblanc(val) {
      if (this.modaled && this.once) {
        setTimeout(() => {
          const myel = document.getElementById('blanc')
          if (val === 827) {
            myel.style = 'min-width: ' + val + 'px !important;'
            document.body.style.overflowX = 'visible'
          } else if (val > 1400) {
            myel.style =
              'min-width: auto !important; max-width: auto !important; width: 100% !important'
            if (this.size > 768 && this.curoute !== '/dashboard/inbox')
              document.body.style.overflowX = 'hidden'
          } else {
            myel.style = 'max-width: ' + val.toString() + 'px !important'
            if (this.size > 768 && this.curoute !== '/dashboard/inbox')
              document.body.style.overflowX = 'hidden'
          }
          this.once = false
        }, 325)
      } else {
        const myel = document.getElementById('blanc')
        if (val === 827) {
          myel.style = 'min-width: ' + val + 'px !important;'
          document.body.style.overflowX = 'visible'
        } else if (val > 1400) {
          myel.style =
            'min-width: auto !important; max-width: auto !important; width: 100% !important'
          if (this.size > 768 && this.curoute !== '/dashboard/inbox')
            document.body.style.overflowX = 'hidden'
        } else {
          myel.style = 'max-width: ' + val.toString() + 'px !important'
          if (this.size > 768 && this.curoute !== '/dashboard/inbox')
            document.body.style.overflowX = 'hidden'
        }
      }
    },
    hide() {
      this.menu = false
      this.once = true
      if (this.modaled && this.size >= 1400) {
        this.setblanc(1160)
      }
      if (this.modaled && this.size <= 940) {
        this.setblanc(827)
      }
      if (this.modaled && this.size > 940 && this.size < 1400) {
        this.setblanc(this.size - 257)
      }
      if (!this.modaled) {
        this.setblanc(5000)
        // console.log('hi')
        document.body.style.overflowX = 'visible'
      }
    },
    scrolltop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    checkDomload() {
      if (document.readyState !== 'loading') {
        this.domload()
      } else {
        window.addEventListener('DOMContentLoaded', this.domload, false)
      }
    },
    openmodal() {
      this.menu = true
      if (this.modaled && this.size >= 1400) {
        this.setblanc(1160)
      }
      if (this.modaled && this.size <= 940) {
        this.setblanc(827)
      }
      if (this.modaled && this.size > 940 && this.size < 1400) {
        this.setblanc(this.size - 257)
      }
      if (!this.modaled) {
        this.setblanc(5000)
      }
    },
    large() {
      this.width = window.innerWidth
      this.$store.commit('set_Size', window.innerWidth)
    },
    domload() {
      this.$store.commit('set_Domload', false)
    },
    handleScroll() {
      if (window.scrollY > 0) {
        if (!this.stillscrolling) {
          this.scroll = true
          this.$store.commit('set_HasScrolled', true)
          this.stillscrolling = true
        }
      } else {
        this.scroll = false
        this.$store.commit('set_HasScrolled', false)
        this.stillscrolling = false
      }
      this.scrollpos =
        Math.abs(window.scrollY) ||
        Math.abs(window.scrollTop) ||
        Math.abs(document.getElementsByTagName('html')[0].scrollTop)
      this.$store.commit('set_Scroll', this.scrollpos)
    },
  },
}
</script>
<style scoped></style>
