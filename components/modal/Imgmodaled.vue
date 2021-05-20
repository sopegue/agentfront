<template>
  <div class="modal is-active">
    <div class="modal-background" @mousedown="close"></div>
    <div
      class="w-full m-5 px-5"
      :class="{
        'fixeds w-fit top-5 left-0 h-fit -ml-0': modaled,
        'w-full h-x620': !modaled,
      }"
    >
      <div class="modal-background bg-transparent" @mousedown="close"></div>
      <div
        id="imgmod"
        class="box relative overflow-y-auto m-0-auto bg-white h-full px-2 aside"
      >
        <button
          class="modal-close z-20 is-large logo-color absolute top-0 right-0 mt-2 mr-2"
          aria-label="close"
          @click="close"
        ></button>
        <div
          class="flex bg-white w-full h-fit space-x-10 justify-center relative pt-6 -mt-2"
        >
          <div class="clickable image is-images">
            <figure
              v-for="(img, ij) in images"
              id="currentimage"
              :key="ij"
              class="image is-images hiddenmox"
              :class="{
                slide: active === ij,
              }"
            >
              <img
                :id="'normalimg' + ij"
                class="imagemaxes cursor-default m-0-auto"
                :src="currentsrc"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="flex flex-col space-y-3 h-full w180maxs">
            <div class="flex bg-white flex-col space-y-3 py-5 relative -top-2x">
              <h4
                class="font-semibold border-b block w-full m-0-auto fourline size-16 color-363636f pb-1 mb-1"
              >
                Images
              </h4>
              <div class="flex align-bottom flex-wrap">
                <a
                  v-for="(i, j) in images"
                  :key="j"
                  class="clickable w-fit h-fit hover:shadow m-2"
                  :class="{ shadow: now === j }"
                  @click="
                    {
                      active = j
                    }
                  "
                >
                  <figure
                    class="image is-52x52 border rounded minimage"
                    :class="{ 'border-bluee': now === j }"
                  >
                    <img
                      class="rounded w-full"
                      :src="images[j]"
                      alt="Placeholder image"
                    />
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
    position: {
      type: Object,
      default: () => {},
    },
    indexer: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      inside: false,
      zoom: false,
      active: 0,
    }
  },
  computed: {
    modaled() {
      return this.$store.state.dash_mod
    },
    zoomed() {
      return this.zoom === true
    },
    now() {
      return this.active
    },
    currentsrc() {
      return this.imgs[this.now]
    },
    images() {
      return this.imgs
    },
  },
  mounted() {
    this.active = this.indexer
    this.pos()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    zoominout() {
      this.zoom = !this.zoom
    },
    scrolltop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    pos() {
      this.scrolltop()
      // if (this.modaled) {
      //   const el = document.getElementById('imgmod')
      //   el.style.left = this.position.x + 'px'
      //   el.style.top = this.position.y + 'px'
      // }
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
