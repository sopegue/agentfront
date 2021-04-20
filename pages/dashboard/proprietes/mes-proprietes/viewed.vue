<template>
  <div
    class="bg-white w-full h-full relative"
    :class="{ 'px-20': !modaled && size > 940, noclick: deleting }"
  >
    <div v-click-outside="close_del" class="relative h-fit">
      <div class="flex align-center space-x-3 justify-between px-5 pt-2">
        <button
          class="button is-light rounded py-0.5 px-4"
          @click="$router.go(-1)"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.70711 4.87868C7.26972 4.31607 8.03278 4 8.82843 4H15C16.6569 4 18 5.34315 18 7V13C18 14.6569 16.6569 16 15 16H8.82843C8.03278 16 7.26972 15.6839 6.70711 15.1213L2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289L6.70711 4.87868ZM10.7071 7.29289C10.3166 6.90237 9.68342 6.90237 9.29289 7.29289C8.90237 7.68342 8.90237 8.31658 9.29289 8.70711L10.5858 10L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L12 11.4142L13.2929 12.7071C13.6834 13.0976 14.3166 13.0976 14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L13.4142 10L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L12 8.58579L10.7071 7.29289Z"
              fill="#374151"
            />
          </svg>
        </button>
        <div class="flex align-center space-x-5">
          <nuxt-link
            :to="
              '/dashboard/proprietes/mes-proprietes/updated?id=' +
              $route.query.id
            "
            class="border-none size-11 text-white w-24 px-5 pb-1 rounded button is-light"
          >
            Modifier
          </nuxt-link>
          <button
            class="border-none size-11 text-white w-24 px-5 pb-1 rounded button bghover-008489er"
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
          v-if="wannadeleted"
          class="px-5 py-5 mt-0 absolute border bg-white flex flex-col top-0 right-0 z-20"
        >
          <div class="h-fit flex flex-col">
            <span class="text-c"
              >Etes vous sûr(e) de vouloir supprimer cette propriété ?</span
            >
            <div class="flex align-center space-x-3 w-fit m-0-auto pt-3">
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
      </div>
    </div>
    <div v-if="dataOk" class="flex flex-col py-10 px-5">
      <div class="mb-1">
        <h4 class="logo-color size-18 font-semibold">
          {{ property.data.property.type }}
        </h4>
      </div>
      <div class="flex align-center space-x-1 mt-1 mb-5">
        <svg
          class="w-6 h-6 logo-color -ml-px"
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
        <span class="logo-color size-14">{{ property.data.adresse }}</span>
      </div>
      <div class="h-402max relative flex space-x-6">
        <div class="h-402max relative w-full">
          <div
            v-if="property.data.property.sold === 'yes'"
            class="absolute z-10 bottom-0 left-0"
          >
            <button
              class="border-none size-12 text-white rounded ml-2 mb-2 button bg-black-tre both-centers"
            >
              Vendue
            </button>
          </div>
          <div
            v-if="property.data.property.rent === 'yes'"
            class="absolute z-10 bottom-0 left-0"
          >
            <button
              class="border-none size-12 text-white rounded ml-2 mb-2 button bg-black-tre both-centers"
            >
              Louée
            </button>
          </div>
          <bigads
            :indexer="index"
            :ads="ads"
            class="h-full"
            @indexed="indexed"
          ></bigads>
        </div>
        <div class="w180e flex flex-col space-y-3">
          <figure
            class="image appearZ clickable relative"
            :class="{
              'is-5by3s': size > 1088,
              'is-5by3': size <= 1088,
            }"
            @mouseover="
              {
                hovered1 = true
              }
            "
            @click="
              {
                index = next2 + 1
              }
            "
            @mouseleave="
              {
                hovered1 = false
              }
            "
          >
            <div
              v-show="hovered1"
              class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
            ></div>
            <img :src="images[next2]" alt="Placeholder image" />
          </figure>

          <figure
            class="image appearZ clickable relative"
            :class="{
              'is-5by3s': size > 1088,
              'is-5by3': size <= 1088,
            }"
            @mouseover="
              {
                hovered2 = true
              }
            "
            @click="
              {
                index = next1 + 1
              }
            "
            @mouseleave="
              {
                hovered2 = false
              }
            "
          >
            <div
              v-show="hovered2"
              class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
            ></div>
            <img :src="images[next1]" alt="Placeholder image" />
          </figure>
          <figure
            class="image appearZ relative"
            :class="{
              'is-5by3s': size > 1088,
              'is-5by3': size <= 1088,
            }"
            @mouseover="
              {
                hovered3 = true
              }
            "
            @click="
              {
                index = curindex + 1
              }
            "
            @mouseleave="
              {
                hovered3 = false
              }
            "
          >
            <div
              class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
            >
              <svg
                class="w-14 h-14 text-white both-centers -mt-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268
