<template>
  <div>
    <div class="oath-log flex flex-col space-y-10">
      <div class="flex flex-col space-y-2">
        <h4 class="size-15 logo-color mb-3">
          Remplissez les champs suivants avec vos informations personnelles
        </h4>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full noclick">
            <label for="email" class="size-13">Email</label>
            <br />
            <input
              id="email"
              v-model="infos.email"
              type="email"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emailx" class="size-13">Nom</label>
            <br />
            <input
              id="emailx"
              v-model="name"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
            <p
              v-show="noname"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter votre nom s'il vous plaît (lettres de l'alphabet)
            </p>
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emailsx" class="size-13">Prénom</label>
            <br />
            <input
              id="emailsx"
              v-model="surname"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
            <p
              v-show="nosurname"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter votre prénom s'il vous plaît (lettres de
              l'alphabet)
            </p>
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emailssx" class="size-13">Téléphone</label>
            <br />
            <input
              id="emailssx"
              v-model="phone"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emsailssx" class="size-13">Adresse personnelle</label>
            <br />
            <input
              id="emsailssx"
              v-model="infos.adresse"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div>
            <label for="request" class="size-13">Pays de résidence</label>
            <br />
            <delcountryusauth @ctry="ctry"></delcountryusauth>
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="emasilx" class="size-13">Ville</label>
            <br />
            <input
              id="emasilx"
              v-model="infos.ville"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <div class="flex flex-col space-y-2 lg:w-1/3 md:w-2/5 sm:w-3/5 w-full">
          <div class="w-full">
            <label for="semailx" class="size-13">Code postal</label>
            <br />
            <input
              id="semailx"
              v-model="infos.cp"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <p
          v-show="noname || nosurname"
          class="size-12 appearZ text-red-700 leading-4 pt-1"
        >
          Veuillez corriger les erreurs indiquées ci-dessus
        </p>
        <div class="flex align-center space-x-5 py-5">
          <a
            class="button is-light relative top-05x border rounded-md flex align-center space-x-2"
            @click="cancel"
          >
            <span class="size-12 sm:px-5 px-0 logo-color font-semibold"
              >Annuler
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
import Delcountryusauth from '~/components/dropdown/Delcountryusauth.vue'
export default {
  components: { Delcountryusauth },
  data() {
    return {
      nameerror: false,
      surnameerror: false,
      accounting: false,
      phone: '',
      name: '',
      surname: '',
      infos: {
        email: '',
        pwd: '',
        name: '',
        surname: '',
        phone: '',
        adresse: '',
        pays: '',
        ville: '',
        cp: '',
      },
    }
  },
  computed: {
    has_email() {
      return this.emailed === true
    },
    creating() {
      return this.accounting === true
    },
    noname() {
      return this.nameerror === true
    },
    nosurname() {
      return this.surnameerror === true
    },
  },
  watch: {
    name(nv, ov) {
      if (this.nameerror) {
        this.nameerror = false
      }
      this.infos.name = nv
    },
    surname(nv, ov) {
      if (this.surnameerror) {
        this.surnameerror = false
      }
      this.infos.surname = nv
    },
    // phone(newval, oldval) {
    //   if (!newval.includes(' ')) {
    //     if (
    //       (newval.length === 1 && newval.lastIndexOf('+') === 0) ||
    //       (newval.length > 1 &&
    //         newval.lastIndexOf('+') === 0 &&
    //         !isNaN(newval.substr(1, newval.length - 1)) &&
    //         !newval.substr(1, newval.length - 1).includes('.')) ||
    //       (!isNaN(newval) && !newval.includes('.'))
    //     ) {
    //       this.infos.phone = newval
    //       this.phone = newval
    //     } else {
    //       this.infos.phone = oldval
    //       this.phone = oldval
    //     }
    //   } else {
    //     this.infos.phone = oldval
    //     this.phone = oldval
    //   }
    // },
  },
  beforeMount() {
    this.checkRegisterEmail()
    this.checkRegisterInfo()
  },
  methods: {
    ctry(val) {
      this.infos.pays = val
    },
    cancel() {
      sessionStorage.removeItem('register_email')
      sessionStorage.removeItem('paswword')
      this.$router.push('/ofalooagent/inscription')
    },
    save() {
      this.accounting = true
      if (this.name.length > 1 && this.$linker.onlyLetters(this.name))
        this.nameerror = false
      else this.nameerror = true

      if (this.surname.length > 1 && this.$linker.onlyLetters(this.surname))
        this.surnameerror = false
      else this.surnameerror = true

      if (!this.surnameerror && !this.nameerror) {
        // console.log(this.infos)

        if (sessionStorage.register_infos)
          sessionStorage.removeItem('register_infos')
        sessionStorage.setItem('register_infos', JSON.stringify(this.infos))
        this.$router.push('/ofalooagent/infos/infos-agence')
      }
      this.accounting = false
    },
    checkRegisterEmail() {
      if (sessionStorage.register_email) {
        if (
          this.$linker.emailValidated(sessionStorage.getItem('register_email'))
        )
          this.infos.email = sessionStorage.getItem('register_email')
        else location.replace('/ofalooagent/inscription')
      } else location.replace('/ofalooagent/inscription')

      if (sessionStorage.password) {
        if (this.$linker.pwdValidated(sessionStorage.getItem('password')))
          this.infos.pwd = sessionStorage.getItem('password')
        else location.replace('/ofalooagent/inscription')
      } else location.replace('/ofalooagent/inscription')
    },
    checkRegisterInfo() {
      if (sessionStorage.register_infos) {
        this.infos = JSON.parse(sessionStorage.getItem('register_infos'))
        this.name = this.infos.name
        this.surname = this.infos.surname
        this.phone = this.infos.phone
      }
    },
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
      } else this.maierror = true

      return this.mailerror === false
    },
    signup() {
      if (this.infosValidated());
    },
  },
}
</script>
