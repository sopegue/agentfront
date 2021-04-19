<template>
  <div class="h-full">
    <div class="px-4 h-40 bg-white z-20">
      <div class="flex align-center justify-between">
        <div class="size-14 font-semibold logo-color over">Messages</div>
        <div class="size-12 color-363636f over">
          <a
            class="border-none flex align-center size-12 logo-color rounded clickable"
          >
            <svg
              width="16"
              height="16"
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
        </div>
      </div>
      <a
        class="border-none text-white mt-6 flex align-center size-12 px-3.5 rounded py-1 button btn-008489"
      >
        <svg
          class="mr-1.5"
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7V9H7C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11H9V13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13V11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H11V7Z"
            fill="#fff"
          />
        </svg>

        Nouveau message
      </a>
      <div class="mb-2 mt-3 border-b pb-5">
        <label class="relative flex align-center">
          <input
            v-model="searchorigin"
            type="search"
            placeholder="Rechercher un administrateur..."
            class="border w-full no-outlines pl-2 pr-7 py-1 rounded size-14"
          />
          <svg
            class="w-4 h-4 absolute right-0 mr-2 logo-color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <div
            class="absolute hidden z-20 bg-white border w-full h-48 left-0 top-0 right-0 mt-7.5"
          ></div>
        </label>
      </div>
    </div>
    <div class="-mt-5 h-3/4 w-full overflow-y-auto aside">
      <div class="flex flex-col">
        <apercu v-for="i in 28" :key="i"></apercu>
      </div>
    </div>
  </div>
</template>

<script>
import Apercu from './Apercu.vue'
export default {
  components: { Apercu },
  data() {
    return {
      searchorigin: '',
    }
  },
}
</script>

<style scoped></style>
