<template>
  <div class="pt-10">
    <div class="w-full flex flex-col">
      <div class="oath-log flex flex-col space-y-10 relative">
        <div class="absolute w-full top-0 appearZ rounded-tl rounded-tr">
          <span
            class="block rounded-tl rounded-tr text-c bg-green-600 py-3 px-10 text-white font-semibold size-12"
            >Mot passe réinitialisé avec success √</span
          >
        </div>
        <div
          class="border bg-white rounded px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="text-center size-16 logo-color font-semibold mb-1">
            Connexion à Ofaloo Agentcenter
          </h4>
          <div class="w-full">
            <label for="username" class="size-13">Email</label>
            <br />
            <input
              id="username"
              v-model="email"
              type="email"
              class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
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
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="pwd" class="size-13">Mot de passe</label>
              <nuxt-link
                to="/ofalooagent/pwd-forgotten"
                class="color-008489 clickable underline-hover size-13"
                >Mot de passe oublié ?</nuxt-link
              >
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
          <div class="w-full flex align-center space-x-2 pt-1">
            <input
              id="senupd"
              type="checkbox"
              class="border rounded no-outlines outline-none"
            />
            <label for="senupd" class="size-12">Se souvenir</label>
          </div>
          <a
            class="button block btn-008489 border rounded-md flex align-center space-x-2 relative top-05x bottom-0x"
            @click="signin"
          >
            <span class="size-13 text-white font-semibold">Connexion </span></a
          >
          <div class="w-fit m-0-auto">
            <div
              class="flex flex-col sm:flex-row align-center text-center space-x-2 size-13 mt-5"
            >
              <span>Vous n'avez pas de compte?</span>
              <nuxt-link
                to="/ofalooagent/inscription"
                class="color-008489 underline-hover"
                >Créer un compte</nuxt-link
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
      email: '',
      pwderr: false,
      maierror: false,
      pwdhid: true,
    }
  },
  computed: {
    pwdhidden() {
      return this.pwdhid === true
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
      if (this.mailerror) {
        this.maierror = false
      }
    },
    pwd() {
      if (this.passerror) {
        this.pwderr = false
      }
    },
  },
  methods: {
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
      } else this.maierror = true

      if (this.$linker.pwdValidated(this.pwd)) {
        this.pwderr = false
      } else this.pwderr = true

      return this.mailerror === false && this.passerror === false
    },
    signin() {
      if (this.infosValidated());
    },
  },
}
</script>
