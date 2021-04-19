<template>
  <div class="w-128 border-b pb-3 pt-3 px-4" :class="{ 'bg-008489cc': newnot }">
    <div>
      <div class="flex flex-col">
        <div class="flex align-center justify-between">
          <div class="flex align-center space-x-2">
            <div>
              <span
                v-if="type === '1'"
                class="flex align-center size-12 logo-color"
                ><svg
                  class="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                    stroke="#2d3748"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >Message
              </span>
              <span
                v-if="type === '2'"
                class="flex align-center size-12 logo-color"
                ><svg
                  class="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#2d3748"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >Compte vérifié
              </span>
              <span
                v-if="type === '3'"
                class="flex align-center size-12 logo-color"
                ><svg
                  class="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z"
                    fill="#2d3748"
                  /></svg
                >Compte non vérifié
              </span>
              <span
                v-if="type === '4'"
                class="flex align-center size-12 logo-color"
              >
                <svg
                  class="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z"
                    stroke="#2d3748"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Compte bloqué</span
              >
              <span
                v-if="type === '5'"
                class="flex align-center size-12 logo-color"
              >
                <svg
                  class="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2C7.23858 2 5 4.23858 5 7V9C3.89543 9 3 9.89543 3 11V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V11C17 9.89543 16.1046 9 15 9H7V7C7 5.34315 8.34315 4 10 4C11.3965 4 12.5725 4.95512 12.9055 6.24926C13.0432 6.78411 13.5884 7.1061 14.1232 6.96844C14.6581 6.83078 14.9801 6.28559 14.8424 5.75074C14.2874 3.59442 12.3312 2 10 2Z"
                    fill="#2d3748"
                  /></svg
                >Compte débloqué
              </span>
              <span
                v-if="type === '6'"
                class="flex align-center size-12 logo-color"
              >
                <svg
                  class="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604M18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604M18.364 18.364L5.63604 5.63604"
                    stroke="#2d3748"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >Compte banni
              </span>
              <span
                v-if="type === '7'"
                class="flex align-center size-12 logo-color"
                ><svg
                  class="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
                    fill="#2d3748"
                  /></svg
                >Propriété supprimée
              </span>
              <span
                v-if="type === '8'"
                class="flex align-center size-12 logo-color"
                ><svg
                  class="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15.5458C20.4771 15.5458 19.9542 15.6972 19.5 16C18.5917 16.6056 17.4083 16.6056 16.5 16C15.5917 15.3944 14.4083 15.3944 13.5 16C12.5917 16.6056 11.4083 16.6056 10.5 16C9.59167 15.3944 8.40833 15.3944 7.5 16C6.59167 16.6056 5.40833 16.6056 4.5 16C4.04584 15.6972 3.52292 15.5458 3 15.5458M9 6V8M12 6V8M15 6V8M9 3H9.01M12 3H12.01M15 3H15.01M21 21V14C21 12.8954 20.1046 12 19 12H5C3.89543 12 3 12.8954 3 14V21H21ZM18 12V10C18 8.89543 17.1046 8 16 8H8C6.89543 8 6 8.89543 6 10V12H18Z"
                    stroke="#2d3748"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >Joyeux anniversaire
              </span>
            </div>
            <span v-if="newnot" class="font-semibold color-008489"
              >Nouveau</span
            >
          </div>
          <div v-click-outside="hide" class="relative">
            <a
              class="clickable"
              @click="
                {
                  not = !not
                }
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z"
                  fill="#2d3748"
                />
                <path
                  d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z"
                  fill="#2d3748"
                />
                <path
                  d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z"
                  fill="#2d3748"
                />
              </svg>
            </a>
            <div
              v-show="not"
              class="absolute appearZ top-0 right-0 bg-white border rounded z-20 py-1 mt-5"
            >
              <a
                v-if="!newnot"
                class="dropdown-item clickable size-12 py-0.6"
                @click="read('no')"
                >Marquer comme non lue</a
              >
              <a
                v-else
                class="dropdown-item clickable size-12 py-0.6"
                @click="read('yes')"
                >Marquer comme lue</a
              >
              <a class="dropdown-item clickable size-12 py-0.6" @click="archive"
                >Archiver</a
              >
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <div>
              <span
                v-if="type === '1'"
                class="logo-color size-13 leading-4.5 py-1 block"
                >Un utilisateur vous a envoyé un message concernant votre
                propriété. Consulter votre boîte email pour voir le
                message.</span
              >
              <span
                v-if="type === '2'"
                class="logo-color size-13 leading-4.5 py-1 block"
                >Félicitations, votre compte a été approuvé, vous pouvez
                commencer dès à présent commencer à ajouter et publier des
                propriétés que vous souhaitez vendre ou mettre en
                location.</span
              >
              <span
                v-if="type === '3'"
                class="logo-color size-13 leading-4.5 py-1 block"
                >Nous sommes désolés de vous annoncer qu'après vérification de
                vos informations, nous n'avons pas réussi à confirmer leur
                véracité. Votre compte n'a donc pas été approuvé.
                <span
                  ><br />
                  Vous pensez que la décision n'est pas objective ? Vous pouvez
                  faire une
                  <nuxt-link
                    to="/dashboard/re-verifier"
                    class="font-semibold color-008489"
                    >nouvelle demande</nuxt-link
                  >
                  pour ré-vérifier vos informations.</span
                >
                <span>
                  <br />
                  La décision est définitive et irrévocable</span
                ></span
              >
              <span
                v-if="type === '4'"
                class="logo-color size-13 leading-4.5 py-1 block"
              >
                Votre compte a été bloqué temporairement. Vous serez notifié(e)
                après vérification pour le déblocage ou le bannissement de votre
                compte.
              </span>
              <span
                v-if="type === '5'"
                class="logo-color size-13 leading-4.5 py-1 block"
                >Votre compte a été débloqué, vous pouvez continuer à publier
                vos propriétés.</span
              >
              <span
                v-if="type === '6'"
                class="logo-color size-13 leading-4.5 py-1 block"
                >Votre compte a été banni pour non respect des conditions
                d'utilisations. Vous ne pouvez plus publier des propriétés et
                n'aurez plus accès définitivement à votre compte après 24h.
                <span>
                  <br />
                  Vous pensez qu'il s'agit d'une erreur ? Vous pouvez faire un
                  <nuxt-link
                    to="/dashboard/recours-ban"
                    class="font-semibold color-008489"
                    >recours</nuxt-link
                  >
                  pour re-vérification.</span
                >
                <span>
                  <br />
                  La décision est définitive et irrévocable</span
                ></span
              >
              <span
                v-if="type === '7'"
                class="logo-color size-13 leading-4.5 py-1 block"
                >Votre propriété a été supprimée pour non respect des règles
                d'utilisations de Ofaloo.</span
              >
              <span
                v-if="type === '8'"
                class="logo-color size-13 leading-4.5 py-1 block"
                >Joyeux anniversaire
                <span class="font-semibold">5 jours ouvrables.</span>
                Nos meilleurs voeux, nous vous souhaitons le meilleur dans tout
                ce que vous entreprendrez.</span
              >
            </div>
            <div>
              <span class="color-363636 size-11">Il y a 3 jours</span>
            </div>
          </div>
          <div class="py-1">
            <nuxt-link
              v-if="type === '1'"
              to="/dashboard/proprietes/mes-proprietes/viewed"
              ><figure class="image relative is-96x64">
                <img
                  src="https://ofalooback.herokuapp.com/images/4.jpg"
                  alt="Placeholder image"
                /></figure
            ></nuxt-link>
            <figure v-if="type === '7'" class="image relative is-96x64">
              <img
                src="https://ofalooback.herokuapp.com/images/8.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '2',
    },
    newnot: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      not: false,
    }
  },
  methods: {
    read(val) {
      this.not = false
    },
    archive() {
      this.not = false
    },
    hide() {
      this.not = false
    },
  },
}
</script>

<style scoped></style>
