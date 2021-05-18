<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">
      Paramètres du compte
    </h4>
    <div class="mt-5">
      <div class="mt-4">
        <label class="flex align-center container pb-1"
          ><span class="size-13 -mt-012x block self-end logo-color"
            >Recevoir un email pour toutes les notifications.</span
          >
          <input
            v-model="checkedCateg"
            type="checkbox"
            :value="'auto-update'"
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div v-if="$auth.user.status === 'verifying'" class="pt-3">
        <h4 class="logo-color size-13 pb-1">
          Statut du compte
          <span class="font-semibold size-13">(En cours de vérification)</span>
        </h4>
        <h4 class="logo-color size-13 pb-1">
          Adresse email principale:
          <span class="size-13 logo-color font-semibold">{{
            $auth.user.main_email
          }}</span>
        </h4>
      </div>
      <div v-else-if="$auth.user.email_verified_at === null" class="pt-3">
        <h4 class="logo-color size-13 pb-1">
          Statut du compte
          <span class="font-semibold size-13"
            >(Adresse email principale non confirmée)</span
          >
        </h4>
        <h4 class="logo-color size-13 pb-1">
          Adresse email principale:
          <span class="size-13 logo-color font-semibold">{{
            $auth.user.main_email
          }}</span>
        </h4>
        <div class="pt-1 w-fit">
          <button
            class="border-none size-11 w-fit text-white py-1 px-10 pb-1 rounded button btn-008489"
          >
            Confirmer votre adresse email
          </button>
        </div>
      </div>
      <div v-else class="pt-3">
        <h4 class="logo-color size-13 pb-1">
          Statut du compte
          <span class="font-semibold size-13"
            >(Adresse email principale confirmée)</span
          >
        </h4>
        <h4 class="logo-color size-13 pb-1">
          Adresse email principale:
          <span class="size-13 logo-color font-semibold">{{
            $auth.user.main_email
          }}</span>
        </h4>
      </div>
      <div class="pt-4">
        <h4 class="logo-color size-13 pb-1">Fermeture de compte</h4>
        <div class="pt-1 w-fit">
          <button
            class="border-none size-11 w-fit text-white py-1 px-10 pb-1 rounded button bghover-008489er"
          >
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedCateg: [],
    }
  },
}
</script>

<style scoped></style>
