/* eslint-disable no-unused-vars */ /* eslint-disable prefer-const */
<template>
  <div>
    <div class="flex flex-col space-y-6 pb-5">
      <div class="flex space-x-4 align-center w-full h-40">
        <div class="bg-white rounded border w-full h-full">
          <div
            class="h-fit px-4 w-fit m-0-auto vertical-center flex align-center space-x-4"
          >
            <figure class="image relative is-96x96 rounded-full">
              <img
                class="rounded-full border"
                :src="
                  'https://ofaloo.blob.core.windows.net/ofaloo/' +
                  $auth.user.picture_link
                "
                alt="Placeholder image"
              />
            </figure>
            <div class="flex flex-col w-fit h-fit">
              <div
                class="size-24 font-semibold logo-color min-w-32 max-w-48 over"
              >
                Bienvenue!
              </div>
              <div v-if="$auth.loggedIn" class="size-16 logo-color max-w-40">
                {{ $linker.capitalizeEach($auth.user.surname) }}
                {{ $linker.capitalizeEach($auth.user.name) }}
                ({{ $linker.capitalizeEach($auth.user.agence.name) }})
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white relative z-0 rounded border w-full h-full"
          :class="{ 'px-7 py-3': size > 1124, 'px-4 py-1.5': size <= 1124 }"
        >
          <div class="flex relative z-0 flex-col space-y-4">
            <div
              v-show="infosvisit"
              class="border absolute z-10 mt-10 l-none wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
            >
              Le calcul des visites par mois est basé sur le nombre de fois
              qu'une même adresse mac (un unique appareil) consulte une
              propriété toutes les 24 heures.
            </div>
            <div
              class="flex relative z-0 align-center"
              :class="{
                'space-x-3 justify-between': size > 1124,
                'flex-col justify-center': size <= 1124,
              }"
            >
              <div
                class="size-13 relative z-0 font-semibold logo-color over flex align-center"
              >
                Visites par mois
                <svg
                  class="transform rotate-180 mt-0.5 ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @mouseover="show('visit')"
                  @mouseleave="hide('visit')"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#9c9c9c"
                  />
                </svg>
              </div>
              <div class="size-12 color-363636f over">Mars 2021</div>
            </div>
            <div class="flex flex-col text-c">
              <div class="size-24 font-semibold logo-color over">18 K</div>
              <div class="size-14 color-363636 over">Total des visites</div>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded border w-full h-full"
          :class="{ 'px-7 py-3': size > 1124, 'px-4 py-1.5': size <= 1124 }"
        >
          <div class="flex flex-col relative space-y-4">
            <div
              v-show="infosmess"
              class="border absolute z-10 mt-10 l-none wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
            >
              Le nombre de messages par mois correspond au nombre de fois que
              vous avez été contacté à partir du formulaire de contact de
              l'agent sur la page de consultation d'une propriété.
            </div>
            <div
              class="flex align-center"
              :class="{
                'space-x-3 justify-between': size > 1124,
                'flex-col justify-center': size <= 1124,
              }"
            >
              <div
                class="size-13 font-semibold logo-color over flex align-center"
              >
                Messages par mois
                <svg
                  class="transform rotate-180 mt-0.5 ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @mouseover="show('mess')"
                  @mouseleave="hide('mess')"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#9c9c9c"
                  />
                </svg>
              </div>
              <div class="size-12 color-363636f over">Mars 2021</div>
            </div>
            <div class="flex flex-col text-c">
              <div class="size-24 font-semibold logo-color over">145</div>
              <div class="size-14 color-363636 over">Total des messages</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex space-x-4 align-center w-full h-72">
        <div
          class="bg-white rounded border w-full h-full"
          :class="{ 'px-7': size > 1124, 'px-4': size <= 1124 }"
        >
          <div class="flex relative flex-col space-y-5 justify-between">
            <div
              v-show="infoslive"
              class="border absolute mt-11 ml-15 z-10 wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
            >
              Le nombre de visites actuelles (un ou plusieurs utilisateur(s)
              sont entrain de consulter actuellement l'une ou plusieurs de vos
              propriétés de toutes vos propriétés). Ce nombre est basé sur les
              sessions en cours dans un navigateur.
            </div>
            <div
              class="flex align-center"
              :class="{
                'space-x-3 justify-between': size > 1124,
                'flex-col justify-center': size <= 1124,
              }"
            >
              <div
                class="size-13 font-semibold logo-color over flex align-center"
              >
                Visites Live (Visites en direct)
                <svg
                  class="transform rotate-180 mt-0.5 ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @mouseover="show('live')"
                  @mouseleave="hide('live')"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#9c9c9c"
                  />
                </svg>
              </div>
            </div>
            <div class="flex flex-col text-c">
              <div class="flex align-center space-x-3 justify-center">
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
                    d="M5.05025 3.63579C5.44078 4.02631 5.44078 4.65948 5.05025 5.05C2.31658 7.78367 2.31658 12.2158 5.05025 14.9495C5.44078 15.34 5.44078 15.9732 5.05025 16.3637C4.65973 16.7542 4.02656 16.7542 3.63604 16.3637C0.12132 12.849 0.12132 7.15051 3.63604 3.63579C4.02656 3.24526 4.65973 3.24526 5.05025 3.63579ZM14.9498 3.63602C15.3403 3.2455 15.9735 3.2455 16.364 3.63602C19.8787 7.15074 19.8787 12.8492 16.364 16.3639C15.9735 16.7545 15.3403 16.7545 14.9498 16.3639C14.5592 15.9734 14.5592 15.3403 14.9498 14.9497C17.6834 12.2161 17.6834 7.78391 14.9498 5.05023C14.5592 4.65971 14.5592 4.02655 14.9498 3.63602ZM7.87869 6.46422C8.26921 6.85474 8.26921 7.48791 7.87869 7.87843C6.70711 9.05 6.70711 10.9495 7.87869 12.1211C8.26921 12.5116 8.26921 13.1448 7.87868 13.5353C7.48816 13.9258 6.855 13.9258 6.46447 13.5353C4.51185 11.5827 4.51185 8.41684 6.46447 6.46422C6.855 6.07369 7.48816 6.07369 7.87869 6.46422ZM12.1213 6.46445C12.5119 6.07392 13.145 6.07392 13.5355 6.46445C15.4882 8.41707 15.4882 11.5829 13.5355 13.5355C13.145 13.926 12.5119 13.926 12.1213 13.5355C11.7308 13.145 11.7308 12.5118 12.1213 12.1213C13.2929 10.9497 13.2929 9.05023 12.1213 7.87866C11.7308 7.48814 11.7308 6.85497 12.1213 6.46445ZM10 8.99998C10.5523 8.99998 11 9.4477 11 9.99998V10.01C11 10.5623 10.5523 11.01 10 11.01C9.44772 11.01 9 10.5623 9 10.01V9.99998C9 9.4477 9.44772 8.99998 10 8.99998Z"
                    fill="#f71d1d"
                  />
                </svg>
                <div class="size-24 font-semibold logo-color over -mt-0.5">
                  145
                </div>
              </div>
              <!-- <div class="flex align-center space-x-3 justify-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L9.21426 10.6285C9.26325 10.6906 9.31947 10.7469 9.38164 10.7958L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L17.0323 15.6181C19.8626 12.0844 19.6398 6.91177 16.3641 3.63603C15.9736 3.24551 15.3404 3.24551 14.9499 3.63603C14.5593 4.02656 14.5593 4.65972 14.9499 5.05025C17.4435 7.54386 17.6625 11.4508 15.6068 14.1926L14.172 12.7578C15.4582 10.8164 15.2461 8.17494 13.5357 6.46446C13.1451 6.07394 12.512 6.07394 12.1214 6.46446C11.7309 6.85498 11.7309 7.48815 12.1214 7.87867C13.0451 8.80233 13.2406 10.1784 12.7078 11.2936L10.7164 9.30219C10.7103 9.29595 10.7042 9.28979 10.6979 9.2837L3.70711 2.29289Z"
                    fill="#777777"
                  />
                  <path
                    d="M3.23766 8.1865C3.38012 7.65291 3.06305 7.10485 2.52946 6.96239C1.99586 6.81992 1.44781 7.137 1.30535 7.67059C0.5045 10.6701 1.27982 14.0074 3.63615 16.3637C4.02667 16.7542 4.65984 16.7542 5.05036 16.3637C5.44089 15.9732 5.44089 15.34 5.05036 14.9495C3.21924 13.1184 2.6134 10.5246 3.23766 8.1865Z"
                    fill="#777777"
                  />
                  <path
                    d="M7.40075 11.4995C7.12434 11.0214 6.51266 10.8578 6.03452 11.1343C5.55639 11.4107 5.39285 12.0223 5.66926 12.5005C5.88367 12.8714 6.14907 13.2198 6.46458 13.5353C6.85511 13.9258 7.48827 13.9258 7.8788 13.5353C8.26932 13.1448 8.26932 12.5116 7.8788 12.1211C7.68771 11.93 7.52865 11.7208 7.40075 11.4995Z"
                    fill="#777777"
                  />
                </svg>

                <div class="size-24 font-semibold logo-color over -mt-0.5">
                  0
                </div>
              </div> -->
              <div class="size-14 color-363636 over">
                Total des visites en direct
              </div>
            </div>
            <div
              class="flex flex-col space-y-1 overflow-y-auto h-32 px-1 aside cursor-default"
            >
              <div class="flex flex-col space-y-1.5">
                <span
                  class="logo-color size-13 font-semibold block border-b pb-1 mb-1.5"
                  >En direct de la Côte d'Ivoire (74)</span
                >
                <a
                  v-for="(element, i) in Lieux.filter((x) => {
                    return x.endsWith('-ville')
                  })"
                  :key="i + 'ville'"
                  class="logo-color flex align-center space-x-3"
                >
                  <span class="size-13 logo-color">{{
                    element.substring(0, element.indexOf('-v'))
                  }}</span>
                  <span class="size-13 font-semibold logo-color"
                    >9 visites</span
                  >
                </a>
              </div>
              <div class="flex flex-col space-y-1.5">
                <span
                  class="logo-color size-13 font-semibold block border-b pt-2 pb-1 mb-1.5"
                  >En direct hors Côte d'Ivoire (74)</span
                >
                <a
                  v-for="(element, i) in Lieux.filter((x) => {
                    return x.endsWith('-pays')
                  })"
                  :key="i + 'pays'"
                  class="logo-color flex align-center space-x-3"
                >
                  <span class="size-13 logo-color">{{
                    element.substring(0, element.indexOf('-p'))
                  }}</span>
                  <span class="size-13 font-semibold logo-color"
                    >9 visites</span
                  >
                </a>
              </div>
            </div>
            <!-- <span
              class="logo-color font-semibold size-15 block w-fit h-centers pt-10"
              >Aucune donnée à afficher</span
            > -->
          </div>
        </div>
        <div
          class="bg-white relative z-0 rounded border w-full h-full"
          :class="{ 'px-8': size > 1124, 'px-6': size <= 1124 }"
        >
          <div class="flex relative z-0 flex-col space-y-4 h-full">
            <div
              v-show="infosorigin"
              class="border absolute z-10 mt-10 l-none wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
            >
              Lieux où les propriétés ont été consultées en ligne. Les lieux
              sont basés uniquement sur l'adresse ip de l'appareil.
            </div>
            <div
              class="flex relative z-0 space-x-3 justify-between align-center"
            >
              <div
                class="size-13 relative z-0 font-semibold logo-color over flex align-center"
              >
                Lieux des visites
                <svg
                  class="transform rotate-180 mt-0.5 ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @mouseover="show('origin')"
                  @mouseleave="hide('origin')"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#9c9c9c"
                  />
                </svg>
              </div>
              <div class="size-12 color-363636f over">Mars 2021</div>
            </div>
            <div class="flex flex-col">
              <div class="mb-2 mt-1">
                <label class="relative w-max-64 flex align-center">
                  <input
                    v-model="searchorigin"
                    type="search"
                    placeholder="Rechercher une origine..."
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
                </label>
              </div>
              <div
                class="flex flex-col space-y-1 overflow-y-auto h-42 aside pt-2 cursor-default"
              >
                <div class="flex flex-col space-y-1.5">
                  <span
                    class="logo-color size-13 font-semibold block border-b pb-1 mb-1.5"
                    >De la Côte d'Ivoire (74)</span
                  >
                  <a
                    v-for="(element, i) in Lieux.filter((x) => {
                      return x.endsWith('-ville')
                    })"
                    :key="i + 'ville'"
                    class="logo-color flex align-center space-x-3"
                  >
                    <span class="size-13 logo-color">{{
                      element.substring(0, element.indexOf('-v'))
                    }}</span>
                    <span class="size-13 font-semibold logo-color"
                      >9 visites</span
                    >
                  </a>
                </div>
                <div class="flex flex-col space-y-1.5">
                  <span
                    class="logo-color size-13 font-semibold block border-b pt-2 pb-1 mb-1.5"
                    >Hors Côte d'Ivoire (74)</span
                  >
                  <a
                    v-for="(element, i) in Lieux.filter((x) => {
                      return x.endsWith('-pays')
                    })"
                    :key="i + 'pays'"
                    class="logo-color flex align-center space-x-3"
                  >
                    <span class="size-13 logo-color">{{
                      element.substring(0, element.indexOf('-p'))
                    }}</span>
                    <span class="size-13 font-semibold logo-color"
                      >9 visites</span
                    >
                  </a>
                </div>
              </div>
            </div>
            <!-- <span
              class="logo-color font-semibold size-15 block w-fit h-centers pt-20"
              >Aucune donnée à afficher</span
            > -->
          </div>
        </div>
      </div>
      <div
        class="bg-white flex flex-col space-y-3 border rounded w-full h-fit px-6 py-5"
      >
        <div class="flex relative z-0 space-x-3 justify-between align-center">
          <div
            class="size-13 relative z-0 font-semibold logo-color over flex align-center"
          >
            Report Visites & Messages
          </div>
          <div class="flex align-center space-x-3 size-12 font-semibold">
            <div>
              <a
                class="size-12 hover-008489 font-semibold"
                :class="{
                  'cursor-default color-008489': daily,
                  'logo-color clickable': !daily,
                }"
                @click="
                  {
                    daily = !daily
                  }
                "
                >Report par jour</a
              >
            </div>
            <div>
              <a
                class="clickable size-12 hover-008489 font-semibold"
                :class="{
                  'cursor-default color-008489': !daily,
                  'logo-color clickable': daily,
                }"
                @click="
                  {
                    daily = !daily
                  }
                "
                >Report par semaine</a
              >
            </div>
          </div>
        </div>
        <div>
          <div class="size-13 color-363636f over mb-0.5">Mars 2021</div>
          <div class="flex relative z-0 space-x-3 justify-between align-center">
            <div class="flex align-center relative z-0 space-x-4">
              <div
                class="my-1 rounded relative z-0 font-semibold logo-color flex align-center"
              >
                <a
                  class="px-2 py-1 border rounded-l size-11"
                  :class="{
                    'bg-008489 border-008489s text-white cursor-default': monthis,
                    'logo-color clickable': !monthis,
                  }"
                  @click="
                    {
                      monthis = !monthis
                    }
                  "
                  >Ce mois</a
                >
                <a
                  class="px-2 py-1 border size-11 rounded-r"
                  :class="{
                    'bg-008489 border-008489s text-white cursor-default': !monthis,
                    'logo-color clickable': monthis,
                  }"
                  @click="
                    {
                      monthis = !monthis
                    }
                  "
                  >Le mois dernier</a
                >
              </div>
              <div
                class="my-1 rounded relative z-0 font-semibold logo-color flex align-center"
              >
                <a
                  class="px-2 border-l pt-0.5 border-t border-b rounded-l logo-color size-11"
                  ><label for="aaz" class="flex align-center container pb-1">
                    <span class="h-2 w-2 rounded-full dot-red"></span>
                    <span
                      class="w-fit size-11 ml-1 -mt-0.2 multichoice-categ"
                      :class="{
                        'color-008489': checkedCateg.includes('Visites'),
                      }"
                      >Visites</span
                    >
                    <input
                      id="aaz"
                      v-model="checkedCateg"
                      type="checkbox"
                      value="Visites"
                    />
                    <span class="checkmark"></span> </label
                ></a>
                <a class="px-2 border pt-0.5 size-11 rounded-r logo-color"
                  ><label for="aazz" class="flex align-center container pb-1">
                    <span class="h-2 w-2 rounded-full dot-green"></span
                    ><span
                      class="w-fit size-11 ml-1 -mt-0.2 multichoice-categ"
                      :class="{
                        'color-008489': checkedCateg.includes('Messages'),
                      }"
                      >Messages</span
                    >
                    <input
                      id="aazz"
                      v-model="checkedCateg"
                      type="checkbox"
                      value="Messages"
                    />
                    <span class="checkmark"></span> </label
                ></a>
              </div>
            </div>
            <div class="flex align-center space-x-3 size-12">
              <sortprop></sortprop>
            </div>
          </div>
        </div>
        <div>
          <canvas id="myChart" width="400" height="145"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from '@/chart/chart'
