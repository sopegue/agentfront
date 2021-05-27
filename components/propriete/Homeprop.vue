<template>
  <div class="prop">
    <div v-show="!dataOk"></div>
    <div
      v-if="dataOk"
      class="h-fit flex flex-col"
      :class="{ noclick: deleting }"
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
      <div class="mt-3">
        <figure class="image relative is-4by3">
          <img :src="getImgPrin" alt="Placeholder image" />
          <button
            v-if="property.links !== undefined && property.links !== null"
            class="absolute cursor-default bottom-0 right-0 mb-2 mr-2 z-15"
            title="Contient un ou plusieurs lien vidéo(s)"
          >
            <svg
              class="w-8 h-8 text-white"
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
            v-show="hovered || size <= 1024"
            class="absolute appearZ z-10 flex flex-col justify-center space-y-4 top-0 left-0 w-full h-full bg-black-tre"
          >
            <nuxt-link
              :to="
                '/dashboard/proprietes/mes-proprietes/viewed?id=' +
                property.property.id
              "
              class="border-none size-11 text-white w-24 px-5 pb-1 h-centers rounded button btn-008489"
            >
              Aperçu
            </nuxt-link>
            <nuxt-link
              :to="
                '/dashboard/proprietes/mes-proprietes/updated?id=' +
                property.property.id
              "
              class="border-none size-11 text-white w-24 px-5 pb-1 h-centers rounded button is-light"
            >
              Modifier
            </nuxt-link>
            <button
              class="border-none size-11 text-white w-24 px-5 pb-1 h-centers rounded button bghover-008489er"
              @click="
                {
                  wannadeleted = !wannadeleted
                }
              "
            >
              Supprimer
            </button>
          </div>
          <div
            v-if="property.property.proposition.includes('Location')"
            class="absolute z-10 bottom-0 left-0"
          >
            <button
              class="border-none size-11 text-white rounded ml-1 mb-1 button bg-black-tr both-centers"
            >
              <label
                :for="'aaezzaa' + property.property.id"
                class="flex align-center container"
                @click="
                  checkedCategv.length > 0
                    ? markAsSold('unsold')
                    : markAsSold('sold')
                "
              >
                <span class="w-fit text-white size-11 -mt-0.2 multichoice-categ"
                  >Marquer comme louée</span
                >
                <input
                  :id="'aaezzaa' + property.property.id"
                  v-model="checkedCateg"
                  type="checkbox"
                  value="Louée"
                />
                <span class="checkmark"></span>
              </label>
            </button>
          </div>
          <div
            v-if="wannadeleted"
            class="p-2 absolute border bg-white flex flex-col top-0 left-0 right-0 bottom-0 z-20"
          >
            <div class="h-fit vertical-center flex flex-col">
              <span class="text-c"
                >Etes vous sûr(e) de vouloir supprimer cette propriété ?</span
              >
              <div class="flex align-center space-x-3 w-fit m-0-auto pt-5">
                <button
                  class="border-none size-11 text-white px-5 pb-1 rounded button is-light"
                  @click="
                    {
                      wannadeleted = false
                    }
                  "
                >
                  Non, annuler
                </button>
                <button
                  class="border-none size-11 text-white px-5 pb-1 rounded button bghover-008489er"
                  @click="deletion"
                >
                  Oui, supprimer
                </button>
              </div>
            </div>
          </div>
        </figure>
      </div>
      <div v-if="property.property.proposition.includes('Vente')" class="z-10">
        <button
          class="border-none size-11 text-white rounded ml-1 mt-3 mb button bg-black-tr"
        >
          <label
            :for="'azaezz' + property.property.id"
            class="flex align-center container"
            @click="
              checkedCategv.length > 0
                ? markAsSold('unsold')
                : markAsSold('sold')
            "
          >
            <span class="w-fit text-white size-11 -mt-0.2 multichoice-categ"
              >Marquer comme vendue</span
            >
            <input
              :id="'azaezz' + property.property.id"
              v-model="checkedCategv"
              type="checkbox"
              value="Vendue"
            />
            <span class="checkmark"></span>
          </label>
        </button>
      </div>
      <div
        class="flex clickable flex-col mt-1"
        @click="
          $router.push(
            '/dashboard/proprietes/mes-proprietes/viewed?id=' +
              property.property.id
          )
        "
      >
        <div class="flex align-center justify-between">
          <h4 class="logo-color size-15 font-semibold">
            {{ property.property.type }}
          </h4>
          <div>
            <a
              v-if="property.property.proposition === 'Vente totale'"
              title="Le prix indiqué représente le montant à payer pour toute la propriété"
              class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
              >{{ property.property.proposition }}</a
            ><a
              v-if="property.property.proposition === 'Vente partielle'"
              :title="
                'Le prix indiqué représente ' +
                property.property.percentage_part +
                '%' +
                +' de la propriété (la part disponible)'
              "
              class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
              >{{ property.property.proposition }} ({{
                property.property.percentage_part + '%'
              }})</a
            >
            <a
              v-if="property.property.proposition === 'Location totale'"
              title="Le prix indiqué représente le montant à payer pour toute la propriété"
              class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
              >{{ property.property.proposition }}</a
            >
            <a
              v-if="property.property.proposition === 'Location partielle'"
              :title="
                'Le prix indiqué représente ' +
                property.property.percentage_part +
                '%' +
                +' de la propriété (la part disponible)'
              "
              class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
              >{{ property.property.proposition }} ({{
                property.property.percentage_part + '%'
              }})</a
            >
          </div>
        </div>
        <div>
          <span
            v-if="property.property.price_fixed.toString() !== '0'"
            class="logo-color font-medium size-14 block over w180"
            >{{ $linker.formatMoney(property.property.price_fixed.toString()) }}
            FCFA
            <span
              v-if="property.property.proposition.includes('Location')"
              class="logo-color font-medium size-14"
            >
              {{ property.property.location_freq }}</span
            ><span
              v-if="property.property.negociable === 'yes'"
              class="logo-color font-medium size-14"
            >
              , négociable</span
            ></span
          >
          <span
            v-else-if="
              property.property.price_min.toString() !== '0' &&
              property.property.price_max.toString() !== '0'
            "
            class="logo-color font-medium size-14 block over w180"
            >{{ $linker.formatMoney(property.property.price_min.toString()) }}
            FCFA -
            {{ $linker.formatMoney(property.property.price_max.toString()) }}
            FCFA
            <span
              v-if="property.property.proposition.includes('Location')"
              class="logo-color font-medium size-14"
            >
              {{ property.property.location_freq }}</span
            ><span
              v-if="property.property.negociable === 'yes'"
              class="logo-color font-medium size-14"
            >
              , négociable</span
            ></span
          >
          <span
            v-else-if="property.property.price_min.toString() === '0'"
            class="logo-color font-medium size-14 block over w180"
            >Jusqu'à
            {{ $linker.formatMoney(property.property.price_max.toString()) }}
            FCFA
            <span
              v-if="property.property.proposition.includes('Location')"
              class="logo-color font-medium size-14"
            >
              {{ property.property.location_freq }}</span
            ><span
              v-if="property.property.negociable === 'yes'"
              class="logo-color font-medium size-14"
            >
              , négociable</span
            ></span
          >
          <span v-else class="logo-color font-medium size-14 block over w180"
            >A partir de
            {{ $linker.formatMoney(property.property.price_min.toString()) }}
            FCFA
            <span
              v-if="property.property.proposition.includes('Location')"
              class="logo-color font-medium size-14"
            >
              {{ property.property.location_freq }}</span
            ><span
              v-if="property.property.negociable === 'yes'"
              class="logo-color font-medium size-14"
            >
              , négociable</span
            ></span
          >
        </div>
        <div
          :title="property.adresse + ', ' + property.ville"
          class="flex align-center space-x-1 mt-1"
        >
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
          <span class="logo-color size-14 over">{{ property.adresse }}</span>
        </div>
        <div class="mt-2">
          <div class="flex align-center space-x-3.5">
            <div
              v-if="property.property.bed > 0"
              :title="property.property.bed + ' pièce(s)'"
              class="flex align-center space-x-1.5"
            >
              <span>
                <i class="fas size-16 logo-color fa-bed"></i>
              </span>
              <span class="logo-color">{{ property.property.bed }}</span>
            </div>
            <div
              v-if="property.property.bath > 0"
              :title="property.property.bath + ' salles(s) de bain(s)'"
              class="flex align-center space-x-1.5"
            >
              <span>
                <i class="fas size-16 logo-color fa-shower"></i>
              </span>
              <span class="logo-color">{{ property.property.bath }}</span>
            </div>
            <div
              v-if="property.property.garage > 0"
              :title="property.property.garage + ' garage(s)'"
              class="flex align-center space-x-1.5"
            >
              <span>
                <i class="fas size-16 logo-color fa-warehouse"></i>
              </span>
              <span class="logo-color">{{ property.property.garage }}</span>
            </div>
            <div
              v-if="property.property.taille > 0"
              :title="'La taille de la propriété'"
              class="flex align-center space-x-1.5"
            >
              <span>
                <i class="fas size-16 logo-color fa-ruler-vertical"></i>
              </span>
              <span class="logo-color">{{ property.property.taille }} m²</span>
            </div>
          </div>
        </div>
        <div v-show="checkedCateg.length > 0" class="z-10 pt-2.5">
          <div
            class="border-none flex space-x-3 pb-2 size-11 text-white rounded mr-1 mb-1 button bg-black-tr"
          >
            <div>
              <span class="size-11 text-white block color-363636 pb-1"
                >Date de fin location</span
              >
              <input class="no-outlines border px-1 size-12" type="date" />
            </div>
            <button
              class="border-none h-fit self-end size-11 text-white px-2 pb-1 rounded button is-light"
            >
              Appliquer
            </button>
          </div>
        </div>
        <div class="mt-2 flex align-center space-x-3 justify-between">
          <div>
            <span class="color-363636 size-11"
              >Ajoutée
              {{
                $utility.dating(
                  new Date($moment(property.property.created_at).format())
                )
              }}</span
            >
          </div>
        </div>
      </div>
      <articlemodal v-if="quick" @close_quick="close_quick"></articlemodal>
    </div>
  </div>
