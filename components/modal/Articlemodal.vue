<template>
  <div class="modal is-active">
    <div class="modal-background" @mousedown="close"></div>
    <div class="modal-content w-full h-full px-6 py-6">
      <div class="modal-background bg-transparent" @mousedown="close"></div>
      <div
        class="box relative fixed bg-white wmin-900 wmin-900s m-0-auto h-full lg:px-10"
      >
        <button
          class="modal-close z-20 is-large logo-color absolute top-0 right-0 mt-2 mr-4"
          aria-label="close"
          @click="close"
        ></button>
        <div
          class="flex flex-col w-full h-full relative py-3 px-2 mt-4 overflow-y-auto aside"
        >
          <div class="mb-1">
            <h4 class="logo-color size-16 font-semibold">Appartement</h4>
          </div>
          <div class="flex mb-5 space-x-4 align-center justify-between">
            <div class="flex align-center space-x-1 mt-1">
              <svg
                class="w-6 h-6 logo-color -ml-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span class="logo-color size-14"
                >Plateau Angle Avenue Terrasson de Fougères et Rue Gourgas</span
              >
            </div>
          </div>
          <div class="h-402max flex space-x-6">
            <div class="h-full w-full">
              <bigads
                :indexer="index"
                :ads="ads"
                class="h-full"
                @indexed="indexed"
              ></bigads>
            </div>
            <div class="w180e flex flex-col space-y-3">
              <figure
                class="image appearZ clickable relative"
                :class="{ ' is-5by3': ads[next2].includes('images') }"
                @mouseover="
                  {
                    hovered1 = true
                  }
                "
                @click="
                  {
                    index = next2 + 1
                  }
                "
                @mouseleave="
                  {
                    hovered1 = false
                  }
                "
              >
                <div
                  v-show="hovered1"
                  class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
                ></div>
                <img
                  v-if="ads[next2].includes('images')"
                  :src="ads[next2]"
                  alt="Placeholder image"
                />
                <p v-else class="relative w-w280x126">
                  <svg
                    class="w-14 h-14 text-white absolute text-white both-centers -mt-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                      fill="none"
                    />
                  </svg>
                  <video id="my-video" class="w-w280x126">
                    <source :src="ads[next2]" type="video/mp4" />
                  </video>
                </p>
              </figure>

              <figure
                class="image appearZ clickable relative"
                :class="{ ' is-5by3': ads[next1].includes('images') }"
                @mouseover="
                  {
                    hovered2 = true
                  }
                "
                @click="
                  {
                    index = next1 + 1
                  }
                "
                @mouseleave="
                  {
                    hovered2 = false
                  }
                "
              >
                <div
                  v-show="hovered2"
                  class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
                ></div>
                <img
                  v-if="ads[next1].includes('images')"
                  :src="ads[next1]"
                  alt="Placeholder image"
                />
                <p v-else class="relative w-w280x126">
                  <svg
                    class="w-14 h-14 text-white absolute text-white both-centers -mt-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                      fill="none"
                    />
                  </svg>
                  <video id="my-video" class="w-w280x126">
                    <source :src="ads[next1]" type="video/mp4" />
                  </video>
                </p>
              </figure>
              <figure
                class="image appearZ relative"
                :class="{ ' is-5by3': ads[curindex].includes('images') }"
                @mouseover="
                  {
                    hovered3 = true
                  }
                "
                @click="
                  {
                    index = curindex + 1
                  }
                "
                @mouseleave="
                  {
                    hovered3 = false
                  }
                "
              >
                <div
                  class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
                >
                  <svg
                    class="w-14 h-14 text-white both-centers -mt-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268
2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <img
                  v-if="ads[curindex].includes('images')"
                  :src="ads[curindex]"
                  alt="Placeholder image"
                />
                <p v-else class="relative w-w280x126">
                  <video id="my-video" class="w-w280x126">
                    <source :src="ads[curindex]" type="video/mp4" />
                  </video>
                </p>
              </figure>
            </div>
          </div>
          <div
            class="flex mt-4"
            :class="{
              'flex-col space-y-6': size < 770,
              'space-x-6': size >= 770,
            }"
          >
            <div class="w-full flex flex-col space-y-4">
              <div class="w-full border-b pb-4">
                <div class="flex align-center space-x-4 justify-between">
                  <span class="logo-color font-medium size-15 block"
                    >90 000 000 FCFA - 100 000 000 000 FCFA, négociable</span
                  >
                  <nuxt-link
                    to="#"
                    class="px-3 py-1 self-start block w-fit h-fit rounded btn-008489s color-008489 font-semibold size-12 my-1 whitespace-no-wrap"
                    >Achat total</nuxt-link
                  >
                </div>
                <div class="mt-1">
                  <div>
                    <span class="color-363636 size-12"> Il y a 3 jours</span>
                  </div>
                </div>
              </div>
              <div class="border-b pb-5">
                <h4 class="logo-color size-16 font-semibold mb-5">
                  Appartement Informations
                </h4>
                <div class="my-2">
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
              <div class="border-b pb-5">
                <h4 class="logo-color size-16 font-semibold mb-5">
                  Appartement Caractéristiques
                </h4>
                <div class="my-2">
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofalooback.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
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
import Bigads from '../propriete/Bigads.vue'
export default {
  components: { Bigads },
  data() {
    return {
      inside: false,
      share: false,
      hovered1: false,
      hovered2: false,
      hovered3: false,
      zoom: false,
      active: 0,
      index: 1,
      ads: [
        'https://ofalooback.herokuapp.com/images/9.jpg',
        'https://ofalooback.herokuapp.com/images/1.jpg',
        'https://ofalooback.herokuapp.com/images/3.jpg',
        'https://ofalooback.herokuapp.com/images/4.jpg',
        'https://ofalooback.herokuapp.com/images/5.jpg',
        'https://ofalooback.herokuapp.com/videos/vid.mp4',
      ],
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    next1() {
      if (this.ads.length - 1 - this.curindex <= 1) {
        if (this.ads.length - 1 - this.curindex === 1)
          return this.ads.length - 1
        if (this.ads.length - 1 - this.curindex === 0) return 0
      }
      return this.curindex + 1
    },
    next2() {
      if (this.ads.length - 1 - this.curindex <= 1) {
        if (this.ads.length - 1 - this.curindex === 1) return 0
        if (this.ads.length - 1 - this.curindex === 0) return 1
      }
      return this.curindex + 2
    },
    curindex() {
      return this.index - 1
    },
  },
  methods: {
    hideshare() {
      this.share = false
    },
    hidebody() {},
    close() {
      this.$emit('close_quick')
    },
    indexed(val) {
      this.index = val
      document.body.style.overflow = 'visible'
    },
  },
}
</script>
<style scoped>
.zoomimg {
  transition: transform 0.25s ease;
  cursor: zoom-in;
}
.haszoomed {
  transform: scale(2) !important;
  cursor: zoom-out !important;
}
.slide {
  display: block !important;
  animation: 0.3s appearZ;
}
.minimage:hover {
  border-color: #006280;
}
.border-bluee {
  border-color: #006280;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: const(--tw-ring-offset-shadow, 0 0 #0000),
    const(--tw-ring-shadow, 0 0 #0000), const(--tw-shadow);
}
.minimageborder:hover {
  border-color: #006280;
}
</style>
