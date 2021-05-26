<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center space-x-1 button bg-transparent border-l clickable select-none px-3"
            @click="
              {
                focused = !focused
              }
            "
          >
            <div class="flex align-center">
              <span
                class="size-12 font-semibold block w-fit logo-color wmax128 over"
                ><span v-show="what === 'date'" class="logo-color size-12"
                  >Date d'arrivée ({{ currency }})</span
                >
                <span v-show="what !== 'date'" class="logo-color size-12">{{
                  currency
                }}</span></span
              >
              <svg
                class="w-4 h-4 relative top-03x ml-px transform logo-color"
                :class="{ 'rotate-180 trans-x300': focused }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </client-only>
      </div>
      <div
        id="dropdown-menu"
        class="dropdown-menu walele"
        role="menu"
        :class="{ left: left, right: right }"
      >
        <div class="dropdown-content bg-white border h231max overflow-y-auto">
          <div
            v-show="
              what === 'typeprop' ||
              what === 'typeloc' ||
              what === 'typecarac' ||
              what === 'typedispo'
            "
          >
            <a
              v-for="(element, i) in currencies"
              :key="i"
              class="dropdown-item clickable flex align-center space-x-1"
            >
              <span
                v-show="i === 0"
                class="size-125"
                :class="{ 'font-semibold': currency === element }"
                @click="setcur(element)"
                >{{ element }}</span
              >
              <label
                v-show="i > 0"
                class="flex w-full h-full align-center container"
                ><span
                  class="size-125 -mt-012x multichoice-categ"
                  :class="{
                    'font-semibold color-004e66': ischecked(element),
                  }"
                  >{{ element }}</span
                >
                <input
                  v-model="checkedCateg"
                  type="checkbox"
                  :value="element"
                />
                <span class="checkmark"></span>
              </label>
            </a>
          </div>
          <div v-show="what === 'bed'">
            <a
              v-for="(element, i) in currencies"
              :key="i"
              class="dropdown-item clickable flex align-center space-x-1"
              @click="setcur(element)"
            >
              <span
                class="size-125"
                :class="{ 'font-semibold': currency === element }"
                >{{ element }}</span
              >
            </a>
          </div>
          <div v-show="what === 'price'">
            <a
              v-for="(element, i) in currencies"
              :key="i"
              class="dropdown-item clickable flex align-center space-x-1"
              @click="setcur(element)"
            >
              <span
                class="size-125"
                :class="{ 'font-semibold': currency === element }"
                >{{ element }}</span
              >
            </a>
            <hr class="dropdown-divider" />
            <div class="px-4">
              <div class="w-fit flex align-center space-x-2 m-0-auto">
                <label for="minpricecateg" class="size-12 text-center">
                  <span class="block mb-1 size-12">Min (XOF)</span>
                  <input
                    v-model="min"
                    placeholder="Prix min"
                    type="text"
                    class="border rounded size-12 w-18 text-center p-1 no-outlines hover:shadow-sm"
                  />
                </label>
                <span class="h-fit w-fit mt-5">⁓</span>
                <label for="maxpricecateg" class="size-12 text-center">
                  <span class="block mb-1 size-12">Max (XOF)</span>
                  <input
                    v-model="max"
                    type="text"
                    placeholder="Prix max"
                    class="border rounded size-12 w-18 text-center p-1 no-outlines hover:shadow-sm"
                  />
                </label>
              </div>
              <div class="m-0-auto w-full pt-4 pb-2">
                <button
                  class="btn-008489 px-3 pb-1 w-full rounded no-outlines"
                  @click="setprice"
                >
                  <span class="text-white size-11 h-fit font-semibold"
                    >Appliquer les prix</span
                  >
                </button>
              </div>
            </div>
          </div>
          <div v-show="what === 'size'">
            <a
              v-for="(element, i) in currencies"
              :key="i"
              class="dropdown-item clickable flex align-center space-x-1"
              @click="setcur(element)"
            >
              <span
                class="size-125"
                :class="{ 'font-semibold': currency === element }"
                >{{ element }}</span
              >
            </a>
            <hr class="dropdown-divider" />
            <div class="px-4">
              <div class="w-fit flex align-center space-x-2 m-0-auto">
                <label for="minpricecateg" class="size-12 text-center">
                  <span class="block mb-1 size-12">Min (m²)</span>
                  <input
                    v-model="min"
                    placeholder="Taille min"
                    type="text"
                    class="border rounded size-12 w-18 text-center p-1 no-outlines hover:shadow-sm"
                  />
                </label>
                <span class="h-fit w-fit mt-5">⁓</span>
                <label for="maxpricecateg" class="size-12 text-center">
                  <span class="block mb-1 size-12">Max (m²)</span>
                  <input
                    v-model="max"
                    type="text"
                    placeholder="Taille max"
                    class="border rounded size-12 w-18 text-center p-1 no-outlines hover:shadow-sm"
                  />
                </label>
              </div>
              <div class="m-0-auto w-full pt-4 pb-2">
                <button
                  class="btn-008489 px-3 pb-1 w-full rounded no-outlines"
                  @click="setsize"
                >
                  <span class="text-white size-11 h-fit font-semibold"
                    >Appliquer les tailles</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import newVue from '~/pages/dashboard/proprietes/mes-proprietes/new.vue'
