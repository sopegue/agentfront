<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  computed: {
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>
