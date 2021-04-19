<template>
  <div class="bg-white px-5">
    <div class="mb-4 flex align-center justify-between space-x-5">
      <h4 class="logo-color size-15 font-semibold mb-1">Mes propriétés</h4>
    </div>
    <div class="flex align-center space-x-3 border-b pb-2 justify-between">
      <div>
        <searchbar></searchbar>
      </div>
      <nuxt-link
        to="/dashboard/proprietes/mes-proprietes/new"
        class="border-none flex align-center size-12 text-white px-3.5 pb-1.5 rounded button btn-008489 self-end"
      >
        <svg
          class="mr-1.5"
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7V9H7C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11H9V13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13V11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H11V7Z"
            fill="#fff"
          />
        </svg>

        Ajouter une nouvelle propriété
      </nuxt-link>
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
        <div v-if="true" class="flex space-x-5 align-center">
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
      <div class="flex flex-wrap">
        <homeprop
          :property="properties.data[0]"
          class="column is-one-quarters"
        ></homeprop>
      </div>
      <div class="my-3"><pagination></pagination></div>
    </div>
    <!-- <span
      class="logo-color font-semibold size-15 block w-fit h-centers pt-20 pb-20"
      >Vos propriétés seront affichées ici</span
    > -->
  </div>
</template>

<script>
import Optionadvanced from '~/components/dropdown/Optionadvanced.vue'
import Sortres from '~/components/dropdown/Sortres.vue'
import Pagination from '~/components/pagination/Pagination.vue'
import Homeprop from '~/components/propriete/Homeprop.vue'
import Searchbar from '~/components/search/Searchbar.vue'
export default {
  components: { Searchbar, Sortres, Optionadvanced, Homeprop, Pagination },
  async asyncData() {
    const properties = await fetch(
      'https://ofalooback.herokuapp.com/api/properties/bytype/Studio'
    ).then((res) => res.json())
    return { properties }
  },
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
