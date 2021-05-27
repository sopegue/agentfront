<template>
  <div class="bg-white px-5">
    <div class="mb-4 flex align-center justify-between space-x-5">
      <h4 class="logo-color size-15 font-semibold mb-1">Mes propriétés</h4>
    </div>
    <div class="flex align-center space-x-3 border-b pb-2 justify-between">
      <div>
        <searchbar :reinit="reinit" @search="ss"></searchbar>
      </div>
      <nuxt-link
        to="/dashboard/proprietes/mes-proprietes/new"
        class="border-none flex align-center size-12 text-white px-3.5 pb-2 py-2 rounded button btn-008489 self-end"
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
      <div v-if="!loading && tot > 0" class="flex space-x-5 align-center pb-2">
        <div class="flex align-center space-x-5">
          <span class="logo-color size-13"
            >{{ page === 1 ? 1 : (page * 15) / page + 1 }} -
            {{ tot >= page * 15 ? page * 15 : tot }} sur
            {{ tot }} resultat(s)<span v-if="search !== ''" class="size-13"
              >, mot clé
              <span class="font-semibold size-13">"{{ search }}"</span></span
            ></span
          >
        </div>
      </div>
      <div v-else-if="tot <= 0" class="flex space-x-5 align-center pb-2">
        <div class="flex align-center space-x-5">
          <span class="logo-color size-13"
            >0 résultats<span v-if="search !== ''" class="size-13"
              >, mot clé
              <span class="font-semibold size-13">"{{ search }}"</span></span
            ></span
          >
        </div>
      </div>
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
              class="border-none size-12 text-white px-5 pb-1.5 rounded button is-light"
              @click="initialiser"
            >
              Réinitialiser
            </button>
            <button
              class="border-none size-12 text-white px-5 pb-1.5 rounded button btn-008489"
              @click="gone"
            >
              Appliquer
            </button>
          </div>
        </div>
        <sortres :sort="sort" @res="res"></sortres>
      </div>
      <div class="flex align-center justify-center w-full flex-wrap">
        <optionadvanced
          :what="'typeloc'"
          :left="true"
          :reinit="reinit"
          :check="
            $route.query.t_type
              ? Array.isArray($route.query.t_type)
                ? $route.query.t_type
                : $route.query.t_type !== ''
                ? [$route.query.t_type]
                : []
              : []
          "
          :currencies="[
            'Ventes et locations',
            'Vente totale',
            'Vente partielle',
            'Location totale',
            'Location partielle',
          ]"
          @deal="deal"
          @loc="loc"
        ></optionadvanced
        ><optionadvanced
          :what="'typeprop'"
          :left="true"
          :reinit="reinit"
          :check="
            $route.query.t_prop
              ? Array.isArray($route.query.t_prop)
                ? $route.query.t_prop
                : $route.query.t_prop !== ''
                ? [$route.query.t_prop]
                : []
              : []
          "
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
          @prop="prop"
          @deal="deal"
        ></optionadvanced
        ><optionadvanced
          :what="'bed'"
          :left="true"
          :reinit="reinit"
          :piece="$route.query.bed ? $route.query.bed : '-1'"
          :currencies="[
            'Tous types de pièces',
            '1 pièce et plus',
            '2 pièces et plus',
            '3 pièces et plus',
            '4 pièces et plus',
            '5 pièces et plus',
          ]"
          @deal="deal"
          @bed="beding"
        ></optionadvanced
        ><optionadvanced
          :what="'price'"
          :left="true"
          :reinit="reinit"
          :pmin="$route.query.p_min ? $route.query.p_min : '-1'"
          :pmax="$route.query.p_max ? $route.query.p_max : '-1'"
          :currencies="['Tous types de prix']"
          @deal="deal"
          @price="price"
        ></optionadvanced
        ><optionadvanced
          :what="'size'"
          :left="true"
          :reinit="reinit"
          :smin="$route.query.s_min ? $route.query.s_min : '-1'"
          :smax="$route.query.s_max ? $route.query.s_max : '-1'"
          :currencies="['Tous types de taille']"
          @deal="deal"
          @size="sizing"
        ></optionadvanced>
        <optionadvanced
          :what="'typecarac'"
          :right="true"
          :reinit="reinit"
          :check="
            $route.query.t_carac
              ? Array.isArray($route.query.t_carac)
                ? $route.query.t_carac
                : $route.query.t_carac !== ''
                ? [$route.query.t_carac]
                : []
              : []
          "
          :currencies="all"
          @deal="deal"
          @carac="carac"
        ></optionadvanced>
        <optionadvanced
          :what="'typedispo'"
          :right="true"
          :reinit="reinit"
          :check="
            $route.query.t_dispo
              ? Array.isArray($route.query.t_dispo)
                ? $route.query.t_dispo
                : $route.query.t_dispo !== ''
                ? [$route.query.t_dispo]
                : []
              : []
          "
          :currencies="['Disponible(s)', 'Vendue(s)', 'Louée(s)']"
          @deal="deal"
          @dispo="dispo"
        ></optionadvanced>
      </div>
    </div>
    <div class="mes-props">
      <div v-if="loading" class="flex justify-center pt-15 pb-10">
        <span>Chargement des propriétés...</span>
      </div>
      <div v-else-if="house.length" class="flex flex-wrap">
        <homeprop
          v-for="(h, i) in house"
          :key="i"
          :property="h"
          class="column is-one-quarters"
        ></homeprop>
      </div>
      <div v-else class="flex justify-center pt-15 pb-10">
        <span>Aucun résultat.</span>
      </div>
      <div class="my-3">
        <pagination
          v-show="!loading && Math.ceil(tot / 15) > 1"
          :curr="page"
          :total="tot"
          @page="paging"
        ></pagination>
      </div>
    </div>
    <!-- <span
      class="logo-color font-semibold size-15 block w-fit h-centers pt-20 pb-20"
      >Vos propriétés seront affichées ici</span
    > -->
  </div>
