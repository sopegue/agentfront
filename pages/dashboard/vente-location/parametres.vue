<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">
      Paramètres du compte
    </h4>
    <div class="mt-5">
      <div>
        <label class="flex align-center container pb-1"
          ><span class="size-13 -mt-012x block self-end"
            >Mettre à jour la liste d'enregistrements (Supprime les propriétés
            vendues ou louées)</span
          >
          <input
            v-model="checkedCateg"
            type="checkbox"
            :value="'auto-update'"
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="pt-3">
        <h4 class="logo-color size-13 pb-1">
          Confirmation de l'adresse email
          <span class="font-semibold size-125"
            >(Votre adresse n'est pas confirmée / Votre adresse est
            confirmée)</span
          >
        </h4>
        <h4 class="logo-color size-13 pb-1">
          Adresse actuelle:
          <span class="size-13 color-363636f">yayasopeguesoro@gmail.com</span>
        </h4>
        <div class="pt-1 w-fit">
          <button
            class="border-none size-11 w-fit text-white py-1 px-10 pb-1 rounded button btn-008489"
          >
            Confirmer votre adresse email
          </button>
        </div>
      </div>
      <div class="pt-6">
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
