<template>
  <div class="py-30">Déconnexion...</div>
</template>

<script>
export default {
  async beforeMount() {
    if (this.$auth.loggedIn) {
      await this.$auth.logout().then((res) => {
        if (localStorage.hdzd) localStorage.removeItem('hdzd')
        location.assign('/')
      })
    } else location.assign('/')
  },
}
</script>

<style scoped></style>
