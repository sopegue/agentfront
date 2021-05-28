<template>
  <div>
    <div class="flex flex-col space-y-6 pb-5">
      <div class="flex space-x-4 align-center w-full">
        <div
          class="bg-white relative z-0 rounded border w-full h-full"
          :class="{ 'px-7 py-3': size > 1124, 'px-4 py-1.5': size <= 1124 }"
        >
          <div class="flex relative z-0 flex-col space-y-2">
            <div
              v-show="infosvisit"
              class="border absolute z-10 mt-7.5 l-none wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
            >
              Le calcul des visites par mois est basé sur le nombre de fois
              qu'une même adresse mac (un unique appareil) consulte une
              propriété toutes les 24 heures.
            </div>
            <div
              class="flex relative z-0 align-center"
              :class="{
                'space-x-3 justify-between': size > 1124,
                'flex-col justify-center': size <= 1124,
              }"
            >
              <div
                class="size-13 relative z-0 font-semibold logo-color over flex align-center"
              >
                Visites des 3 derniers mois
                <svg
                  class="transform rotate-180 mt-0.5 ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @mouseover="show('visit')"
                  @mouseleave="hide('visit')"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#9c9c9c"
                  />
                </svg>
              </div>
              <div class="size-12 color-363636f over">Total des visites</div>
            </div>
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Mars 2021</div>
              <div class="size-20 font-semibold logo-color over">18 K</div>
            </div>
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Mars 2021</div>
              <div class="size-20 font-semibold logo-color over">18 K</div>
            </div>
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Mars 2021</div>
              <div class="size-20 font-semibold logo-color over">18 K</div>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded border w-full h-full"
          :class="{ 'px-7 py-3': size > 1124, 'px-4 py-1.5': size <= 1124 }"
        >
          <div class="flex flex-col relative space-y-2">
            <div
              v-show="infosmess"
              class="border absolute z-10 mt-7.5 l-none wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
            >
              Le nombre de messages par mois correspond au nombre de fois que
              vous avez été contacté à partir du formulaire de contact de
              l'agent sur la page de consultation d'une propriété.
            </div>
            <div
              class="flex align-center"
              :class="{
                'space-x-3 justify-between': size > 1124,
                'flex-col justify-center': size <= 1124,
              }"
            >
              <div
                class="size-13 font-semibold logo-color over flex align-center"
              >
                Messages des 3 derniers mois
                <svg
                  class="transform rotate-180 mt-0.5 ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @mouseover="show('mess')"
                  @mouseleave="hide('mess')"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#9c9c9c"
                  />
                </svg>
              </div>
              <div class="size-12 color-363636f over">Total des messages</div>
            </div>
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Mars 2021</div>
              <div class="size-20 font-semibold logo-color over">18 K</div>
            </div>
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Mars 2021</div>
              <div class="size-20 font-semibold logo-color over">18 K</div>
            </div>
            <div class="flex align-center justify-between">
              <div class="size-12 color-363636f over">Mars 2021</div>
              <div class="size-20 font-semibold logo-color over">18 K</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex space-x-4 align-center w-full h-96">
        <div
          class="bg-white relative z-0 rounded border w-full h-full"
          :class="{ 'px-8': size > 1124, 'px-6': size <= 1124 }"
        >
          <div class="flex relative z-0 flex-col space-y-4 h-full">
            <div
              v-show="infosorigin"
              class="border absolute z-10 mt-10 ml-10 l-none wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
            >
              Lieux où les propriétés ont été consultées en ligne. Les lieux
              sont basés uniquement sur l'adresse ip de l'appareil.
            </div>
            <div
              class="flex relative z-0 space-x-3 justify-between align-center"
            >
              <div
                class="size-13 relative z-0 font-semibold logo-color over flex align-center"
              >
                Lieux des visites des 3 derniers mois
                <svg
                  class="transform rotate-180 mt-0.5 ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @mouseover="show('origin')"
                  @mouseleave="hide('origin')"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#9c9c9c"
                  />
                </svg>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="mb-2 mt-1">
                <label class="relative w-max-64 flex align-center">
                  <input
                    v-model="searchorigin"
                    type="search"
                    placeholder="Rechercher une origine..."
                    class="border w-full no-outlines pl-2 pr-7 py-1 rounded size-14"
                  />
                  <svg
                    class="w-4 h-4 absolute right-0 mr-2 logo-color"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </label>
              </div>
              <div
                class="flex flex-col space-y-1 overflow-y-auto h-66 aside pt-2 cursor-default"
              >
                <div v-for="i in 3" :key="i" class="flex flex-col space-y-1">
                  <div class="size-14 color-363636f over font-semibold text-c">
                    Mars 2021
                  </div>
                  <div class="flex flex-col space-y-1.5">
                    <span
                      class="logo-color size-13 font-semibold block border-b pb-1 mb-1.5"
                      >De la Côte d'Ivoire (74)</span
                    >
                    <a
                      v-for="(element, k) in Lieux.filter((x) => {
                        return x.endsWith('-ville')
                      })"
                      :key="k + 'ville'"
                      class="logo-color flex align-center space-x-3"
                    >
                      <span class="size-13 logo-color">{{
                        element.substring(0, element.indexOf('-v'))
                      }}</span>
                      <span class="size-13 font-semibold logo-color"
                        >9 visites</span
                      >
                    </a>
                  </div>
                  <div class="flex flex-col space-y-1.5">
                    <span
                      class="logo-color size-13 font-semibold block border-b pt-2 pb-1 mb-1.5"
                      >Hors Côte d'Ivoire (74)</span
                    >
                    <a
                      v-for="(element, j) in Lieux.filter((x) => {
                        return x.endsWith('-pays')
                      })"
                      :key="j + 'pays'"
                      class="logo-color flex align-center space-x-3"
                    >
                      <span class="size-13 logo-color">{{
                        element.substring(0, element.indexOf('-p'))
                      }}</span>
                      <span class="size-13 font-semibold logo-color"
                        >9 visites</span
                      >
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- <span
              class="logo-color font-semibold size-15 block w-fit h-centers pt-20 pb-20"
              >Aucune donnée à afficher pour l'instant</span
            > -->
          </div>
        </div>
      </div>
      <div class="flex space-x-4 align-center w-full">
        <div
          class="bg-white relative py-5 z-0 rounded border w-full h-full"
          :class="{ 'px-8': size > 1124, 'px-6': size <= 1124 }"
        >
          <div class="flex relative z-0 flex-col h-full">
            <div
              v-show="infosprop"
              class="border absolute z-10 mt-6 ml-10 l-none wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
            >
              Les propriétés avec le plus de visites, de messages et meilleur
              lieu de visite dans un mois.
            </div>
            <div
              class="flex relative z-0 space-x-3 justify-between align-center"
            >
              <div
                class="size-13 relative z-0 font-semibold logo-color over flex align-center"
              >
                Meilleures propriétés des 3 derniers mois
                <svg
                  class="transform rotate-180 mt-0.5 ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @mouseover="show('prop')"
                  @mouseleave="hide('prop')"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#9c9c9c"
                  />
                </svg>
              </div>
            </div>
            <div
              class="flex justify-center space-x-5"
              :class="{ 'space-x-5': size > 900, 'space-x-1': size <= 900 }"
            >
              <div
                v-for="k in 3"
                :key="k + 'ef'"
                class="column is-one-quarters"
              >
                <div>
                  <div class="size-12 color-363636f over text-c font-semibold">
                    Mars 2021
                  </div>
                </div>
                <homeproplarge></homeproplarge>
                <div class="border py-2 px-2.5">
                  <div class="flex align-center justify-between">
                    <div class="size-12 color-363636f over">Total visites</div>
                    <div class="size-16 font-semibold logo-color over">
                      18 K
                    </div>
                  </div>
                  <div class="flex align-center justify-between">
                    <div class="size-12 color-363636f over">Total messages</div>
                    <div class="size-16 font-semibold logo-color over">
                      18 K
                    </div>
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
            <!-- <span
              class="logo-color font-semibold size-15 block w-fit h-centers pt-20 pb-20"
              >Aucune donnée à afficher pour l'instant</span
            > -->
          </div>
        </div>
      </div>
      <div
        class="bg-white flex flex-col space-y-3 border rounded w-full px-6 py-5"
      >
        <stat></stat>
      </div>
      <div
        class="bg-white flex flex-col space-y-3 border rounded w-full h-fit px-6 py-5"
      >
        <div class="flex relative z-0 space-x-3 justify-between align-center">
          <div
            class="size-13 relative z-0 font-semibold logo-color over flex align-center"
          >
            Report Visites & Messages
          </div>
          <div class="flex align-center space-x-3 size-12 font-semibold">
            <div>
              <a
                class="size-12 hover-008489 font-semibold"
                :class="{
                  'cursor-default color-008489': daily,
                  'logo-color clickable': !daily,
                }"
                @click="
                  {
                    daily = !daily
                  }
                "
                >Report par jour</a
              >
            </div>
            <div>
              <a
                class="clickable size-12 hover-008489 font-semibold"
                :class="{
                  'cursor-default color-008489': !daily,
                  'logo-color clickable': daily,
                }"
                @click="
                  {
                    daily = !daily
                  }
                "
                >Report par semaine</a
              >
            </div>
          </div>
        </div>
        <div>
          <div class="size-13 color-363636f over mb-0.5">Mars 2021</div>
          <div class="flex relative z-0 space-x-3 justify-between align-center">
            <div class="flex align-center relative z-0 space-x-4">
              <div
                class="my-1 rounded relative z-0 font-semibold logo-color flex align-center"
              >
                <a
                  class="px-2 py-1 border rounded-l size-11"
                  :class="{
                    'bg-008489 border-008489s text-white cursor-default': monthis,
                    'logo-color clickable': !monthis,
                  }"
                  @click="
                    {
                      monthis = !monthis
                    }
                  "
                  >Ce mois</a
                >
                <a
                  class="px-2 py-1 border size-11 rounded-r"
                  :class="{
                    'bg-008489 border-008489s text-white cursor-default': !monthis,
                    'logo-color clickable': monthis,
                  }"
                  @click="
                    {
                      monthis = !monthis
                    }
                  "
                  >Le mois dernier</a
                >
              </div>
              <div
                class="my-1 rounded relative z-0 font-semibold logo-color flex align-center"
              >
                <a
                  class="px-2 border-l pt-0.5 border-t border-b rounded-l logo-color size-11"
                  ><label for="aaz" class="flex align-center container pb-1">
                    <span class="h-2 w-2 rounded-full dot-red"></span>
                    <span
                      class="w-fit size-11 ml-1 -mt-0.2 multichoice-categ"
                      :class="{
                        'color-008489': checkedCateg.includes('Visites'),
                      }"
                      >Visites</span
                    >
                    <input
                      id="aaz"
                      v-model="checkedCateg"
                      type="checkbox"
                      value="Visites"
                    />
                    <span class="checkmark"></span> </label
                ></a>
                <a class="px-2 border pt-0.5 size-11 rounded-r logo-color"
                  ><label for="aazz" class="flex align-center container pb-1">
                    <span class="h-2 w-2 rounded-full dot-green"></span
                    ><span
                      class="w-fit size-11 ml-1 -mt-0.2 multichoice-categ"
                      :class="{
                        'color-008489': checkedCateg.includes('Messages'),
                      }"
                      >Messages</span
                    >
                    <input
                      id="aazz"
                      v-model="checkedCateg"
                      type="checkbox"
                      value="Messages"
                    />
                    <span class="checkmark"></span> </label
                ></a>
              </div>
            </div>
            <div class="flex align-center space-x-3 size-12">
              <sortprop></sortprop>
            </div>
          </div>
        </div>
        <div>
          <canvas id="myChart" width="400" height="145"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from '@/chart/chart'
