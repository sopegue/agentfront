<template>
  <div v-if="true" class="bg-white w-full h-256">
    <span
      class="h-fit w-fit vertical-center m-0-auto relative top-56 block size-36 font-semibold logo-color"
      >Bientôt disponible</span
    >
  </div>
  <div
    v-else
    class="pt-3 pb-17.5 bg-white"
    :class="{
      'px-4': modaled,
      'px-10': !modaled,
      'w-min-186 overflow-x-auto': size < 740,
    }"
  >
    <div class="w-full h-full bg-white relative border rounded">
      <div class="flex h-full relative">
        <div class="w-max-100 w-min-100 w-x289 h-full border-r py-2.5">
          <left></left>
        </div>
        <div class="h-full w-full relative">
          <div class="h-6/7 w-full relative">
            <right></right>
          </div>
          <div class="border-t w-full sticky bottom-0">
            <div class="flex align-center">
              <div class="w-full">
                <div class="h-full w-full">
                  <textarea
                    id="coment2"
                    wrap="hard"
                    class="h-full w-full border-none size-14 px-2 pt-2 pb-1 text-gray-700 focus:outline-none mt-2 aside"
                    placeholder="Ecrire un message..."
                    rows="2"
                  ></textarea>
                </div>
              </div>
              <div class="flex align-center space-x-5">
                <div></div>
                <div class="flex align-center">
                  <div>
                    <a
                      class="border-none flex align-center size-12 logo-color px-2 pb-1.5 rounded button"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8284 14.8284C13.2663 16.3905 10.7337 16.3905 9.17157 14.8284M9 10H9.01M15 10H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#037ba0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      class="border-none flex align-center size-12 logo-color px-2 pb-1.5 rounded button"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 4C6.34315 4 5 5.34315 5 7V11C5 13.7614 7.23858 16 10 16C12.7614 16 15 13.7614 15 11V7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V11C17 14.866 13.866 18 10 18C6.13401 18 3 14.866 3 11V7C3 4.23858 5.23858 2 8 2C10.7614 2 13 4.23858 13 7V11C13 12.6569 11.6569 14 10 14C8.34315 14 7 12.6569 7 11V7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 5.34315 9.65685 4 8 4Z"
                          fill="#037ba0"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      class="border-none flex align-center size-12 logo-color px-2 pb-1.5 rounded button"
                    >
                      <svg
                        class="transform rotate-30"
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8944 2.55279C10.725 2.214 10.3788 2 10 2C9.62124 2 9.27498 2.214 9.10558 2.55279L2.10558 16.5528C1.92823 16.9075 1.97724 17.3335 2.2305 17.6386C2.48376 17.9438 2.89342 18.0705 3.27473 17.9615L8.27472 16.533C8.70402 16.4103 9 16.0179 9 15.5714V11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V15.5714C11 16.0179 11.296 16.4103 11.7253 16.533L16.7253 17.9615C17.1066 18.0705 17.5163 17.9438 17.7695 17.6386C18.0228 17.3335 18.0718 16.9075 17.8944 16.5528L10.8944 2.55279Z"
                          fill="#037ba0"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Left from '~/components/messages/left/Left.vue'
import Right from '~/components/messages/right/Right.vue'
export default {
  components: { Left, Right },
  computed: {
    modaled() {
      return this.$store.state.dash_mod
    },
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped>
html,
body {
  background-color: #fff !important;
}
</style>
