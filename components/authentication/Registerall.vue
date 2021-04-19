<template>
  <div>
    <div class="w-full">
      <div class="oath-log flex flex-col space-y-10">
        <div
          class="border bg-white mt-10 rounded-md px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="text-center size-16 logo-color font-semibold mb-1">
            Inscription à Ofaloo
          </h4>
          <!-- <div class="w-full">
            <label for="firstn" class="size-14">First Name</label>
            <br />
            <input
              id="firstn"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full">
            <label for="lastn" class="size-14">Last Name</label>
            <br />
            <input
              id="last"
              type="email"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div> -->
          <div class="w-full">
            <label for="email" class="size-14">Email</label>
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
          </div>
          <div class="w-full">
            <label for="username" class="size-14">Nom</label>
            <br />
            <input
              id="username"
              autocomplete="none"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full">
            <label for="userdname" class="size-14">Prénom</label>
            <br />
            <input
              id="userdname"
              autocomplete="none"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="pwd" class="size-14">Mot de passe</label>
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
              <label for="pwdx" class="size-14"
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
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="tellnum" class="size-14">Téléphone (Optionnel)</label>
            </div>
            <input
              id="tellnum"
              v-model="phone"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
          <!-- <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="dress" class="size-14">Adress</label>
            </div>
            <input
              id="dress"
              type="text"
              placeholder="Abuja Nigeria – 900001"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="dresss" class="size-14">City</label>
            </div>
            <input
              id="dresss"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full flex align-center space-x-2">
            <div>
              <div class="flex align-center justify-between">
                <label for="ctry" class="size-14">Country</label>
              </div>
              <Country
                :left="true"
                title="country"
                :content="[
                  'Nigeria',
                  'Ivory coast',
                  'Tunisia',
                  'Cameroon',
                  'Kenya',
                  'Uganda',
                  'South Africa',
                  'Ghana',
                  'Morocco',
                  'Rwanda',
                ]"
              />
            </div>
            <div>
              <div class="flex align-center justify-between">
                <label for="city" class="size-14">State</label>
              </div>
              <Country
                title="state"
                :left="true"
                :content="[
                  'Abidjan',
                  'Bouake',
                  'Korhogo',
                  'Yamoussoukro',
                  'Daloa',
                ]"
              />
            </div>
            <div>
              <div class="flex align-center justify-between">
                <label for="citys" class="size-14">Postal code</label>
              </div>
              <input
                id="citys"
                type="text"
                class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              />
            </div>
          </div> -->
          <div class="w-full flex align-center space-x-2 pt-1">
            <input
              id="senupd"
              type="checkbox"
              class="border rounded no-outlines outline-none"
            />
            <label for="senupd" class="size-12"
              >M'abonner et recevoir les meilleurs offres sur Ofaloo.</label
            >
          </div>
          <a
            class="button btn-008489 relative top-05x border rounded-md flex align-center space-x-2"
            @click="signup"
          >
            <span class="size-13 text-white font-semibold"
              >Créer mon compte
            </span></a
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
              <span>Vous avez un compte?</span>
              <nuxt-link
                to="/ofalooagent/connexion"
                class="color-008489 underline-hover"
                >Se connecter</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <a
            href="#"
            class="button bg-white border rounded-md flex align-center space-x-2"
            ><svg
              class="h-5 w-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              /></svg
            ><span class="size-14">S'inscrire avec Google</span></a
          >
          <a
            href="#"
            class="button h-full bg-fb border rounded-md flex align-center space-x-2"
            ><client-only>
              <span class="mscourse block font-semibold color-363636f"
                ><client-only
                  ><svg
                    class="h-5 w-5 fbvg -mt-012x"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1365.12"
                    height="1365.12"
                    viewBox="0 0 14222 14222"
                  >
                    <circle cx="7111" cy="7112" r="7111" fill="#4267B2" />
                    <path
                      d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                      fill="#fff"
                    /></svg></client-only></span
            ></client-only>
            <span class="size-14 text-white">S'inscrire avec Facebook</span></a
          >
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
      phone: '',
    }
  },
  computed: {
    didpwdunmatch() {
      return this.notpwdok === true
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
      if (this.mailerror) {
        this.maierror = false
      }
    },
    pwd() {
      if (this.passerror) {
        this.pwderr = false
      }
      this.notpwdok = false
    },
    phone(newval, oldval) {
      if (isNaN(newval) || newval.toString().includes('.')) {
        this.phone = oldval
      } else this.phone = newval
    },
    pwdcf(newval, oldval) {
      if (newval.length < this.pwd.length && this.didpwdunmatch) {
        this.notpwdok = false
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
    signup() {
      if (this.infosValidated());
    },
  },
}
</script>
