<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">
      Informations agence
    </h4>
    <div class="w-full pt-4 flex flex-col space-y-2">
      <div class="flex flex-wrap">
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="email" class="size-13">Email</label>
          <br />
          <input
            id="email"
            type="text"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
          <div class="w-full flex align-center space-x-1 pt-1">
            <input
              id="senupd"
              type="checkbox"
              class="border rounded no-outlines outline-none"
            />
            <label for="senupd" class="size-12"
              >Utiliser comme email principal</label
            >
          </div>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="username" class="size-13">Nom de l'agence</label>
          <br />
          <input
            id="username"
            type="text"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <div>
            <label for="requesst" class="size-14">Type de l'agence</label>
            <br />
            <typegence></typegence>
          </div>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <div class="w-full">
            <label for="emasssilqx" class="size-14 over"
              >Numéro fiscal de l'agence (Optionnel)</label
            >
            <br />
            <input
              id="emasssilqx"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <div>
            <label for="request" class="size-14 over"
              >Avez-vous déjà une agence en ligne ?</label
            >
            <br />
            <hasagence></hasagence>
          </div>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <div class="w-full">
            <label for="emailswx" class="size-14"
              >Adresse physique de l'agence</label
            >
            <br />
            <input
              id="emailswx"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phogneddl" class="size-13">Ville de l'agence</label>
          <br />
          <input
            id="phogneddl"
            type="text"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phognedd" class="size-13">Code postal de l'agence</label>
          <br />
          <input
            id="phognedd"
            type="text"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
      </div>
      <div class="pt-3 sm:pb-5 pb-0 w-fit">
        <button
          class="border-none size-12 m-0-auto w-fit text-white px-10 pb-2 rounded button btn-008489"
        >
          Mettra à jour mes données
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import Delcountry from '~/components/dropdown/Delcountry.vue'
import Hasagence from '~/components/dropdown/Hasagence.vue'
import Typegence from '~/components/dropdown/Typegence.vue'
export default {
  components: { Typegence, Hasagence },
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
