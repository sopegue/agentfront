<template>
  <div class="pt-10">
    <div class="w-full flex flex-col">
      <div class="oath-log flex flex-col space-y-10 relative">
        <div
          class="border bg-white rounded px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="text-center size-16 logo-color font-semibold mb-1">
            Connexion à Ofaloo Agentcenter
          </h4>
          <div class="w-full">
            <label for="username" class="size-13">Email</label>
            <br />
            <form @submit.prevent="signin">
              <input
                id="username"
                v-model="email"
                type="email"
                class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                :class="{
                  'border-red-700': mailerror,
                }"
              />
              <p
                v-show="mailerror"
                class="size-12 appearZ text-red-700 leading-4 pt-1"
              >
                Veuillez enter un email valide
              </p>
            </form>
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
            <form class="relative flex align-center" @submit.prevent="signin">
              <input
                id="pwd"
                v-model="pwd"
                :type="pwdhidden ? 'password' : 'text'"
                class="border pr-8 w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
                :class="{
                  'border-red-700': passerror,
                }"
              />
              <button></button>
              <button
                type="button"
                class="bg-transparent no-outlines absolute right-0 mr-2 logo-color"
                @click.stop="
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
            </form>
            <p
              v-show="passerror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter un mot de passe
            </p>
            <div v-if="inco" class="w-full top-0 appearZ pt-2">
              <span
                class="block rounded border border-red-600 text-red-600 text-c py-1 px-10 text-white font-semibold size-12"
                >Email et/ou mot de passe incorrects</span
              >
            </div>
            <div v-if="reqerr" class="w-full top-0 appearZ pt-2">
              <span
                class="block rounded border border-red-600 text-red-600 text-c py-1 px-10 text-white font-semibold size-12"
                >Oops désolé, une erreur s'est produite</span
              >
            </div>
          </div>
          <a
            class="button block btn-008489 border rounded-md flex align-center space-x-2 relative top-05x bottom-0x"
            :class="{ noclick: isloging }"
            @click.stop="signin"
          >
            <span
              class="size-13 flex items-center space-x-2 text-white font-semibold"
              ><span class="size-13 text-white font-semibold">Connexion</span>
              <span v-show="isloging" class="w-fit h-fit"
                ><i class="animate-spin fas fa-circle-notch color-white"></i
              ></span> </span
          ></a>
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
      logging: false,
      rememberme: [],
      nolog: false,
      err: false,
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
    isloging() {
      return this.logging === true
    },
    inco() {
      return this.nolog === true
    },
    reqerr() {
      return this.err === true
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

      if (this.pwd.length > 0) {
        this.pwderr = false
      } else this.pwderr = true

      return this.mailerror === false && this.passerror === false
    },
    signin() {
      if (this.infosValidated()) {
        this.nolog = false
        this.err = false
        this.logging = true
        this.$auth
          .loginWith('local', {
            data: {
              email: this.email,
              password: this.pwd,
              rememberme: true,
            },
          })
          .then((res) => {
            if (res.data.status === 200) {
              this.logging = false
              const tokenId = res.data.token.substr(
                0,
                res.data.token.indexOf('|')
              )
              const userId = this.$auth.user.id
              const hdzd = {
                odzd: userId,
                scds: tokenId,
              }
              localStorage.setItem('hdzd', JSON.stringify(hdzd))
              console.log('connected')
              location.assign('/dashboard')
            }
            if (res.data.status === 404) {
              this.logging = false
              this.nolog = true
              console.log('incorrects credentials')
            }
            if (res.data.status === 500) {
              this.logging = false
              this.err = true
              console.log('Error on request' + res)
            }
          })
          .catch(() => {
            this.logging = false
            this.err = true
            console.log('error client side')
          })
      }
    },
  },
}
</script>