export default {
  props: {
    what: {
      type: String,
      default: '',
    },
    left: {
      type: Boolean,
      default: false,
    },
    reinit: {
      type: Boolean,
      default: false,
    },
    pmin: {
      type: String,
      default: '-1',
    },
    pmax: {
      type: String,
      default: '-1',
    },
    smin: {
      type: String,
      default: '-1',
    },
    smax: {
      type: String,
      default: '-1',
    },
    piece: {
      type: String,
      default: '-1',
    },
    currencies: {
      type: Array,
      default: () => ['yo'],
    },
    check: {
      type: Array,
      default: () => [],
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
      currency: '',
      checkedCateg: [],
      max: '',
      min: '',
      date: new Date(),
      currentdate: new Date(),
    }
  },
  computed: {
    dates: {
      get() {
        return this.date
      },
      set(newvalue) {
        if (newvalue >= this.date && newvalue >= this.currentdate)
          this.date = newvalue.toDateString()
      },
    },
    init() {
      return this.reinit === true
    },
  },
  watch: {
    checkedCateg(newv, oldv) {
      if (newv.length === 1) {
        this.currency = this.currencies[0]
      } else if (newv.length === 2) {
        this.currency = newv[1]
      } else if (newv.length > 2) {
        if (this.what.includes('type'))
          this.currency =
            '+ ' + (newv.length - 1).toString() + ' options sélectionnées'
      }
      if (this.what === 'typeprop') {
        this.$emit('prop', newv)
      }
      if (this.what === 'typeloc') {
        this.$emit('loc', newv)
      }
      if (this.what === 'typecarac') {
        this.$emit('carac', newv)
      }
      if (this.what === 'typedispo') {
        this.$emit('dispo', newv)
      }
    },
    min(newcateg, oldcateg) {
      if (!newcateg.toString().includes(' ')) {
        if (!isNaN(newcateg)) {
          this.min = newcateg
        } else {
          this.min = oldcateg
        }
      } else {
        this.min = oldcateg
      }
    },
    max(newcateg, oldcateg) {
      if (!newcateg.toString().includes(' ')) {
        if (!isNaN(newcateg)) {
          this.max = newcateg
        } else {
          this.max = oldcateg
        }
      } else {
        this.max = oldcateg
      }
    },
    currency(newv, oldv) {
      console.log('reinit')
      if (newv === this.currencies[0]) {
        this.checkedCateg = [this.currencies[0]]
      }
    },
    init(newv, oldv) {
      console.log('reinit')
      if (newv) {
        this.currency = this.currencies[0]
        this.checkedCateg = [this.currencies[0]]
        this.min = ''
        this.max = ''
        this.$emit('deal')
      }
    },
  },
  mounted() {
    this.currency = this.currencies[0]
    this.checkedCateg = [this.currencies[0]]
    this.checkQuery()
  },
  methods: {
    checkQuery() {
      if (this.what === 'typeloc' || this.what === 'typeprop') {
        if (this.check.length > 0) {
          this.checkedCateg =
            this.what === 'typeloc'
              ? ['Ventes et locations']
              : ['Tous types de propriétés']
          this.check.forEach((element) => {
            const el = element.replace(/--/g, ' ')
            if (this.currencies.includes(el)) this.checkedCateg.push(el)
          })
        }
      }
      if (this.what === 'typecarac' || this.what === 'typedispo') {
        if (this.check.length > 0) {
          this.checkedCateg =
            this.what === 'typecarac'
              ? ['Toutes caractéristiques']
              : ['Disponible(s)']
          this.check.forEach((element) => {
            const el = element.replace(/--/g, ' ')
            if (this.currencies.includes(el)) this.checkedCateg.push(el)
          })
        }
      }
      if (this.what === 'bed') {
        if (+this.piece > -1) {
          if (+this.piece === 1) {
            this.checkedCateg = [
              'Tous types de pièces',
              this.piece + ' pièce et plus',
            ]
            this.setcur(this.piece + ' pièce et plus')
          } else if ([2, 3, 4, 5].includes(+this.piece)) {
            this.checkedCateg = [
              'Tous types de pièces',
              this.piece + ' pièces et plus',
            ]
            this.setcur(this.piece + ' pièces et plus')
          }
        } else {
          this.checkedCateg = ['Tous types de pièces']
          this.setcur('Tous types de pièces')
        }
      }
      if (this.what === 'price') {
        if (+this.pmin > -1 || +this.pmax > -1) {
          this.checkedCateg = []
          if (+this.pmin > -1) {
            this.min = this.pmin
            this.setprice()
          }
          if (+this.pmax > -1) {
            this.max = this.pmax
            this.setprice()
          }
        } else {
          this.setcur('Tous types de prix')
          this.checkedCateg = ['Tous types de prix']
        }
      }
      if (this.what === 'size') {
        if (+this.smin > -1 || +this.smax > -1) {
          this.checkedCateg = []
          if (+this.smin > -1) {
            this.min = this.smin
            this.setsize()
          }
          if (+this.smax > -1) {
            this.max = this.smax
            this.setsize()
          }
        } else {
          this.setcur('Tous types de taille')
          this.checkedCateg = ['Tous types de taille']
        }
      }
    },
    hide() {
      this.focused = false
    },
    setcur(cur) {
      this.currency = cur
      if (this.what === 'bed') {
        this.$emit(
          'bed',
          this.currency === 'Tous types de pièces' ? '-1' : this.currency
        )
        this.hide()
      }
      if (this.what === 'size') {
        this.$emit('size', { min: -1, max: -1 })
        this.hide()
      }
      if (this.what === 'price') {
        this.$emit('price', { min: -1, max: -1 })
        this.hide()
      }
    },
    ischecked(value) {
      return this.checkedCateg.includes(value)
    },
    formatMoney(val) {
      let money = ''
      let reverse = ''
      let i = 0
      for (let index = val.length - 1; index >= 0; index--) {
        money = money + val[index]
        if (i === 2) {
          money = money + ' '
          i = 0
        } else i++
      }
      for (let index = money.length - 1; index >= 0; index--) {
        reverse = reverse + money[index]
      }
      return reverse
    },
    setprice() {
      if (this.min !== '' && this.max !== '') {
        if (+this.min <= +this.max) {
          this.$emit('price', { min: +this.min, max: +this.max })
          this.currency =
            'Min: ' +
            this.formatMoney(this.min) +
            ' FCFA & Max: ' +
            this.formatMoney(this.max) +
            ' FCFA'
        }
        if (+this.min > +this.max) {
          this.$emit('price', { min: +this.min, max: -1 })
          this.max = ''
          this.currency = 'Min: ' + this.formatMoney(this.min) + ' FCFA'
        }
      } else if (this.min === '' && this.max !== '') {
        this.$emit('price', { max: +this.max, min: -1 })
        this.currency = 'Max: ' + this.formatMoney(this.max) + ' FCFA'
      } else if (this.max === '' && this.min !== '') {
        this.$emit('price', { min: +this.min, max: -1 })
        this.currency = 'Min: ' + this.formatMoney(this.min) + ' FCFA'
      }
      this.hide()
    },
    setsize() {
      if (this.min !== '' && this.max !== '') {
        if (+this.min <= +this.max) {
          this.$emit('size', { min: +this.min, max: +this.max })
          this.currency =
            'Min: ' +
            this.formatMoney(this.min) +
            ' m² & Max: ' +
            this.formatMoney(this.max) +
            ' m²'
        }
        if (+this.min > +this.max) {
          this.$emit('size', { min: +this.min, max: -1 })
          this.max = ''
          this.currency = 'Min: ' + this.formatMoney(this.min) + ' m²'
        }
      } else if (this.min === '' && this.max !== '') {
        this.$emit('size', { max: +this.max, min: -1 })
        this.currency = 'Max: ' + this.formatMoney(this.max) + ' m²'
      } else if (this.max === '' && this.min !== '') {
        this.$emit('size', { min: +this.min, max: -1 })
        this.currency = 'Min: ' + this.formatMoney(this.min) + ' m²'
      }
      this.hide()
    },
  },
}
</script>
<style scoped>
input::placeholder {
  font-size: 13px !important;
}
.walele {
  animation: appear 0.2s;
  top: 1.75rem !important;
}
.right {
  right: 0 !important;
}
.left {
  left: 0 !important;
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
