<template>
  <div class="pb-10">
    <div
      class="flex"
      :class="{ 'space-x-10': size > 850, 'flex-col': size <= 850 }"
    >
      <div
        class="header-home mt-10 rounded relative"
        :style="
          size > 850
            ? 'height: auto'
            : size > 580
            ? setheight(380)
            : setheight(240)
        "
        :class="{
          'w-3/4': size > 850,
          'w-full h-full': size <= 850,
        }"
      >
        <div class="absolute rounded bgtr h-full w-full z-0">
          <div class="sm:px-10 px-4 lg:pt-20 pt-10">
            <h4
              class="text-white font-semibold mb-1"
              :class="{
                'size-48': size > 580,
                'size-32': size <= 580,
              }"
            >
              Devenir un agent sur Ofaloo
            </h4>
            <span
              class="block text-white leading-4"
              :class="{
                'size-16': size > 580,
                'size-14': size <= 580,
              }"
              >Rejoignez-nous et commencez à vendre ou mettre en location une ou
              plusieurs propriétés que vous gérez.</span
            >
          </div>
        </div>
      </div>
      <register></register>
    </div>
  </div>
</template>

<script>
import Register from '~/components/authentication/Register.vue'
export default {
  components: { Register },
  computed: {
    size() {
      return this.$store.state.size
    },
  },
  methods: {
    setheight(val) {
      return 'height: ' + val + 'px'
    },
  },
}
</script>

<style scoped>
.header-home {
  background-image: url('https://ofalooback.herokuapp.com/images/2.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
}
.bgtr {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
