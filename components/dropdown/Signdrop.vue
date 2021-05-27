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
            class="py-1 bg-white relative border rounded-full clickable select-none mb-1.5"
            @click="
              {
                focused = !focused
              }
            "
          >
            <div class="flex align-center space-x-2 relative">
              <img
                class="rounded-full is-40x40"
                :src="
                  'https://ofaloo.blob.core.windows.net/ofaloo/' +
                  $auth.user.picture_link
                "
                alt="Photo de profil"
              />
              <div class="flex flex-col">
                <div class="size-13 color-363636 w-30 over">
                  {{ $auth.user.main_email }}
                </div>
                <div class="size-14 font-semibold logo-color w-30 over">
                  {{ $linker.capitalizeEach($auth.user.agence.name) }}
                  ({{ $linker.capitalizeEach($auth.user.surname) }}
                  {{ $linker.capitalizeEach($auth.user.name) }})
                </div>
              </div>
              <svg
                class="w-4 h-4 relative transform logo-color right-1.5"
                :class="{ 'color-008489s rotate-180 trans-x300': focused }"
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
      <div id="dropdown-menu" class="dropdown-menu z-20 walele" role="menu">
        <div class="dropdown-content bg-white border z-20 pt-1">
          <div class="flex align-center justify-between">
            <span class="size-135 font-semibold dropdown-item">Mon compte</span>
            <nuxt-link
              v-show="$auth.user.agence.super === 'yes'"
              to="/ofalooagent/guide#superagent"
              class="button bg-transparent mr-4 px-3 pb-1.5 rounded border-008489ss size-12 color-008489"
              >Super agent</nuxt-link
            >
          </div>
          <nuxt-link
            to="/dashboard/user"
            class="dropdown-item flex space-x-2 align-center w-fit clickable size-125"
            @click.native="hide"
            ><svg
              class="w-5 h-5 logo-color"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path></svg
            ><span>Profil</span></nuxt-link
          >
          <!-- <nuxt-link
            to="/dashboard/inbox"
            class="dropdown-item flex space-x-2 align-center w-fit clickable size-125"
            @click.native="hide"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5C2 3.89543 2.89543 3 4 3H11C12.1046 3 13 3.89543 13 5V9C13 10.1046 12.1046 11 11 11H9L6 14V11H4C2.89543 11 2 10.1046 2 9V5Z"
                fill="#2d3748"
              />
              <path
                d="M15 7V9C15 11.2091 13.2091 13 11 13H9.82843L8.06173 14.7667C8.34154 14.9156 8.66091 15 9 15H11L14 18V15H16C17.1046 15 18 14.1046 18 13V9C18 7.89543 17.1046 7 16 7H15Z"
                fill="#2d3748"
              /></svg
            ><span>Messages</span></nuxt-link
          > -->
          <nuxt-link
            to="/dashboard/notifications"
            class="dropdown-item relative flex space-x-2 align-center w-fit clickable size-125"
            @click.native="hide"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
                fill="#2d3748"
              />
              <path
                d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z"
                fill="#2d3748"
              /></svg
            ><span>Notifications</span>
            <button
              class="button scale absolute h-8 w-8 font-semibold bg-red-500w text-white rounded-full border-none top-0 right-1.5"
            >
              <span class="text-white size-12 ml-0.5">99+</span>
            </button></nuxt-link
          >
          <nuxt-link
            to="/dashboard/user/parametres"
            class="dropdown-item flex space-x-2 align-center w-fit clickable size-125"
            @click.native="hide"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.4892 3.17094C11.1102 1.60969 8.8898 1.60969 8.51078 3.17094C8.26594 4.17949 7.11045 4.65811 6.22416 4.11809C4.85218 3.28212 3.28212 4.85218 4.11809 6.22416C4.65811 7.11045 4.17949 8.26593 3.17094 8.51078C1.60969 8.8898 1.60969 11.1102 3.17094 11.4892C4.17949 11.7341 4.65811 12.8896 4.11809 13.7758C3.28212 15.1478 4.85218 16.7179 6.22417 15.8819C7.11045 15.3419 8.26594 15.8205 8.51078 16.8291C8.8898 18.3903 11.1102 18.3903 11.4892 16.8291C11.7341 15.8205 12.8896 15.3419 13.7758 15.8819C15.1478 16.7179 16.7179 15.1478 15.8819 13.7758C15.3419 12.8896 15.8205 11.7341 16.8291 11.4892C18.3903 11.1102 18.3903 8.8898 16.8291 8.51078C15.8205 8.26593 15.3419 7.11045 15.8819 6.22416C16.7179 4.85218 15.1478 3.28212 13.7758 4.11809C12.8896 4.65811 11.7341 4.17949 11.4892 3.17094ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                fill="#2d3748"
              />
            </svg>
            <span>Paramètres du compte</span></nuxt-link
          >
          <hr class="dropdown-divider" />
          <a class="block client w-fit m-0-auto" @click="logout"
            ><button
              class="button is-light ferfe rounded px-20 py-1 text-white size-14"
            >
              Se deconnecter
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Trouver une propriété',
    },
  },
  data() {
    return {
      focused: false,
    }
  },
  computed: {},
  methods: {
    hide() {
      this.focused = false
    },
    async logout() {
      this.hide()
      await this.$auth.logout().then((res) => {
        if (localStorage.hdzd) localStorage.removeItem('hdzd')
        location.reload()
      })
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 2.9rem !important;
  right: 0 !important;
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