</template>

<script>
import { all } from '@/options/all'
import Optionadvanced from '~/components/dropdown/Optionadvanced.vue'
import Sortres from '~/components/dropdown/Sortres.vue'
import Pagination from '~/components/pagination/Pagination.vue'
import Homeprop from '~/components/propriete/Homeprop.vue'
import Searchbar from '~/components/search/Searchbar.vue'
export default {
  components: { Searchbar, Sortres, Optionadvanced, Homeprop, Pagination },
  // middleware: 'prop',

  data() {
    return {
      all,
      init: false,
      properties: { data: [] },
      sort: '',
      old: '',
      curr: 1,
      total: 0,
      op: 0,
      bed: -1,
      p_min: -1,
      p_max: -1,
      s_min: -1,
      s_max: -1,
      t_type: [],
      t_prop: [],
      t_carac: [],
      t_dispo: [],
      load: false,
      search: '',
      irl: '/dashboard/proprietes/mes-proprietes?',
    }
  },
  computed: {
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
    house() {
      return this.properties.data.length ? this.properties.data : []
    },
    page() {
      return this.curr
    },
    tot() {
      return this.total
    },
    urlfrom() {
      return this.$store.state.url
    },
    nb() {
      return this.op
    },
    reinit() {
      return this.init === true
    },
    loading() {
      return this.load === true
    },
  },
  watch: {
    nb(nv, ov) {
      if (nv > 6) {
        this.init = false
        this.op = 0
        this.bed = -1
        this.p_min = -1
        this.p_max = -1
        this.s_min = -1
        this.s_max = -1
        this.curr = 1
        this.irl = '/dashboard/proprietes/mes-proprietes?'
        this.$router.push(this.irl)
        setTimeout(() => {
          this.gone()
        }, 10)
      }
    },
  },
  // watchQuery: true,
  created() {
    this.sort = this.$route.query.tri
    if (
      ![
        'plus-recent',
        'prix-croissant',
        'prix-decroissant',
        'plus-ancien',
      ].includes(this.sort)
    ) {
      this.sort = 'plus-recent'
    }
    if (
      this.$route.query.search &&
      this.$route.query.search !== null &&
      this.$route.query.search !== ''
    ) {
      if (!Array.isArray(this.$route.query.search)) {
        this.search = this.$route.query.search.replace('--', ', ')
      }
    }
    this.load = true
    this.make()
  },
  methods: {
    async fill() {
      this.load = true
      this.properties = await fetch(
        'https://ofalooback.herokuapp.com/api/properties/bytype/Studio'
      ).then((res) => res.json())

      this.load = false
    },
    initialiser() {
      this.init = true
    },
    ss(val) {
      this.irl = '/dashboard/proprietes/mes-proprietes?'
      this.irl += 'search=' + val + '&'
      this.gone()
    },
    deal() {
      this.op++
    },
    res(val) {
      this.sort = val
      this.gone()
    },
    loc(val) {
      if (val.length > 0) {
        this.t_type = val.slice(1)
      } else this.t_type = []
    },
    prop(val) {
      if (val.length > 0) {
        this.t_prop = val.slice(1)
      } else this.t_prop = []
    },
    carac(val) {
      if (val.length > 0) {
        this.t_carac = val.slice(1)
      } else this.t_carac = []
    },
    dispo(val) {
      if (val.length > 0) {
        this.t_dispo = val.slice(1)
      } else this.t_dispo = []
      // console.log(this.t_dispo)
    },
    sizing(val) {
      this.s_min = val.min
      this.s_max = val.max
    },
    paging(val) {
      this.make(val).then(() => {
        setTimeout(() => {
          this.scrolltop()
          this.curr = val
        }, 10)
      })
    },
    price(val) {
      this.p_min = val.min
      this.p_max = val.max
    },
    beding(val) {
      if (
        [
          '1 pièce et plus',
          '2 pièces et plus',
          '3 pièces et plus',
          '4 pièces et plus',
          '5 pièces et plus',
        ].includes(val)
      ) {
        this.bed = +val.charAt(0)
      } else {
        this.bed = -1
      }
    },
    async make(val = 1) {
      const data = await this.$axios.$post(
        'https://ofalooback.herokuapp.com/api/agent/properties/search?page=' +
          val,
        {
          query: this.$route.query,
          user: this.$auth.loggedIn ? this.$auth.user.id : -1,
        }
      )
      this.load = false
      if (data.data.length > 0) {
        this.properties.data = data.data
        this.total = data.meta.total
      } else {
        this.properties.data = []
        this.total = 0
      }
    },
    scrolltop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    gone() {
      this.load = true
      if (this.sort === '') {
        if (this.old === '') this.sort = 'plus-recent'
        else this.sort = this.old
      } else {
        this.old = this.sort
      }
      // eslint-disable-next-line no-var
      let url = this.irl + 'tri=' + this.sort
      if (this.t_type.length > 0 && this.t_type.length < 4) {
        this.t_type.forEach((element) => {
          url += '&t_type=' + element.replace(/\s/g, '--')
        })
      }
      if (this.t_prop.length > 0 && this.t_prop.length < 7) {
        this.t_prop.forEach((element) => {
          url += '&t_prop=' + element.replace(/\s/g, '--')
        })
      }
      if (this.t_carac.length > 0 && this.t_carac.length < 26) {
        this.t_carac.forEach((element) => {
          url += '&t_carac=' + element.replace(/\s/g, '--')
        })
      }
      if (this.t_dispo.length > 0) {
        this.t_dispo.forEach((element) => {
          url += '&t_dispo=' + element.replace(/\s/g, '--')
        })
      }
      if (this.s_min > -1) {
        url += '&s_min=' + this.s_min
      }
      if (this.s_max > -1) {
        url += '&s_max=' + this.s_max
      }
      if (this.p_min > -1) {
        url += '&p_min=' + this.p_min
      }
      if (this.p_max > -1) {
        url += '&p_max=' + this.p_max
      }
      if (this.bed > -1) {
        url += '&bed=' + this.bed
      }
      this.$router.push(url)
      setTimeout(() => {
        if (
          this.$route.query.search &&
          this.$route.query.search !== null &&
          this.$route.query.search !== ''
        ) {
          if (!Array.isArray(this.$route.query.search)) {
            this.search = this.$route.query.search.replace('--', ', ')
          }
        }
        this.make()
      }, 10)
    },
  },
}
</script>

<style scoped></style>
