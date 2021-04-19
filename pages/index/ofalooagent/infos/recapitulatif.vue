<template>
  <div>
    <client-only>
      <div
        v-show="
          me !== undefined &&
          me !== null &&
          agence !== undefined &&
          agence !== null
        "
      >
        <div>
          <h4 class="logo-color size-16 mb-1">
            Récapitilatif des informations
          </h4>
        </div>
        <div class="mt-6 flex flex-col space-y-8 border-b pb-8">
          <div class="flex flex-col space-y-3">
            <div class="border-b pb-2 flex justify-between">
              <h4 class="logo-color size-14 font-semibold">
                Informations personnelles
              </h4>
              <nuxt-link
                to="/ofalooagent/infos"
                class="color-008489 clickable underline-hover"
                >Modifier</nuxt-link
              >
            </div>
            <div class="mb-2 flex flex-col space-y-2">
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Email:</span>
                <span>{{ me.email }}</span>
                <span
                  v-if="!princi_i_agence"
                  class="font-semibold size-13 inline-block"
                  >(adresse email principale)</span
                >
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Nom:</span>
                <span>{{ me.name }}</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Prénom:</span>
                <span>{{ me.surname }}</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Téléphone:</span>
                <span v-if="me.phone !== ''">{{ me.phone }}</span>
                <span v-else>*********</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Adresse personnelle:</span>
                <span v-if="me.adresse !== ''">{{ me.adresse }}</span>
                <span v-else>*********</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Pays de résidence:</span>
                <span>{{ me.pays }}</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Ville:</span>
                <span v-if="me.ville !== ''">{{ me.ville }}</span>
                <span v-else>*********</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Code postal:</span>
                <span v-if="me.cp !== ''">{{ me.cp }}</span>
                <span v-else>*********</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-3">
            <div class="border-b pb-2 flex justify-between">
              <h4 class="logo-color size-14 font-semibold">
                Informations agence
              </h4>
              <nuxt-link
                to="/ofalooagent/infos/infos-agence"
                class="color-008489 clickable underline-hover"
                >Modifier</nuxt-link
              >
            </div>
            <div class="mb-2 flex flex-col space-y-2">
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Email de l'agence:</span>
                <span>{{ agence.email }}</span>
                <span
                  v-if="princi_i_agence"
                  class="font-semibold size-13 inline-block"
                  >(adresse email principale)</span
                >
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Nom de l'agence:</span>
                <span>{{ agence.name }}</span>
              </div>
              <div
                class="size-14 flex sm:flex-row sm flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Type de l'agence:</span>
                <span v-if="agence.type === 'public'">Agence publique</span>
                <span v-else-if="agence.type === 'private'">Agence privée</span>
                <span v-else>Agence personnelle</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold"
                  >Numéro fiscal de l'agence:</span
                >
                <span v-if="agence.fiscal !== ''">{{ agence.fiscal }}</span>
                <span v-else>*********</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold"
                  >Avez-vous déjà une agence en ligne ?:</span
                >
                <span v-if="agence.old_agence === 'no'"
                  >Non, je ne dispose pas d'agence sur Ofaloo</span
                >
                <span v-else>Oui, j'ai déjà une agence sur Ofaloo</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold"
                  >Téléphone de l'agence:</span
                >
                <span v-if="agence.phone !== ''">{{ agence.phone }}</span>
                <span v-else>*********</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Adresse de l'agence:</span>
                <span>{{ agence.adr }}</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold">Ville de l'agence:</span>
                <span>{{ agence.ville }}</span>
              </div>
              <div
                class="size-14 flex sm:flex-row flex-col"
                :class="{ 'align-center space-x-2': size >= 640 }"
              >
                <span class="size-13 font-semibold"
                  >Code postal de l'agence:</span
                >
                <span v-if="agence.cp !== ''">{{ agence.cp }}</span>
                <span v-else>*********</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex align-center sm:space-x-5 space-x-3 py-5">
          <a
            class="button is-light relative top-05x border rounded-md flex align-center space-x-2"
            @click="$router.push('/ofalooagent/infos/infos-agence')"
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
              >Enregister et terminer</span
            ></a
          >
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      me: {},
      agence: {},
      accounting: false,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    princi_i_agence() {
      return this.agence.email_principal === this.agence.email
    },
    creating() {
      return this.accounting === true
    },
  },
  beforeMount() {
    if (!sessionStorage.agence_infos) {
      location.replace('/ofalooagent/infos/infos-agence')
    }
    if (sessionStorage.register_infos) {
      this.me = JSON.parse(sessionStorage.getItem('register_infos'))
    }
    if (sessionStorage.agence_infos) {
      this.agence = JSON.parse(sessionStorage.getItem('agence_infos'))
    }
  },
  methods: {
    async save() {
      this.accounting = true
      const data = await this.$axios.$post('agent', {
        agent: this.me,
        agence: this.agence,
      })
      if (data.status === '201') {
        sessionStorage.removeItem('register_email')
        sessionStorage.removeItem('register_infos')
        sessionStorage.removeItem('agence_infos')
        sessionStorage.removeItem('password')
        sessionStorage.setItem('registered', 'yes')
        location.assign('/ofalooagent/success-compte')
      }
      this.accounting = false
    },
  },
}
</script>

<style scoped></style>
