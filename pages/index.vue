<template>
  <div>
    <div v-show="loading"></div>
    <div v-show="!loading" id="ofaloo" class="m-0-auto max-w-x1366">
      <headerhome></headerhome>
      <nuxt-child
        keep-alive
        :keep-alive-props="{ max: 10 }"
        class="lg:px-20 md:px-10 px-4"
      />
      <footers></footers>
    </div>
  </div>
</template>

<script>
import Footers from '~/components/footer/Footers.vue'
import Headerhome from '~/components/header/Headerhome.vue'
export default {
  components: { Footers, Headerhome },
  data() {
    return {
      scroll: false,
      scrollpos: 0,
      opacity: -1,
      width: 9999,
      stillscrolling: false,
    }
  },
  computed: {
    isScrolled() {
      return this.$store.state.scrollpos === true
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
    curoute(nv, ov) {
      this.scrolltop()
      if (nv === '/') {
        this.$router.replace('/ofalooagent/inscription')
      }
    },
  },
  beforeMount() {
    if (!this.curoute.includes('/ofalooagent/infos')) {
      sessionStorage.removeItem('register_email')
      sessionStorage.removeItem('register_infos')
      sessionStorage.removeItem('agence_infos')
      sessionStorage.removeItem('password')
    }
    if (!this.curoute.includes('/ofalooagent/success-compte')) {
      sessionStorage.removeItem('registered')
    }
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
    window.addEventListener('DOMContentLoaded', this.domload, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.large)
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('DOMContentLoaded', this.domload, false)
  },
  mounted() {
    this.large()
    this.handleScroll()
    this.checkDomload()
    this.scrolltop()
    if (this.curoute === '/') {
      this.$router.push('/ofalooagent/inscription')
    }
  },
  methods: {
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
