<template>
  <div>
    <div class="bg-white w-full px-6 py-4 rounded">
      <div class="flex align-center justify-between border-b pb-2">
        <h4 class="logo-color font-semibold size-15">Mes notifications (85)</h4>
        <h4 class="logo-color font-semibold size-15">Non lues (5)</h4>
      </div>
      <div class="mt-7">
        <div class="w-fit m-0-auto">
          <notif></notif>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notif from '~/components/notifications/Notif.vue'
export default {
  components: { Notif },
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