import Sortprop from '~/components/dropdown/Sortprop.vue'
import Homeproplarge from '~/components/propriete/Homeproplarge.vue'
import Stat from '~/components/stats/Stat.vue'
export default {
  components: { Sortprop, Homeproplarge, Stat },
  data() {
    return {
      config,
      infosmess: false,
      infosvisit: false,
      infosorigin: false,
      infoslive: false,
      quitmess: true,
      infosprop: false,
      quitprop: true,
      quitvisit: true,
      quitlive: true,
      quitorigin: true,
      searchorigin: '',
      origin: [
        'Abidjan-ville',
        'Yamoussoukro-ville',
        'Bouaké-ville',
        'Daloa-ville',
        'Korhogo-ville',
        'San-Pedro-ville',
        'Tunisie-pays',
        'Maroc-pays',
        'Liban-pays',
        'Etats-Unis-pays',
        'UK-pays',
        'Nigéria-pays',
      ],
      checkedCateg: [],
      monthis: true,
      daily: true,
    }
  },
  computed: {
    Lieux() {
      return this.origin.filter((x) =>
        x.toLowerCase().includes(this.searchorigin.toLowerCase())
      )
    },
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
  },
  // updated() {
  //   if (this.quitmess) this.infosmess = false
  //   if (this.quitvisit) this.infosvisit = false
  //   if (this.quitlive) this.infoslive = false
  //   if (this.quitorigin) this.infosorigin = false
  // },
  mounted() {
    console.log(this.config)
    // eslint-disable-next-line no-undef
    const myChart = new Chart(document.getElementById('myChart'), this.config)
    setTimeout(() => {
      myChart.update()
    }, 500)
  },
  methods: {
    show(val) {
      if (val === 'mess') this.quitmess = false
      else if (val === 'visit') this.quitvisit = false
      else if (val === 'origin') this.quitorigin = false
      else if (val === 'prop') this.quitprop = false
      else this.quitlive = false
      setTimeout(() => {
        if (val === 'mess') {
          if (!this.quitmess) this.infosmess = true
          else this.infosmess = false
        } else if (val === 'visit') {
          if (!this.quitvisit) this.infosvisit = true
          else this.infosvisit = false
        } else if (val === 'origin') {
          if (!this.quitorigin) this.infosorigin = true
          else this.infosorigin = false
        } else if (val === 'live') {
          if (!this.quitlive) this.infoslive = true
          else this.infoslive = false
        } else if (val === 'prop') {
          if (!this.quitprop) this.infosprop = true
          else this.infosprop = false
        }
      }, 300)
    },
    hide(val) {
      if (val === 'mess') {
        this.infosmess = false
        this.quitmess = true
      } else if (val === 'visit') {
        this.infosvisit = false
        this.quitvisit = true
      } else if (val === 'origin') {
        this.infosorigin = false
        this.quitorigin = true
      } else if (val === 'prop') {
        this.infosprop = false
        this.quitprop = true
      } else {
        this.infoslive = false
        this.quitlive = true
      }
    },
  },
}
</script>

<style scoped>
.dot-red {
  display: block;
  background-color: rgb(255, 19, 19);
}
.dot-green {
  display: block;
  background-color: rgb(0, 132, 137);
}
</style>
