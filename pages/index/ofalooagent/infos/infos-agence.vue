<template>
  <div>
    <div class="oath-log flex flex-col space-y-10">
      <div class="flex flex-col space-y-2">
        <h4 class="size-15 logo-color mb-3">
          Remplissez les champs suivants avec les informations de votre agence
        </h4>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="email" class="size-13">Email de l'agence</label>
            <br />
            <input
              id="email"
              v-model="email"
              type="email"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              :class="{
                'border-red-700': mailerror,
                'border-green-700': $linker.emailValidated(email),
              }"
            />
            <p
              v-show="mailerror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter un email valide
            </p>
            <p
              v-show="liverror || noliverror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Désolé, cette adresse email est déjà utilisée
            </p>
          </div>
          <div class="w-full flex align-center space-x-1">
            <input
              id="senupd"
              v-model="princimail"
              type="checkbox"
              value="yes"
              class="border rounded no-outlines outline-none"
            />
            <label for="senupd" class="size-12"
              >Utiliser comme email principal</label
            >
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emailvx" class="size-13">Nom de l'agence</label>
            <br />
            <input
              id="emailvx"
              v-model="name"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              :class="{
                'border-green-700':
                  name.length >= 2 && $linker.onlyLetters(name),
              }"
            />
            <p
              v-show="noname"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter le nom de votre agence
            </p>
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div>
            <label for="request" class="size-13">Type de l'agence</label>
            <br />
            <typegence @type="typer"></typegence>
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emasssilx" class="size-13"
              >Numéro fiscal de l'agence (Optionnel)</label
            >
            <br />
            <input
              id="emasssilx"
              v-model="fiscal"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div>
            <label for="request" class="size-13"
              >Avez-vous déjà une agence en ligne ?</label
            >
            <br />
            <hasagence @old="oldgence"></hasagence>
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emailsvx" class="size-13">Téléphone de l'agence</label>
            <br />
            <input
              id="emailsvx"
              v-model="phone"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
            <p
              v-show="nophone"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez entrer un numéro de téléphone
            </p>
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emailsx" class="size-13">Adresse de l'agence</label>
            <br />
            <input
              id="emailsx"
              v-model="adresse"
              type="text"
              placeholder="Adresse en Côte d'Ivoire..."
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              :class="{
                'border-green-700': adresse.length >= 1,
              }"
            />
            <p
              v-show="unadresse"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter l'adresse de votre agence
            </p>
          </div>
        </div>
        <div class="flex flex-col lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <label class="size-13 pb-0.3 block">Ville de l'agence</label>
          <typeprop
            :placeholder="'Choisir une ville...'"
            :content="[
              'Abidjan',
              'Yamoussoukro',
              'Bouaké',
              'Daloa',
              'Korhogo',
              'Gagnoa',
              'Man',
              'San-Pedro',
            ]"
            @val="viller"
          ></typeprop>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="semailx" class="size-13">Code postal de l'agence</label>
            <br />
            <input
              id="semailx"
              v-model="cp"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <p
          v-show="oneerror"
          class="size-12 appearZ text-red-700 leading-4 pt-1"
        >
          Veuillez corriger les erreurs indiquées ci-dessus
        </p>
        <div class="flex align-center sm:space-x-5 space-x-3 py-5">
          <a
            class="button is-light relative top-05x border rounded-md flex align-center space-x-2"
            @click="$router.push('/ofalooagent/infos')"
          >
            <span class="size-12 sm:px-5 px-0 logo-color font-semibold"
              >Etape précédente
            </span></a
          >
          <a
            class="button relative top-05x border rounded-md flex align-center space-x-2"
            :class="{
              'noclick bg-gray-800': creating,
              'btn-008489': !creating,
            }"
            @click="save"
          >
            <span class="size-12 sm:px-5 px-0 text-white font-semibold block"
              >Enregister et continuer</span
            ></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Delcountry from '~/components/dropdown/Delcountry.vue'
