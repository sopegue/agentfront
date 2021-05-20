<template>
  <div
    class="bg-white w-full h-full relative"
    :class="{ 'px-20': !modaled && size > 940, noclick: deleting }"
  >
    <div v-click-outside="close_del" class="relative h-fit">
      <div class="flex align-center space-x-3 justify-between px-5 pt-2">
        <button
          class="button is-light rounded py-0.5 px-4"
          @click="$router.push('/dashboard/proprietes/mes-proprietes')"
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
      <div class="flex align-center justify-between mb-5">
        <div class="flex align-center space-x-1 mt-1">
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
        <button
          v-click-outside="hideshare"
          class="flex align-center relative hover-008489 space-x-1 mt-1"
          @click="
            {
              share = !share
            }
          "
        >
          <svg
            class="w-5 h-5 logo-color -ml-1 makeme-008489"
            stroke="none"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569
                     2 15 2C13.3431 2 12 3.34315 12 5C12 5.12548 12.0077 
                     5.24917 12.0227 5.37061L7.08259 7.84064C6.54303 7.32015 
                     5.8089 7 5 7C3.34315 7 2 8.34315 2 10C2 11.6569 3.34315 
                     13 5 13C5.80892 13 6.54306 12.6798 7.08263 12.1593L12.0227
                      14.6293C12.0077 14.7508 12 14.8745 12 15C12 16.6569 13.3431 
                      18 15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 
                      12C14.1911 12 13.457 12.3201 12.9174 12.8406L7.97733 10.3706C7.9923 10.2492 8 10.1255 8 10C8 9.8745 7.99229 9.7508 7.97733 9.62934L12.9174 7.15932C13.4569 7.67984 14.1911 8 15 8Z"
              fill="#2d3748"
            />
          </svg>
          <div
            v-show="share"
            class="absolute bg-white top-0 mt-6 z-20 appearZ w-fit flex align-center space-x-4 border py-2 px-5 rounded"
            :class="{ 'right-0': size >= 556, 'left-0': size < 556 }"
          >
            <a
              class="twitter-share-button"
              :href="`https://twitter.com/intent/tweet?text=https://www.ofaloo.com/propriete/?wyzes=${$route.query.id}`"
              data-size="large"
              title="Partager sur Twitter"
              target="_blank"
              ><i class="fab fa-twitter size-20 clickable twi-col"></i
            ></a>
            <a title="Partager sur Facebook" target="_blank"
              ><iframe
                :src="`https://www.facebook.com/plugins/share_button.php?href=https://www.ofaloo.com/propriete/?wyzes=${$route.query.id}&layout=button&size=small&width=81&height=20&appId`"
                width="81"
                height="20"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe
            ></a>
            <a v-show="size < 640" :href="mail" title="Partager par email"
              ><svg
                class="w-7 min-w-7 h-7 min-h-7 logo-color"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
                  fill="#004e66"
                />
                <path
                  d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
                  fill="#004e66"
                />
              </svg>
            </a>
          </div>
          <span class="logo-color size-14 makeme-008489">Partager</span>
        </button>
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
                class="w-14 h-14 text-white both-centers -mt-7"
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
              <a
                v-if="property.data.property.proposition === 'Vente totale'"
                title="Le prix indiqué représente le montant à payer pour toute la propriété"
                class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                >{{ property.data.property.proposition }}</a
              ><a
                v-if="property.data.property.proposition === 'Vente partielle'"
                :title="
                  'Le prix indiqué représente ' +
                  property.data.property.percentage_part +
                  '%' +
                  ' de la propriété (la part disponible)'
                "
                class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                >{{ property.data.property.proposition }} ({{
                  property.data.property.percentage_part + '%'
                }})</a
              >
              <a
                v-if="property.data.property.proposition === 'Location totale'"
                title="Le prix indiqué représente le montant à payer pour toute la propriété"
                class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                >{{ property.data.property.proposition }}</a
              >
              <a
                v-if="
                  property.data.property.proposition === 'Location partielle'
                "
                :title="
                  'Le prix indiqué représente ' +
                  property.data.property.percentage_part +
                  '%' +
                  ' de la propriété (la part disponible)'
                "
                class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                >{{ property.data.property.proposition }} ({{
                  property.data.property.percentage_part + '%'
                }})</a
              >
            </div>
          </div>
          <div class="mt-2">
            <div class="flex align-center space-x-3.5">
              <div
                v-if="property.data.property.bed > 0"
                :title="property.data.property.bed + ' pièce(s)'"
                class="flex align-center space-x-1.5"
              >
                <span>
                  <i class="fas size-16 logo-color fa-bed"></i>
                </span>
                <span class="logo-color">{{ property.data.property.bed }}</span>
              </div>
              <div
                v-if="property.data.property.bath > 0"
                :title="property.data.property.bath + ' salles(s) de bain(s)'"
                class="flex align-center space-x-1.5"
              >
                <span>
                  <i class="fas size-16 logo-color fa-shower"></i>
                </span>
                <span class="logo-color">{{
                  property.data.property.bath
                }}</span>
              </div>
              <div
                v-if="property.data.property.garage > 0"
                :title="property.data.property.garage + ' garage(s)'"
                class="flex align-center space-x-1.5"
              >
                <span>
                  <i class="fas size-16 logo-color fa-warehouse"></i>
                </span>
                <span class="logo-color">{{
                  property.data.property.garage
                }}</span>
              </div>
              <div
                v-if="property.data.property.taille > 0"
                :title="'La taille de la propriété'"
                class="flex align-center space-x-1.5"
              >
                <span>
                  <i class="fas size-16 logo-color fa-ruler-vertical"></i>
                </span>
                <span class="logo-color"
                  >{{ property.data.property.taille }} m²</span
                >
              </div>
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
              <div
                v-html="property.data.property.informations"
                class="my-2"
              ></div>
            </div>
          </div>
          <div v-if="has_options" class="w-full border-t pt-5 pb-5">
            <div class="w-full">
              <div>
                <h4 class="logo-color size-16 font-semibold mb-5">
                  Caractéristiques {{ property.data.property.type }}
                </h4>
                <div class="my-2 flex flex-col space-y-5">
                  <div v-show="has_in">
                    <h4 class="logo-color size-14 pb-2 font-semibold">
                      Intérieur
                    </h4>
                    <div class="flex flex-wrap">
                      <div
                        v-for="op in options.indoor"
                        :key="op"
                        class="flex space-x-1.5 column is-one-fifth"
                        :class="{ 'mx-5': size < 600 }"
                      >
                        <span
                          ><i class="fas fa-circle size-8 logo-color"></i
                        ></span>
                        <span class="logo-color">{{ op }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-show="has_out">
                    <h4 class="logo-color size-14 pb-2 font-semibold">
                      Extérieur
                    </h4>
                    <div class="flex flex-wrap">
                      <div
                        v-for="op in options.outdoor"
                        :key="op"
                        class="flex space-x-1.5 column is-one-fifth"
                        :class="{ 'mx-5': size < 600 }"
                      >
                        <span
                          ><i class="fas fa-circle size-8 logo-color"></i
                        ></span>
                        <span class="logo-color">{{ op }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-show="has_en">
                    <h4 class="logo-color size-14 pb-2 font-semibold">
                      Contrôle de l'énergie
                    </h4>
                    <div class="flex flex-wrap">
                      <div
                        v-for="op in options.energy"
                        :key="op"
                        class="flex space-x-1.5 column is-one-fifth"
                        :class="{ 'mx-5': size < 600 }"
                      >
                        <span
                          ><i class="fas fa-circle size-8 logo-color"></i
                        ></span>
                        <span class="logo-color">{{ op }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="property.data.links !== null" class="border-b pb-8">
        <div>
          <h4 class="logo-color size-16 font-semibold pt-5 w-fit m-0-auto">
            Réseaux sociaux
          </h4>
        </div>
        <div>
          <div
            v-if="links.yt !== null && links.yt !== undefined"
            class="pt-6 border-t mt-6"
          >
            <h4 class="logo-color size-16 font-semibold mb-5">Vidéo Youtube</h4>
            <yt :link="links.yt"></yt>
          </div>
          <div
            v-if="links.tiktok && links.tiktok !== undefined"
            class="pt-6 border-t mt-6"
          >
            <h4 class="logo-color size-16 font-semibold mb-5">Vidéo Tik Tok</h4>
            <div
              class="flex items-center justify-center sm:flex-row flex-col sm:space-x-1.5 sm:space-y-0 space-y-3 pb-5"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span
                >Si la video Tik Tok ne fonctionne pas convenablement, essayez
                de désactiver votre bloqueur de publicité(AdBlock) puis
                ré-actualiser la page.</span
              >
            </div>
            <tiktok :link="links.tiktok"></tiktok>
          </div>
          <div
            v-if="links.insta !== null && links.insta !== undefined"
            class="pt-6 border-t mt-6"
          >
            <h4 class="logo-color size-16 font-semibold mb-5">
              Vidéo Instagram
            </h4>
            <insta :link="links.insta"></insta>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bigads from '@/components/propriete/Bigads.vue'
import Yt from '~/components/social/Yt.vue'
import Tiktok from '~/components/social/Tiktok.vue'
import Insta from '~/components/social/Insta.vue'
export default {
  components: { Bigads, Yt, Tiktok, Insta },
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
      options: {
        indoor: [],
        outdoor: [],
        energy: [],
      },
    }
  },
  computed: {
    ads() {
      return this.images
    },
    deleting() {
      return this.delete === true
    },
    has_options() {
      return (
        this.property !== undefined &&
        this.property.data.options !== null &&
        this.property.data.options !== undefined &&
        this.property.data.options.length > 0
      )
    },
    has_in() {
      return this.options.indoor.length > 0
    },
    has_out() {
      return this.options.outdoor.length > 0
    },
    has_en() {
      return this.options.energy.length > 0
    },
    dataOk() {
      return (
        this.property !== undefined &&
        this.property.data !== undefined &&
        this.property.data.property !== undefined
      )
    },
    links() {
      return this.property.data.links !== null &&
        this.property.data.links !== undefined
        ? this.property.data.links
        : null
    },
    modaled() {
      return this.$store.state.dash_mod
    },
    mail() {
      return `mailto:?subject=Propriétés à acheter et louer sur le site Ofaloo.com&amp;body=Découvrez cette superbe propriété sur https://www.ofaloo.com/propriete/?wyzes=${this.$route.query.id}`
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
  mounted() {
    this.checkOptions()
  },
  methods: {
    checkOptions() {
      if (this.has_options) {
        this.property.data.options.forEach((option) => {
          if (option.options.type === 'indoor') {
            this.options.indoor.push(option.options.title)
          }
          if (option.options.type === 'outdoor') {
            this.options.outdoor.push(option.options.title)
          }
          if (option.options.type === 'energie') {
            this.options.energy.push(option.options.title)
          }
        })
      }
    },
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
            'https://ofaloo.blob.core.windows.net/ofaloo/' + element.url
          )
          break
        }
      }
      for (let index = 0; index < this.property.data.images.length; index++) {
        const element = this.property.data.images[index]
        if (element.principal === 'no')
          this.images.push(
            'https://ofaloo.blob.core.windows.net/ofaloo/' + element.url
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
