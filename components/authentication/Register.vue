<template>
  <div>
    <div class="w-full">
      <div class="oath-log flex flex-col space-y-10">
        <div
          class="border bg-white mt-10 rounded-md px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="text-center size-16 logo-color font-semibold mb-1">
            Inscription à Ofaloo Agentcenter
          </h4>
          <div class="w-full">
            <label for="email" class="size-13">Email</label>
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
              Désolé, cette adresse email est déjà utilisée !
            </p>
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="pwd" class="size-13">Mot de passe</label>
            </div>

            <div class="relative flex align-center">
              <input
                id="pwd"
                v-model="pwd"
                :type="pwdhidden ? 'password' : 'text'"
                class="border pr-8 w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
                :class="{
                  'border-red-700': passerror,
                  'border-green-700': $linker.pwdValidated(pwd),
                }"
              />
              <button
                class="bg-transparent no-outlines absolute right-0 mr-2 logo-color"
                @click="
                  {
                    pwdhid = !pwdhid
                  }
                "
              >
                <svg
                  v-show="pwdhidden"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <svg
                  v-show="!pwdhidden"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  ></path>
                </svg>
              </button>
            </div>
            <p
              v-show="passerror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Le mot de passe doit contenir au moins 8 caractères avec lettres &
              chiffres
            </p>
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="pwdx" class="size-13"
                >Mot de passe confirmation</label
              >
            </div>
            <input
              id="pwdx"
              v-model="pwdcf"
              :type="pwdhidden ? 'password' : 'text'"
              class="border pr-8 w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              :class="{
                'border-red-700s':
                  didpwdunmatch ||
                  ($linker.pwdValidated(pwd) &&
                    pwdcf.length >= pwd.length &&
                    !samepwd) ||
                  ($linker.pwdValidated(pwd) &&
                    pwdcf.length > 0 &&
                    pwdcf.length < pwd.length &&
                    !pwd.startsWith(pwdcf)),
                'border-green-700': samepwd,
              }"
            />
            <p
              v-show="
                ($linker.pwdValidated(pwd) &&
                  pwdcf.length >= pwd.length &&
                  !samepwd) ||
                didpwdunmatch ||
                ($linker.pwdValidated(pwd) &&
                  pwdcf.length > 0 &&
                  pwdcf.length < pwd.length &&
                  !pwd.startsWith(pwdcf))
              "
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Le mot de passe et la confirmation ne correspondent pas
            </p>
          </div>
          <a
            class="button relative top-05x border rounded-md flex align-center space-x-2"
            :class="{
              'noclick bg-gray-800': creating,
              'btn-008489': !creating,
            }"
            @click="signup"
          >
            <span class="size-12 text-white font-semibold">S'inscrire </span></a
          >
          <div class="text-center">
            <div class="inline-block size-13 mt-2">
              <span>En vous inscrivant, vous acceptez les </span>
              <nuxt-link
                to="/ofalooagent/condition-utilisation"
                class="color-008489 underline-hover"
                >conditions d'utilisations</nuxt-link
              >
            </div>
          </div>
          <div class="w-fit m-0-auto">
            <div class="flex align-center text-center space-x-2 size-13 mt-2">
              <span>Avez-vous déja un compte?</span>
              <nuxt-link
                to="/ofalooagent/connexion"
                class="color-008489 underline-hover"
                >Se connecter</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pwd: '',
      pwdcf: '',
      pwdandcf: false,
      user: '',
      email: '',
      pwderr: false,
      pwdcferr: false,
      maierror: false,
      pwdhid: true,
      notpwdok: false,
      accounting: false,
      livemailtaken: false,
      mailtaken: false,
      timestamp: 0,
      phone: '',
    }
  },
  computed: {
    didpwdunmatch() {
      return this.notpwdok === true
    },
    liverror() {
      return this.livemailtaken === true
    },
    noliverror() {
      return this.mailtaken === true
    },
    creating() {
      return this.accounting === true
    },
    samepwd() {
      return (
        this.$linker.pwdValidated(this.pwd) &&
        this.$linker.pwdValidated(this.pwdcf) &&
        this.pwd === this.pwdcf
      )
    },
    pwdhidden() {
      return this.pwdhid === true
    },
    passcferror() {
      return this.pwdcferr === true
    },
    passerror() {
      return this.pwderr === true
    },
    mailerror() {
      return this.maierror === true
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
    pwd() {
      if (this.passerror) {
        this.pwderr = false
      }
      this.notpwdok = false
    },
    pwdcf(newval, oldval) {
      if (newval.length < this.pwd.length && this.didpwdunmatch) {
        this.notpwdok = false
      }
    },
  },
  beforeMount() {
    this.checkRegisterEmail()
  },
  methods: {
    checkRegisterEmail() {
      if (sessionStorage.register_email) {
        if (
          this.$linker.emailValidated(sessionStorage.getItem('register_email'))
        )
          this.email = sessionStorage.getItem('register_email')
      }
    },
    async pendingmail() {
      if (this.$linker.emailValidated(this.email)) {
        const taken = await this.$axios.$post('agent/existence', {
          email: this.email,
        })
        if (taken.status === 'taken') {
          this.livemailtaken = true
        } else this.livemailtaken = false
      } else this.livemailtaken = false
    },
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
      } else this.maierror = true

      if (this.$linker.pwdValidated(this.pwd)) {
        this.pwderr = false
      } else this.pwderr = true

      if (this.$linker.pwdValidated(this.pwd) && this.samepwd) {
        this.notpwdok = false
      } else if (this.$linker.pwdValidated(this.pwd) && !this.samepwd)
        this.notpwdok = true

      return (
        this.mailerror === false &&
        this.passerror === false &&
        this.passcferror === false &&
        this.samepwd === true
      )
    },
    async signup() {
      if (this.infosValidated()) {
        this.accounting = true

        const taken = await this.$axios.$post('agent/existence', {
          email: this.email,
        })
        if (taken.status === 'taken') {
          this.mailtaken = true
        } else this.mailtaken = false

        if (!this.mailtaken) {
          sessionStorage.setItem('register_email', this.email)
          sessionStorage.setItem('password', this.pwd)
          this.$router.push('/ofalooagent/infos')
        }
        this.accounting = false
      } else if (sessionStorage.register_email) {
        sessionStorage.removeItem('register_email')
        sessionStorage.removeItem('password')
      }
    },
  },
}
</script>