import Sortprop from '~/components/dropdown/Sortprop.vue'
export default {
  components: { Sortprop },
  data() {
    return {
      config,
      infosmess: false,
      infosvisit: false,
      infosorigin: false,
      infoslive: false,
      quitmess: true,
      quitvisit: true,
      quitlive: true,
      quitorigin: true,
      searchorigin: '',
      origin: [
        'Abidjan-ville',
        'Yamoussoukro-ville',
        'Bouaké-ville',
        'Daloa-ville',
        'Korhogo-ville',
        'San-Pedro-ville',
        'Tunisie-pays',
        'Maroc-pays',
        'Liban-pays',
        'Etats-Unis-pays',
        'UK-pays',
        'Nigéria-pays',
      ],
      checkedCateg: [],
      monthis: true,
      daily: true,
    }
  },
  computed: {
    Lieux() {
      return this.origin.filter((x) =>
        x.toLowerCase().includes(this.searchorigin.toLowerCase())
      )
    },
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
  },
  // updated() {
  //   if (this.quitmess) this.infosmess = false
  //   if (this.quitvisit) this.infosvisit = false
  //   if (this.quitlive) this.infoslive = false
  //   if (this.quitorigin) this.infosorigin = false
  // },
  mounted() {
    console.log(this.config)
    // eslint-disable-next-line no-undef
    const myChart = new Chart(document.getElementById('myChart'), this.config)
    setTimeout(() => {
      myChart.update()
    }, 500)
  },
  methods: {
    show(val) {
      if (val === 'mess') this.quitmess = false
      else if (val === 'visit') this.quitvisit = false
      else if (val === 'origin') this.quitorigin = false
      else this.quitlive = false
      setTimeout(() => {
        if (val === 'mess') {
          if (!this.quitmess) this.infosmess = true
          else this.infosmess = false
        } else if (val === 'visit') {
          if (!this.quitvisit) this.infosvisit = true
          else this.infosvisit = false
        } else if (val === 'origin') {
          if (!this.quitorigin) this.infosorigin = true
          else this.infosorigin = false
        } else if (val === 'live') {
          if (!this.quitlive) this.infoslive = true
          else this.infoslive = false
        }
      }, 300)
    },
    hide(val) {
      if (val === 'mess') {
        this.infosmess = false
        this.quitmess = true
      } else if (val === 'visit') {
        this.infosvisit = false
        this.quitvisit = true
      } else if (val === 'origin') {
        this.infosorigin = false
        this.quitorigin = true
      } else {
        this.infoslive = false
        this.quitlive = true
      }
    },
  },
}
</script>

<style scoped>
.dot-red {
  display: block;
  background-color: rgb(255, 19, 19);
}
.dot-green {
  display: block;
  background-color: #008489;
}
</style>
