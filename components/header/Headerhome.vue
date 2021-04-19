<template>
  <div
    class="relative bg-white w-full border-b"
    :style="size > 476 ? setheight(70) : setheight(80)"
  >
    <div
      class="flex lg:px-20 md:px-10 px-4 align-center justify-between vertical-center"
    >
      <a href="/" :class="{ flex: size > 409, 'flex flex-col': size <= 409 }">
        <h4
          class="logo-color font-semibold"
          :class="{
            'size-32': size > 767,
            'size-28': size <= 767,
            'mb-1': size > 409,
            'size-24 text-center': size <= 409,
          }"
        >
          Ofaloo
        </h4>
        <h4
          class="size-18 color-008489 font-semibold mb-2"
          :class="{
            'size-18': size > 767,
            'size-14': size <= 767,
            'text-center': size <= 409,
          }"
        >
          Agentcenter
        </h4>
      </a>
      <div class="sm:px-10 px-4 flex flex-col justify-center">
        <h4 class="logo-color size-14 font-semibold text-c">Besoin d'aide ?</h4>
        <h4 class="logo-color size-13 mb-1 text-c">
          Appelez-nous au +225 08 88 71 73
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    size() {
      return this.$store.state.size
    },
    minsearch() {
      return this.$store.state.minsearch === true
    },
  },
  methods: {
    setheight(val) {
      return 'height: ' + val + 'px'
    },
    hideminsearch() {
      this.$store.commit('set_MinSearch', false)
    },
  },
}
</script>
<style scoped></style>
