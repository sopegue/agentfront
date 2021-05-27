<template>
  <div class="py-8">
    <div class="bg-white w-full border rounded py-5 sm:px-8 px-2">
      <div class="flex sm:space-x-4 space-x-1 align-center border-b pb-4">
        <a
          ><svg
            class="text-center m-0-auto"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17"
              :stroke="
                curoute === '/ofalooagent/infos' ? '#004e66' : '#2d3748 '
              "
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span
            class="m-0-auto block text-c text-sm sm:text-md leading-4 size-13"
            :class="{
              'color-008489 font-semibold': curoute === '/ofalooagent/infos',
              'logo-color': curoute !== '/ofalooagent/infos',
            }"
            >Informations personnelles</span
          >
        </a>
        <svg
          width="32"
          height="32"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
            fill="#2d3748"
          />
        </svg>

        <a
          ><svg
            class="text-center m-0-auto"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21L21 21M19 21H14M5 21L3 21M5 21H10M9 6.99998H10M9 11H10M14 6.99998H15M14 11H15M10 21V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V21M10 21H14"
              :stroke="
                curoute === '/ofalooagent/infos/infos-agence'
                  ? '#004e66'
                  : '#2d3748 '
              "
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span
            class="m-0-auto block text-c text-sm sm:text-md leading-4 size-13"
            :class="{
              'color-008489 font-semibold':
                curoute === '/ofalooagent/infos/infos-agence',
              'logo-color': curoute !== '/ofalooagent/infos/infos-agence',
            }"
            >Informations agence</span
          >
        </a>
        <svg
          width="32"
          height="32"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
            fill="#2d3748"
          />
        </svg>

        <a
          ><svg
            class="text-center m-0-auto"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 12L10 9L13 12L17 8M8 21L12 17L16 21M3 4H21M4 4H20V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V4Z"
              :stroke="
                curoute === '/ofalooagent/infos/recapitulatif'
                  ? '#004e66'
                  : '#2d3748 '
              "
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span
            class="m-0-auto block text-c text-sm sm:text-md leading-4 size-13"
            :class="{
              'color-008489 font-semibold':
                curoute === '/ofalooagent/infos/recapitulatif',
              'logo-color': curoute !== '/ofalooagent/infos/recapitulatif',
            }"
            >Récapitulatif informations</span
          ></a
        >
      </div>
      <nuxt-child class="py-5 sm:px-1 px-4" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>
