<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdowne"
      :class="{ 'is-active': focused }"
    >
      <div class="">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center button border rounded clickable w-fit select-none space-x-1"
            @click="
              {
                focused = !focused
              }
            "
          >
            <span class="size-12 logo-color font-semibold block w-fit over">{{
              ctry
            }}</span>
            <svg
              class="w-4 h-4 logo-color relative top-01x"
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
          </div>
        </client-only>
      </div>
      <div
        v-show="focused"
        id="dropdown-menu"
        class="dropdown-menu walele"
        role="menu"
      >
        <div class="dropdown-content bg-white border h292">
          <div class="">
            <div class="overflow-y-auto aside h200">
              <a
                v-for="(element, i) in language"
                :key="i"
                class="dropdown-item clickable flex align-center space-x-1"
                @click="setLang(element)"
              >
                <span
                  class="size-125"
                  :class="{ 'font-semibold': ctry === element }"
                  >{{ element }}</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focused: false,
      searching: '',
      ctry: 'Agence personnelle',
      lan: ['Agence publique', 'Agence privée', 'Agence personnelle'],
    }
  },
  computed: {
    language() {
      return this.lan.filter((x) =>
        x.toLowerCase().includes(this.searching.toLowerCase())
      )
    },
  },
  mounted() {
    this.ctry = this.lan[0]
    this.$emit('type', this.ctry)
  },
  methods: {
    hide() {
      this.focused = false
    },
    setLang(value) {
      this.ctry = value
      this.focused = false
      this.$emit('type', this.ctry)
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 1.7rem !important;
  /*right: -12.1rem !important; */
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
