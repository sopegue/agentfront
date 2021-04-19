<template>
  <div>
    <div class="bg-white w-full px-6 pt-4 pb-6 rounded">
      <div class="flex align-center justify-between border-b pb-2">
        <h4 class="logo-color font-semibold size-15">Mes notifications (85)</h4>
        <div class="flex align-center space-x-5">
          <h4
            class="size-13 clickable underline-hover hover-008489"
            :class="{ 'font-semibold color-008489': current === '2' }"
            @click="
              {
                current = '2'
              }
            "
          >
            Toutes les notifications (5)
          </h4>
          <h4
            class="size-13 clickable underline-hover hover-008489"
            :class="{ 'font-semibold color-008489': current === '1' }"
            @click="
              {
                current = '1'
              }
            "
          >
            Non lues (5)
          </h4>
          <h4
            class="size-13 clickable underline-hover hover-008489"
            :class="{ 'font-semibold color-008489': current === '3' }"
            @click="
              {
                current = '3'
              }
            "
          >
            Archivées (5)
          </h4>
        </div>
      </div>
      <div class="mt-7">
        <div>
          <div class="w-fit m-0-auto flex flex-col">
            <notif
              v-for="i in 9"
              :key="i"
              :newnot="i % 2 === 0 ? true : false"
              :type="i % 2 === 0 ? '1' : '6'"
            ></notif>
          </div>
          <a
            class="button bg-transparent px-3 py-1 rounded border-008489ss size-12 color-008489 h-centers mt-5 w-fit block"
            >Plus de notifications (74)</a
          >
          <span class="color-363636 size-13 block w-fit h-centers mt-5"
            >Fin des notifications</span
          >
        </div>
        <span
          class="logo-color font-semibold size-15 block w-fit h-centers mt-5"
          >Aucune notification à afficher</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import Notif from '~/components/notifications/Notif.vue'
export default {
  components: { Notif },
  data() {
    return {
      current: '1',
    }
  },
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
