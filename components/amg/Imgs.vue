<template>
  <div class="wmax-x656 px-5 plus50px flex align-center relative border-t">
    <client-only>
      <div
        class="absolute bg-color-white is-lights rounded left-0 nexttag z-10 p-1 hover:shadow"
        :class="{ hidden: !scrollxl }"
        @click="scrollLeft"
      >
        <button class="hover-008489 no-outline mt-1 px-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L9.41421 10L12.7071 13.2929C13.0976 13.6834 13.0976 14.3166 12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z"
              fill="#2d3748"
            />
          </svg>
        </button>
      </div>
    </client-only>
    <div
      id="eltoscrol"
      class="flex align-center relative w-fit m-0-auto wtag overflow-x-auto"
      :class="{ 'pt-4.15': canscroll }"
    >
      <a
        v-for="(img, i) in imgs"
        :id="'mini' + i"
        :key="i"
        class="clickable w-fit h-fit hover:shadow rounded m-2"
        :class="{ shadow: now === i }"
        @click="
          {
            active = i
          }
        "
      >
        <figure
          class="image is-36x36 border rounded minimage"
          :class="{ 'border-bluee': now === i }"
        >
          <img class="rounded w-full" :src="img" alt="Placeholder image" />
        </figure>
      </a>
    </div>

    <client-only>
      <div
        class="absolute bg-color-white is-lights right-0 nexttag z-10 p-1 hover:shadow"
        :class="{ hidden: scrollxr }"
        @click="scrollRight"
      >
        <button class="hover-008489 no-outline mt-1 px-1">
          <svg
            width="24"
            height="24"
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
        </button>
      </div>
    </client-only>
  </div>
</template>
<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
    indexer: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll: 0,
      tagscrol: false,
      reachtotal: false,
      active: 0,
      totalscroll: 0,
      nbscroll: 0,
      clw: 0,
      scrw: 0,
      hasscroll: false,
    }
  },
  computed: {
    canscroll() {
      return this.hasscroll === true
    },
    scrolling() {
      return this.scroll
    },
    scrollxl() {
      return this.tagscrol === true
    },
    scrollxr() {
      return this.reachtotal === true
    },
    now() {
      return this.active
    },
  },
  watch: {
    indexer(nv, ov) {
      this.active = nv
    },
    active(nv, ov) {
      this.$emit('changeactive', nv)
    },
    imgs(nv, ov) {
      if (nv.length > 9) this.reachtotal = false
      else {
        this.reachtotal = true
        this.tagscrol = false
      }
    },
  },
  beforeMount() {
    window.addEventListener('wheel', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  updated() {
    this.scrollable()
  },
  methods: {
    sleep(milliseconds) {
      const date = Date.now()
      let currentDate = null
      do {
        currentDate = Date.now()
      } while (currentDate - date < milliseconds)
    },
    scrollLeft() {
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      if (scroll - 240 > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('eltoscrol').scroll({
        top: scroll - 240,
        left: scroll - 240,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll + 240) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
      // this.sleep(240)
    },
    scrollRight() {
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      if (scroll + 240 > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('eltoscrol').scroll({
        top: scroll + 240,
        left: scroll + 240,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll - 240) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
    },
    handleScroll() {
      const cl = document.getElementById('eltoscrol').clientWidth
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      if (scr - cl <= scroll) this.reachtotal = true
      else this.reachtotal = false
      if (scroll <= 0) this.tagscrol = false
      else this.tagscrol = true
    },
    scrollable() {
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      if (scr > cl) {
        this.hasscroll = true
      } else {
        this.hasscroll = false
      }
    },
    large() {
      const el = document.getElementById('eltoscrol')
      if (el !== null) {
        const scr = el.scrollWidth
        const cl = el.clientWidth
        if (cl >= scr) {
          this.tagscrol = 0
          this.reachtotal = true
        }
        this.clw = cl
        this.scrw = scr
        this.totalscroll = Math.floor((scr - cl) / 240) + 1
        if (this.nbscroll - Math.floor(this.clw / 240) + 1) this.nbscroll = 0
        else this.nbscroll = this.nbscroll - Math.floor(this.clw / 240) + 1
        if (!this.reachtotal) this.hasscroll = true
      }
    },
    hide() {
      this.focused = false
    },
  },
}
</script>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.plus50px {
  animation: 0.3s appear;
  scrollbar-width: none !important;
}
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
@keyframes appear {
  0% {
    transform: translateY(-10px);
  }
}
</style>
