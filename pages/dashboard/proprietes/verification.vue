<template>
  <div class="py-14 px-4">
    <div class="bg-white w-full border rounded py-5 sm:px-8 px-6">
      <h4 class="logo-color size-22 font-semibold mb-1">
        Compte en cours de vérification...
      </h4>
      <div class="lg:w-3/5 md:w-4/5 w-full mt-3">
        <span
          >Votre compte est en cours de vérification, vous serez informé(e) par
          email du statut de votre demande pour devenir un agent sur Ofaloo dans
          un délai de <span class="font-semibold">5 jours ouvrables</span> à
          compter de l'ouverture de votre compte. <br />
          Une fois votre compte approuvé, vous pourrez ajouter, vendre et mettre
          en location des propriétés que vous gérez.</span
        >
      </div>
      <div class="lg:w-3/5 md:w-4/5 w-full mt-3">
        <span>Votre compte a déjà été approuvé ?</span>
        <a class="clickable color-008489 underline-hover" @click="reload()"
          >Recharger la page</a
        >
      </div>
      <div class="lg:w-3/5 md:w-4/5 w-full mt-3">
        <span
          >Vous ne pouvez toujours pas ajouter des propriétés alors que vous
          avez été approuvé ?</span
        >
        <nuxt-link
          to="/ofalooagent/contactez-nous"
          class="clickable color-008489 underline-hover"
          >Contacter nous</nuxt-link
        ><span> pour nous permettre de vous aider.</span>
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
  methods: {
    reload() {
      location.reload()
    },
  },
}
</script>

<style scoped></style>
