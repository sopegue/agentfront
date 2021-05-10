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
            ? setheight(380)
            : size > 580
            ? setheight(340)
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
              Connexion Ofaloo Agent
            </h4>
            <span
              class="block text-white leading-4"
              :class="{
                'size-16': size > 580,
                'size-14': size <= 580,
              }"
              >Connectez-vous et commencez à gérer vos propriétés mises en vente
              et en location.</span
            >
          </div>
        </div>
      </div>
      <login></login>
    </div>
  </div>
</template>

<script>
import Login from '~/components/authentication/Login.vue'
export default {
  components: { Login },
  middleware: 'noauth',
  computed: {
    size() {
      return this.$store.state.size
    },
  },
  beforeMount() {
    if (this.$auth.loggedIn) {
      this.$router.replace('/dashboard')
    }
  },
  methods: {
    setheight(val) {
      return 'height: ' + val + 'px !important'
    },
  },
}
</script>

<style scoped>
.header-home {
  background-image: url('/bg/1.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
}
.bgtr {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
