<template>
  <div class="py-11">
    <div class="bg-white w-full border rounded py-5 sm:px-8 px-6">
      <h4 class="logo-color size-24 font-semibold mb-1">Félicitations</h4>
      <div class="lg:w-3/5 md:w-4/5 w-full mt-3">
        <span
          >Vos informatons ont été bien enregistrées et sont en cours de
          vérification. Votre demande sera traité dans un délai de
          <span class="font-semibold">5 jours ouvrables.</span> Vous serez
          informé par email du résultat de votre demande pour devenir un agent
          sur Ofaloo.</span
        >
      </div>
      <div class="mt-3 mb-5">
        <span class="font-semibold">Toute l'équipe de Ofaloo,</span>
      </div>
      <div class="w-fit m-0-auto pt-3 pb-5">
        <div
          class="flex align-center text-center space-x-2 size-13 mt-5"
          :class="{
            'flex-col': size <= 540,
          }"
        >
          <nuxt-link
            to="/ofalooagent/connexion"
            class="color-008489 underline-hover"
            >Se connecter</nuxt-link
          >
          <span>|</span>
          <nuxt-link
            to="/ofalooagent/inscription"
            class="color-008489 underline-hover"
            >Créer un compte</nuxt-link
          >
          <span>|</span>
          <nuxt-link
            to="/ofalooagent/guide"
            class="color-008489 underline-hover"
            >Guide d'utilisations</nuxt-link
          >
        </div>
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
  beforeMount() {
    if (!sessionStorage.registered) {
      location.replace('/ofalooagent/inscription')
    }
  },
}
</script>

<style scoped></style>