</template>

<script>
import Articlemodal from '../modal/Articlemodal.vue'
export default {
  components: { Articlemodal },
  props: {
    property: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hovered: false,
      quick: false,
      wannadeleted: false,
      delete: false,
      checkedCateg: [],
      checkedCategv: [],
    }
  },
  computed: {
    dataOk() {
      return (
        this.property !== undefined &&
        this.property.property !== undefined &&
        this.property.property !== null
      )
    },
    size() {
      return this.$store.state.size
    },
    deleting() {
      return this.delete === true
    },
    getImgPrin() {
      for (let index = 0; index < this.property.images.length; index++) {
        const element = this.property.images[index]
        if (element.principal === 'yes')
          return 'https://ofaloo.blob.core.windows.net/ofaloo/' + element.url
      }
      return (
        'https://ofaloo.blob.core.windows.net/ofaloo/' +
        this.property.images[0].url
      )
    },
  },
  mounted() {
    if (this.dataOk) {
      this.checkedCategv =
        this.property.property.sold === 'no' ? [] : ['Vendue']

      this.checkedCateg = this.property.property.rent === 'no' ? [] : ['Louée']
    }
  },
  methods: {
    async deletion() {
      this.delete = true
      const data = await this.$axios.$delete(
        'property/' + this.property.property.id
      )
      console.log(data)
      this.delete = false
      location.assign('/dashboard/proprietes/mes-proprietes')
    },
    close_quick() {
      this.quick = false
    },
    show_quick() {
      this.quick = true
    },
    async markAsSold(val) {
      const data = await this.$axios.$get(
        'property/sell/' + val + '/' + this.property.property.id
      )
      if (data.status === '200') {
        if (data.message === 'sold') {
          this.checkedCategv = ['Vendue']
        }
        if (data.message === 'unsold') {
          this.checkedCategv = []
        }
      } else if (this.checkedCategv.length > 0) this.checkedCategv = []
      else this.checkedCategv = ['Vendue']
    },
    async markAsRent(val) {
      const data = await this.$axios.$get(
        'property/rent/' + val + '/' + this.property.property.id
      )
      if (data.status === '200') {
        if (data.message === 'rented') {
          this.checkedCateg = ['Vendue']
        }
        if (data.message === 'unrented') {
          this.checkedCateg = []
        }
      } else if (this.checkedCateg.length > 0) this.checkedCateg = []
      else this.checkedCateg = ['Vendue']
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 940px) {
  .prop {
    width: 50% !important;
  }
}
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