2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <img :src="images[curindex]" alt="Placeholder image" />
          </figure>
        </div>
      </div>
      <div class="flex mt-4 border-b">
        <div class="w-full pb-4">
          <div class="flex align-center space-x-4 justify-between">
            <div>
              <span
                v-if="property.data.property.price_fixed.toString() !== '0'"
                class="logo-color font-medium size-15 block"
                >{{
                  $linker.formatMoney(
                    property.data.property.price_fixed.toString()
                  )
                }}
                FCFA
                <span
                  v-if="property.data.property.proposition.includes('Location')"
                  class="logo-color font-medium size-15"
                >
                  {{ property.data.property.location_freq }}</span
                ><span
                  v-if="property.data.property.negociable === 'yes'"
                  class="logo-color font-medium size-15"
                >
                  , négociable</span
                ></span
              >
              <span
                v-else-if="
                  property.data.property.price_min.toString() !== '0' &&
                  property.data.property.price_max.toString() !== '0'
                "
                class="logo-color font-medium size-15 block"
                >{{
                  $linker.formatMoney(
                    property.data.property.price_min.toString()
                  )
                }}
                FCFA -
                {{
                  $linker.formatMoney(
                    property.data.property.price_max.toString()
                  )
                }}
                FCFA
                <span
                  v-if="property.data.property.proposition.includes('Location')"
                  class="logo-color font-medium size-15"
                >
                  {{ property.data.property.location_freq }}</span
                ><span
                  v-if="property.data.property.negociable === 'yes'"
                  class="logo-color font-medium size-15"
                >
                  , négociable</span
                ></span
              >
              <span
                v-else-if="property.data.property.price_min.toString() === '0'"
                class="logo-color font-medium size-15 block"
                >Jusqu'à
                {{
                  $linker.formatMoney(
                    property.data.property.price_max.toString()
                  )
                }}
                FCFA
                <span
                  v-if="property.data.property.proposition.includes('Location')"
                  class="logo-color font-medium size-15"
                >
                  {{ property.data.property.location_freq }}</span
                ><span
                  v-if="property.data.property.negociable === 'yes'"
                  class="logo-color font-medium size-15"
                >
                  , négociable</span
                ></span
              >
              <span v-else class="logo-color font-medium size-15 block"
                >A partir de
                {{
                  $linker.formatMoney(
                    property.data.property.price_min.toString()
                  )
                }}
                FCFA
                <span
                  v-if="property.data.property.proposition.includes('Location')"
                  class="logo-color font-medium size-15"
                >
                  {{ property.data.property.location_freq }}</span
                ><span
                  v-if="property.data.property.negociable === 'yes'"
                  class="logo-color font-medium size-15"
                >
                  , négociable</span
                ></span
              >
            </div>
            <div>
              <nuxt-link
                v-if="property.data.property.proposition === 'Vente totale'"
                to="/"
                title="Le prix indiqué représente le montant à payer pour toute la propriété"
                class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                >{{ property.data.property.proposition }}</nuxt-link
              ><nuxt-link
                v-if="property.data.property.proposition === 'Vente partielle'"
                to="/"
                :title="
                  'Le prix indiqué représente ' +
                  property.data.property.percentage_part +
                  '%' +
                  ' de la propriété (la part disponible)'
                "
                class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                >{{ property.data.property.proposition }} ({{
                  property.data.property.percentage_part + '%'
                }})</nuxt-link
              >
              <nuxt-link
                v-if="property.data.property.proposition === 'Location totale'"
                to="/"
                title="Le prix indiqué représente le montant à payer pour toute la propriété"
                class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                >{{ property.data.property.proposition }}</nuxt-link
              >
              <nuxt-link
                v-if="
                  property.data.property.proposition === 'Location partielle'
                "
                to="/"
                :title="
                  'Le prix indiqué représente ' +
                  property.data.property.percentage_part +
                  '%' +
                  ' de la propriété (la part disponible)'
                "
                class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                >{{ property.data.property.proposition }} ({{
                  property.data.property.percentage_part + '%'
                }})</nuxt-link
              >
            </div>
          </div>
          <div class="my-2">
            <img
              src="https://ofalooback.herokuapp.com/images/prop.png"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
      <div v-if="property.data.links !== null">
        <div class="pb-8 pt-5 border-b">
          <h4 class="logo-color size-16 font-semibold mb-5">Liens Vidéos</h4>
          <div class="mt-2 flex flex-col space-y-8">
            <div class="w-fit h-centers">
              {{ property.data.property.informations }}
            </div>
            <div class="w-fit h-centers">
              {{ property.data.property.informations }}
            </div>
            <div class="w-fit h-centers">
              {{ property.data.property.informations }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col space-y-6 border-b pt-5 pb-5">
        <div class="flex flex-col space-y-3">
          <div class="w-full">
            <div>
              <h4 class="logo-color size-16 font-semibold mb-5">
                Informations Appartement
              </h4>
              <div class="my-2">
                {{ property.data.property.informations }}
              </div>
            </div>
          </div>
          <div class="w-full">
            <div>
              <h4 class="logo-color size-16 font-semibold mb-5">
                Caractéristiques Appartement
              </h4>
              <div class="my-2">
                <img
                  src="https://ofalooback.herokuapp.com/images/prop.png"
                  alt="Placeholder image"
                />
                <img
                  src="https://ofalooback.herokuapp.com/images/prop.png"
                  alt="Placeholder image"
                />
                <img
                  src="https://ofalooback.herokuapp.com/images/prop.png"
                  alt="Placeholder image"
                />
                <img
                  src="https://ofalooback.herokuapp.com/images/prop.png"
                  alt="Placeholder image"
                />
                <img
                  src="https://ofalooback.herokuapp.com/images/prop.png"
                  alt="Placeholder image"
                />
                <img
                  src="https://ofalooback.herokuapp.com/images/prop.png"
                  alt="Placeholder image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bigads from '@/components/propriete/Bigads.vue'
export default {
  components: { Bigads },
  middleware: 'query',
  async asyncData({ query }) {
    const property = await fetch(
      'https://ofalooback.herokuapp.com/api/property/' + query.id
    ).then((res) => res.json())
    return { property }
  },
  data() {
    return {
      inside: false,
      hovered1: false,
      share: false,
      hovered2: false,
      hovered3: false,
      zoom: false,
      quick: false,
      wannadeleted: false,
      delete: false,
      active: 0,
      images: [],
      index: 1,
      ades: [],
    }
  },
  computed: {
    ads() {
      return this.images
    },
    deleting() {
      return this.delete === true
    },
    dataOk() {
      return (
        this.property !== undefined &&
        this.property.data !== undefined &&
        this.property.data.property !== undefined
      )
    },
    modaled() {
      return this.$store.state.dash_mod
    },
    next1() {
      if (this.images.length - 1 - this.curindex <= 1) {
        if (this.images.length - 1 - this.curindex === 1)
          return this.images.length - 1
        if (this.images.length - 1 - this.curindex === 0) return 0
      }
      return this.curindex + 1
    },
    next2() {
      if (this.images.length - 1 - this.curindex <= 1) {
        if (this.images.length - 1 - this.curindex === 1) return 0
        if (this.images.length - 1 - this.curindex === 0) return 1
      }
      return this.curindex + 2
    },
    curindex() {
      return this.index - 1
    },
    size() {
      return this.$store.state.size
    },
  },
  created() {
    this.fillImages()
  },
  methods: {
    close_del() {
      this.wannadeleted = false
    },
    async deletion() {
      this.delete = true
      const data = await this.$axios.$delete('property/' + this.$route.query.id)
      console.log(data)
      this.delete = false
      location.assign('/dashboard/proprietes/mes-proprietes')
    },
    fillImages() {
      for (let index = 0; index < this.property.data.images.length; index++) {
        const element = this.property.data.images[index]
        if (element.principal === 'yes') {
          this.images.push(
            'https://ofalooback.herokuapp.com/storage/' + element.url
          )
          break
        }
      }
      for (let index = 0; index < this.property.data.images.length; index++) {
        const element = this.property.data.images[index]
        if (element.principal === 'no')
          this.images.push(
            'https://ofalooback.herokuapp.com/storage/' + element.url
          )
      }
      this.ades = this.images
    },
    hideshare() {
      this.share = false
    },
    close_quick() {
      this.quick = false
    },
    show_quick() {
      this.quick = true
    },
    show_quicks(val) {
      this.index = val
      this.quick = true
    },
    hidebody() {
      document.body.style = 'overflow: hidden !important;'
    },
    close() {
      this.$emit('close_quick')
    },
    setindex(val) {
      this.index = val
      this.show_quick()
    },
    indexed(val) {
      this.index = val
    },
  },
}
</script>
<style scoped>
.zoomimg {
  transition: transform 0.25s ease;
  cursor: zoom-in;
}
.haszoomed {
  transform: scale(2) !important;
  cursor: zoom-out !important;
}
.slide {
  display: block !important;
  animation: 0.3s appearZ;
}
.minimage:hover {
  border-color: #006280;
}
.border-bluee {
  border-color: #006280;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: const(--tw-ring-offset-shadow, 0 0 #0000),
    const(--tw-ring-shadow, 0 0 #0000), const(--tw-shadow);
}
.minimageborder:hover {
  border-color: #006280;
}
</style>
