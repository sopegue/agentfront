<template>
  <div class="py-11">
    <div class="bg-white w-full border rounded py-5 sm:px-8 px-6">
      <h4 class="logo-color size-24 font-semibold mb-1">
        Recours pour bannissement
      </h4>
      <div class="lg:w-3/5 md:w-4/5 w-full mt-3">
        <span
          >Votre recours pour votre bannissement a bien été enregistré, nous
          vous informerons du résultat de votre recours par email dans un délai
          de <span class="font-semibold">5 jours ouvrables minimum.</span></span
        >
      </div>
      <div class="lg:w-3/5 md:w-4/5 w-full mt-3">
        <span>Vous avez déjà un recours en cours de traitement.</span>
      </div>
      <div class="mt-3 mb-5">
        <span class="font-semibold">Toute l'équipe de Ofaloo,</span>
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
  },
}
</script>

<style scoped></style>
