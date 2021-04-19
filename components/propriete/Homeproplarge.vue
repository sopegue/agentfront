<template>
  <div
    v-click-outside="close_quick"
    class="prop flex flex-col mt-3 border"
    @mouseover="
      {
        hovered = true
      }
    "
    @mouseleave="
      {
        hovered = false
      }
    "
  >
    <div class="">
      <figure v-click-outside="close_del" class="image relative is-4by3">
        <img src="https://ofalooback.herokuapp.com/images/8.jpg" alt="Placeholder image" />
        <button
          class="absolute cursor-default bottom-0 right-0 mb-2 mr-2 z-10"
          title="Contient une vidéo"
        >
          <svg
            class="w-7 h-7 text-white"
            fill="#00000041"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
              fill="#00000041"
            />
          </svg>
        </button>
        <div
          v-show="hovered"
          class="absolute appearZ flex flex-col justify-center space-y-4 z-0 top-0 left-0 w-full h-full bg-black-tre"
        >
          <a
            class="border-none size-11 text-white w-fit px-5 pb-1 h-centers rounded button btn-008489"
          >
            Voir les statistiques (Bientôt)
          </a>
        </div>
        <div v-if="sold" class="absolute z-10 bottom-0 left-0">
          <button
            class="border-none size-11 text-white rounded ml-1 mb-1 button bg-black-tr both-centers"
          >
            <label :for="'azaezz' + id" class="flex align-center container">
              <span class="w-fit size-11 -mt-0.2 multichoice-categ"
                >Marquer comme vendue</span
              >
              <input
                :id="'azaezz' + id"
                v-model="checkedCateg"
                type="checkbox"
                value="Vendue"
              />
              <span class="checkmark"></span>
            </label>
          </button>
        </div>
        <div v-if="rent" class="absolute z-10 bottom-0 left-0">
          <button
            class="border-none size-11 text-white rounded ml-1 mb-1 button bg-black-tr both-centers"
          >
            <label :for="'aaezz' + id" class="flex align-center container">
              <span class="w-fit size-11 -mt-0.2 multichoice-categ"
                >Marquer comme louée</span
              >
              <input
                :id="'aaezz' + id"
                v-model="checkedCateg"
                type="checkbox"
                value="Louée"
              />
              <span class="checkmark"></span>
            </label>
          </button>
        </div>
      </figure>
    </div>
    <div
      class="flex flex-col mt-2 px-2.5 pb-1.5"
      @click="$router.push('/dashboard/proprietes/mes-proprietes/viewed')"
    >
      <div class="flex align-center justify-between">
        <h4 class="logo-color size-15 font-semibold">{{ property }}</h4>
        <nuxt-link
          to="#"
          class="px-3 py-1 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
          >{{ types }}</nuxt-link
        >
      </div>
      <div>
        <span
          v-show="prix === 'fix' && negoc"
          class="logo-color font-medium size-14 block over w180"
          >100 000 000 000 FCFA, négociable</span
        >
        <span
          v-show="prix === 'fix' && !negoc"
          class="logo-color font-medium size-14 block over w180"
          >100 000 000 000 FCFA</span
        >
        <span
          v-show="prix === 'min' && negoc"
          class="logo-color font-medium size-14 block over w180"
          >A partir de 100 000 000 000 FCFA, négociable</span
        >
        <span
          v-show="prix === 'min' && !negoc"
          class="logo-color font-medium size-14 block over w180"
          >A partir de 100 000 000 000 FCFA</span
        >
        <span
          v-show="prix === 'minmax' && negoc"
          class="logo-color font-medium size-14 block over w180"
          >90 000 000 FCFA - 100 000 000 000 FCFA, négociable</span
        >
        <span
          v-show="prix === 'minmax' && !negoc"
          class="logo-color font-medium size-14 block over w180"
          >90 000 000 FCFA - 100 000 000 000 FCFA</span
        >
      </div>
      <div class="flex align-center space-x-1 mt-1">
        <svg
          class="w-6 h-6 logo-color -ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <span class="logo-color size-14 over">73 Gardner Street, Richmond</span>
      </div>
      <div class="mt-2">
        <img
          src="https://ofalooback.herokuapp.com/images/prop.png"
          alt="Placeholder image"
        />
      </div>
      <div class="mt-3 flex align-center space-x-3 justify-between">
        <div>
          <span class="color-363636 size-11">Ajoutée il y a 3 jours</span>
        </div>
        <div>
          <span class="color-363636 size-11">Modifiée y a 1 jour</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    superag: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Boolean,
      default: false,
    },
    rent: {
      type: Boolean,
      default: false,
    },
    negoc: {
      type: Boolean,
      default: false,
    },
    types: {
      type: String,
      default: 'Achat total',
    },
    property: {
      type: String,
      default: 'Appartement',
    },
    prix: {
      type: String,
      default: 'fix',
    },
  },
  data() {
    return {
      hovered: false,
      quick: false,
      wannadeleted: false,
      id: null,
      checkedCateg: [],
    }
  },
  mounted() {
    this.id = this._uid
  },
  methods: {
    close_quick() {
      this.quick = false
    },
    close_del() {
      this.wannadeleted = false
    },
    show_quick() {
      this.quick = true
    },
  },
}
</script>

<style scoped>
/* @media screen and (max-width: 1150px) {
  .prop {
    width: 50% !important;
  }
} */
/* @media screen and (max-width: 967px) {
  .prop {
    width: 33.33% !important;
  }
}
@media screen and (max-width: 747px) {
  .prop {
    width: 50% !important;
  }
}
@media screen and (max-width: 480px) {
  .prop {
    width: 100% !important;
  }
} */
</style>