import Hasagence from '~/components/dropdown/Hasagence.vue'
import Typegence from '~/components/dropdown/Typegence.vue'
import Typeprop from '~/components/dropdown/Typeprop.vue'
export default {
  components: { Typegence, Hasagence, Typeprop },
  data() {
    return {
      email: '',
      email_principal: '',
      name: '',
      type: 'personnal',
      fiscal: '',
      old_agence: 'no',
      phone: '',
      adresse: '',
      pays: "Côte d'Ivoire",
      ville: '',
      cp: '',
      maierror: false,
      nameerror: false,
      adrerror: false,
      livemailtaken: false,
      mailtaken: false,
      unphoned: false,
      timestamp: 0,

      accounting: false,
      princimail: [],
    }
  },
  computed: {
    oneerror() {
      return (
        this.maierror === true ||
        this.nameerror === true ||
        this.adrerror === true ||
        this.mailtaken === true
      )
    },
    liverror() {
      return this.livemailtaken === true
    },
    nophone() {
      return this.unphoned === true
    },
    noliverror() {
      return this.mailtaken === true
    },
    size() {
      return this.$store.state.size
    },
    creating() {
      return this.accounting === true
    },
    mailerror() {
      return this.maierror === true
    },
    noname() {
      return this.nameerror === true
    },
    unadresse() {
      return this.adrerror === true
    },
  },
  watch: {
    email() {
      if (this.mailerror || this.livemailtaken || this.mailtaken) {
        this.maierror = false
        this.livemailtaken = false
        this.mailtaken = false
      }
      if (this.timestamp === 0 || Date.now() - this.timestamp > 200) {
        this.timestamp = Date.now()
        this.pendingmail()
      }
    },
    name() {
      if (this.nameerror) {
        this.nameerror = false
      }
    },
    adresse() {
      if (this.adrerror) {
        this.adrerror = false
      }
    },
    ville() {
      if (this.villeerror) {
        this.villeerror = false
      }
    },
    fiscal(nv, ov) {
      if (this.$linker.isNumber(nv)) this.fiscal = nv
      else this.fiscal = ov
    },
    phone(newval, oldval) {
      this.unphoned = false
      if (!newval.includes(' ')) {
        if (
          (newval.length === 1 && newval.lastIndexOf('+') === 0) ||
          (newval.length > 1 &&
            newval.lastIndexOf('+') === 0 &&
            !isNaN(newval.substr(1, newval.length - 1)) &&
            !newval.substr(1, newval.length - 1).includes('.')) ||
          (!isNaN(newval) && !newval.includes('.'))
        )
          this.phone = newval
        else this.phone = oldval
      } else this.phone = oldval
    },
    pwdcf(newval, oldval) {
      if (newval.length < this.pwd.length && this.didpwdunmatch) {
        this.notpwdok = false
      }
    },
  },
  beforeMount() {
    this.checkAgenceInfo()
  },
  methods: {
    viller(val) {
      this.ville = val
    },
    async freemail() {
      const taken = await this.$axios.$post('agence/existence', {
        email: this.email,
      })
      if (taken.status === 'taken') {
        this.mailtaken = true
      } else if (taken.status === 'free') {
        this.mailtaken = false
      } else this.mailtaken = true
    },
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
        this.freemail()
        if (this.princimail.length > 0) this.email_principal = this.email
        else this.email_principal = sessionStorage.getItem('register_email')
      } else this.maierror = true

      if (this.name.length > 1 && this.$linker.onlyLetters(this.name))
        this.nameerror = false
      else this.nameerror = true

      if (this.adresse.length > 0) this.adrerror = false
      else this.adrerror = true

      if (this.phone.length > 0) this.unphoned = false
      else this.unphoned = true

      return (
        this.maierror === false &&
        this.mailtaken === false &&
        this.nameerror === false &&
        this.adrerror === false
      )
    },
    checkAgenceInfo() {
      if (sessionStorage.agence_infos) {
        const agence = JSON.parse(sessionStorage.getItem('agence_infos'))
        this.email = agence.email
        this.email_principal = agence.email_principal
        this.name = agence.name
        this.type = agence.type
        this.fiscal = agence.fiscal
        this.old_agence = agence.old_agence
        this.phone = agence.phone
        this.adresse = agence.adr
        this.ville = agence.ville
        this.cp = agence.cp
        if (this.email === this.email_principal) this.princimail = ['yes']
        else this.princimail = []
      }
      if (!sessionStorage.register_infos) {
        location.replace('/ofalooagent/infos')
      }
    },
    save() {
      this.accounting = true
      if (this.infosValidated()) {
        const agenceinfos = {
          email: this.email,
          email_principal: this.email_principal,
          name: this.name,
          type: this.type,
          fiscal: this.fiscal,
          old_agence: this.old_agence,
          phone: this.phone,
          adr: this.adresse,
          ville: this.ville,
          cp: this.cp,
        }
        if (sessionStorage.agence_infos)
          sessionStorage.removeItem('agence_infos')
        sessionStorage.setItem('agence_infos', JSON.stringify(agenceinfos))
        location.assign('/ofalooagent/infos/recapitulatif')
      }
      this.accounting = false
    },
    async pendingmail() {
      if (this.$linker.emailValidated(this.email)) {
        const taken = await this.$axios.$post('agence/existence', {
          email: this.email,
        })
        if (taken.status === 'taken') {
          this.livemailtaken = true
        } else this.livemailtaken = false
      } else this.livemailtaken = false
    },
    typer(val) {
      if (val.includes('personnelle')) this.type = 'personnal'
      else if (val.includes('privée')) this.type = 'private'
      else this.type = 'public'
    },
    oldgence(val) {
      if (val.includes('Non')) this.old_agence = 'no'
      else this.old_agence = 'yes'
    },
  },
}
</script>
