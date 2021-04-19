<template>
  <div class="bg-white">
    <div class="mb-4 flex align-center justify-between space-x-5">
      <h4 class="logo-color size-14 font-semibold mb-1">
        Toutes les propriétés
      </h4>
    </div>
    <div class="flex align-center space-x-3 border-b pb-2 justify-between">
      <div>
        <searchbar></searchbar>
      </div>
    </div>
    <div class="mt-2 flex flex-col justify-center border-b pb-2">
      <div
        class="flex align-center justify-between space-x-2 px-2 pb-2 rounded bg-white"
      >
        <div class="flex align-center space-x-2">
          <button
            class="flex align-center cursor-default font-semibold size-14"
            title="Filtre"
          >
            <svg
              class="mr-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3C3 2.44772 3.44772 2 4 2H16C16.5523 2 17 2.44772 17 3V6C17 6.26522 16.8946 6.51957 16.7071 6.70711L12 11.4142V15C12 15.2652 11.8946 15.5196 11.7071 15.7071L9.70711 17.7071C9.42111 17.9931 8.99099 18.0787 8.61732 17.9239C8.24364 17.7691 8 17.4045 8 17V11.4142L3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6V3Z"
                fill="#2d3748"
              />
            </svg>
            Filtre
          </button>
          <div class="flex space-x-5 align-center pl-5">
            <button
              class="border-none size-11 text-white px-5 pb-1 rounded button is-light"
            >
              Réinitialiser
            </button>
            <button
              class="border-none size-11 text-white px-5 pb-1 rounded button btn-008489"
            >
              Appliquer
            </button>
          </div>
        </div>
        <div class="flex space-x-5 align-center">
          <div class="flex align-center space-x-5">
            <span class="logo-color size-12">1-18 sur 633 resultat</span>
            <sortres></sortres>
          </div>
        </div>
      </div>
      <div class="flex align-center justify-center w-full flex-wrap">
        <optionadvanced
          :what="'typeprop'"
          :left="true"
          :currencies="[
            'Ventes et locations',
            'Vente totale',
            'Vente partiel',
            'Location totale',
            'Location partielle',
          ]"
        ></optionadvanced
        ><optionadvanced
          :what="'typeprop'"
          :left="true"
          :currencies="[
            'Tous types de propriétés',
            'Maison',
            'Appartement',
            'Villa',
            'Haut-Standing',
            'Bureau',
            'Magasin',
            'Terrain',
          ]"
        ></optionadvanced
        ><optionadvanced
          :what="'bed'"
          :left="true"
          :currencies="[
            'Tous types de pièces',
            'Studio',
            '1 pièce et plus',
            '2 pièces et plus',
            '3 pièces et plus',
            '4 pièces et plus',
            '5 pièces et plus',
          ]"
        ></optionadvanced
        ><optionadvanced
          :what="'price'"
          :left="true"
          :currencies="['Tous types de prix']"
        ></optionadvanced
        ><optionadvanced
          :what="'size'"
          :left="true"
          :currencies="[
            'Tous types de taille',
            'Entre 100 m² et 500 m²',
            'Entre 500 m² et 1000 m²',
            'Entre 1000 m² et 5000 m²',
          ]"
        ></optionadvanced>
        <optionadvanced
          :what="'typeprop'"
          :left="true"
          :currencies="[
            'Toutes caractéristiques',
            'Garage',
            'Piscine',
            'Gazon',
            'Terrain de sport',
            'Climatiseur',
          ]"
        ></optionadvanced>
        <optionadvanced
          :what="'typeprop'"
          :right="true"
          :currencies="['Disponible', 'Vendue', 'Louée']"
        ></optionadvanced>
      </div>
    </div>
    <div class="mes-props">
      <div class="flex align-center justify-center flex-wrap">
        <div v-for="k in 18" :key="k + 'ef'" class="column is-one-quarters">
          <homeproplarge></homeproplarge>
          <div class="border py-2 px-2.5">
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Total visites</div>
              <div class="size-16 font-semibold logo-color over">18 K</div>
            </div>
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Total messages</div>
              <div class="size-16 font-semibold logo-color over">18 K</div>
            </div>
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Meilleur lieu</div>
              <div class="size-14 font-semibold logo-color over">
                <div class="flex align-center space-x-3">
                  <span>Abidjan</span>
                  <span class="font-semibold logo-color over"
                    >(12 visites)</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-3"><pagination></pagination></div>
    </div>
  </div>
</template>

<script>
import Optionadvanced from '~/components/dropdown/Optionadvanced.vue'
import Sortres from '~/components/dropdown/Sortres.vue'
import Pagination from '~/components/pagination/Pagination.vue'
import Homeproplarge from '~/components/propriete/Homeproplarge.vue'
import Searchbar from '~/components/search/Searchbar.vue'
export default {
  components: { Searchbar, Sortres, Optionadvanced, Homeproplarge, Pagination },
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
