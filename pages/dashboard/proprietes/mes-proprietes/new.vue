<template>
  <div class="py-5 px-6 bg-white">
    <button class="button is-light rounded py-0.5 px-4" @click="$router.go(-1)">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.70711 4.87868C7.26972 4.31607 8.03278 4 8.82843 4H15C16.6569 4 18 5.34315 18 7V13C18 14.6569 16.6569 16 15 16H8.82843C8.03278 16 7.26972 15.6839 6.70711 15.1213L2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289L6.70711 4.87868ZM10.7071 7.29289C10.3166 6.90237 9.68342 6.90237 9.29289 7.29289C8.90237 7.68342 8.90237 8.31658 9.29289 8.70711L10.5858 10L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L12 11.4142L13.2929 12.7071C13.6834 13.0976 14.3166 13.0976 14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L13.4142 10L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L12 8.58579L10.7071 7.29289Z"
          fill="#374151"
        />
      </svg>
    </button>
    <div class="pt-3 pb-20" :class="{ 'px-10': !modaled && size > 940 }">
      <h4 class="logo-color size-16 font-semibold mb-5 text-c border-b pb-1">
        Nouvelle propriété
      </h4>
      <div class="w-fit flex flex-col space-y-5 m-0-auto">
        <div>
          <h4 class="logo-color size-14 font-semibold my-4 border-b pb-1">
            Type de propriété
          </h4>
          <div class="flex flex-col space-y-4">
            <div>
              <label class="size-13 pb-0.8 block">Type</label>
              <typeprop
                :content="[
                  'Studio',
                  'Maison',
                  'Appartement',
                  'Villa',
                  'Haut-Standing',
                  'Bureau',
                  'Magasin',
                  'Terrain',
                ]"
                @val="typeprop"
              ></typeprop>
            </div>
            <div>
              <div class="w-max-128">
                <div class="flex align-center space-x-2">
                  <label for="size" class="size-13 pb-0.8 block"
                    >Taille (en m²)</label
                  >
                  <svg
                    class="transform rotate-180 mt-0.5 ml-1"
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @mouseover="show('taille')"
                    @mouseleave="hide('taille')"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z"
                      fill="#9c9c9c"
                    />
                  </svg>
                  <div
                    v-show="infostaille"
                    class="border absolute z-10 mt-22 l-none wordbreaking block size-10 bg-white rounded max-w-64 p-2 color-363636"
                  >
                    Si vous indiquez la taille, assurez-vous d'indiquer la
                    taille disponible que ce soit une vente, location totale ou
                    partielle.
                  </div>
                </div>
                <input
                  id="size"
                  v-model="taille"
                  type="text"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 class="logo-color size-14 font-semibold my-4 border-b pb-1">
            Localisation
          </h4>
          <p
            v-show="unadresse"
            class="size-12 appearZ text-red-700 leading-4 pt-1 pb-3"
          >
            Veuillez indiquer une adresse pour la propriété
          </p>
          <div class="flex flex-col space-y-4">
            <div>
              <div class="w-max-128">
                <label for="sizez" class="size-13 pb-0.8 block"
                  >Adresse de la propriété</label
                >
                <input
                  id="sizez"
                  v-model="adresse"
                  type="text"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
              </div>
            </div>
            <div>
              <label class="size-13 pb-0.8 block">Ville de la propriété</label>
              <typeprop
                :placeholder="'Choisir une ville...'"
                :content="[
                  'Abidjan',
                  'Yamoussoukro',
                  'Bouaké',
                  'Daloa',
                  'Korhogo',
                  'Gagnoa',
                  'Man',
                  'San-Pedro',
                ]"
                @val="viller"
              ></typeprop>
            </div>
            <div>
              <div class="w-max-128">
                <label for="sizeqqz" class="size-13 pb-0.8 block"
                  >Code postal de la propriété</label
                >
                <input
                  id="sizeqqz"
                  v-model="cp"
                  type="text"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
              </div>
            </div>
            <!-- <div>
              <h4 class="logo-color size-14 font-semibold mb-0.8">
                Localisation Map
              </h4>
              <div class="my-2">
                <img
                  class="m-0-auto"
                  src="https://ofalooback.herokuapp.com/images/4.png"
                  alt="Placeholder image"
                />
              </div>
            </div> -->
          </div>
        </div>
        <div>
          <h4 class="logo-color size-14 font-semibold my-4 border-b pb-1">
            Prix
          </h4>
          <p
            v-show="unprice"
            class="size-12 appearZ text-red-700 leading-4 pt-1 pb-3"
          >
            Veuillez indiquer un prix pour la propriété
          </p>
          <div class="flex flex-col space-y-4">
            <div>
              <label class="size-13 pb-0.8 block">Proposition</label>
              <typeprop
                :content="[
                  'Vente totale',
                  'Vente partielle',
                  'Location totale',
                  'Location partielle',
                ]"
                @val="proposition"
              ></typeprop>
            </div>
            <div v-show="propos.includes('partielle')" class="appearZ">
              <label class="size-13 pb-0.8 block">Part proposée</label>
              <typeprop
                :placeholder="'Donner un pourcentage entre 1 et 99'"
                :content="[
                  '5%',
                  '10%',
                  '15%',
                  '20%',
                  '25%',
                  '30%',
                  '40%',
                  '50%',
                  '60%',
                  '70%',
                  '80%',
                  '90%',
                ]"
                @val="part"
              ></typeprop>
            </div>
            <div v-show="propos.includes('Location')" class="appearZ">
              <label class="size-13 pb-0.8 block">Type de location</label>
              <typeprop
                :content="[
                  'Par jour',
                  'Par semaine',
                  'Par mois',
                  'Par trimestre',
                  'Par semestre',
                  'Par année',
                ]"
                @val="location"
              ></typeprop>
            </div>
            <div :class="{ noclick: prixmin.length > 0 || prixmax.length > 0 }">
              <div class="w-max-128">
                <label for="sizea" class="size-13 pb-0.8 block"
                  >Prix de la propriété (prix fixe)</label
                >
                <input
                  id="sizea"
                  v-model="prix"
                  type="text"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
              </div>
              <div class="flex align-center space-x-2 pt-1.5">
                <input
                  id="senupd"
                  v-model="negoc"
                  type="checkbox"
                  value="yes"
                  class="border rounded no-outlines outline-none"
                />
                <label for="senupd" class="size-12">Négociable</label>
              </div>
            </div>
            <!-- <div :class="{ noclick: prix.length > 0 }">
              <div class="w-max-128">
                <label class="size-14 pb-1.5 block text-c"
                  >Interval de prix (prix min et prix max)</label
                >
                <div class="flex align-center justify-between space-x-10">
                  <input
                    id="sizsdea"
                    v-model="prixmin"
                    type="text"
                    placeholder="Prix min"
                    class="border w-full py-1 text-c h-7 size-14 rounded no-outlines px-2"
                  />
                  <input
                    id="sizessa"
                    v-model="prixmax"
                    type="text"
                    placeholder="Prix max"
                    class="border w-full py-1 text-c h-7 size-14 rounded no-outlines px-2"
                  />
                </div>
              </div>
              <div class="flex align-center space-x-2 pt-1.5">
                <input
                  id="senupd"
                  v-model="negoc"
                  type="checkbox"
                  value="yes"
                  class="border rounded no-outlines outline-none"
                />
                <label for="senupd" class="size-12">Négociable</label>
              </div>
            </div> -->
          </div>
        </div>
        <div>
          <h4 class="logo-color size-14 font-semibold my-4 border-b pb-1">
            Média (Images & Liens vidéos)
          </h4>
          <div class="flex flex-col space-y-4">
            <div class="">
              <div class="flex align-center justify-between my-2">
                <label class="size-14 pb-1 logo-color"
                  >Contenus images (Min: 4 & Max: 24)</label
                >
              </div>
              <div
                class="relative border"
                :class="{
                  'border shadow-sm border-red-500': erfile || bigsize,
                  shadow: !erfile,
                }"
              >
                <div>
                  <div
                    v-show="
                      image !== '' &&
                      loading === false &&
                      loaded &&
                      bigsize === false
                    "
                    class="w-full border-b"
                  >
                    <figure
                      class="image appearZ relative is-4by3 zoomings"
                      @click="open"
                    >
                      <img id="vidsource" src="" />
                    </figure>
                    <imgmodaled
                      v-if="imgmodaled"
                      :imgs="images"
                      :position="pos"
                      :indexer="active"
                      @close="close"
                    ></imgmodaled>
                  </div>
                  <div class="flex align-center justify-between">
                    <div v-show="images.length > 0">
                      <div
                        v-for="(i, j) in images.length"
                        :key="j"
                        class="hiddenmox"
                        :class="{
                          slide: active === j,
                        }"
                      >
                        <div class="flex align-center space-x-2 pt-1.5 pl-1.5">
                          <input
                            :id="'senudzpd' + i"
                            v-model="imgprincipale"
                            type="checkbox"
                            :checked="
                              imgprincipale.includes((i - 1).toString())
                                ? 'checked'
                                : ''
                            "
                            :value="(i - 1).toString()"
                            class="border rounded no-outlines outline-none"
                            @click="check"
                          />
                          <label :for="'senudzpd' + i" class="size-12"
                            >Image principale</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex align-center space-x-5 pt-1.5">
                      <a
                        v-show="images.length > 0"
                        class="border-none flex align-center size-12 logo-color px-3.5 pb-1.5 rounded button self-end"
                        @click="moduploadpic"
                      >
                        <svg
                          class="mr-1.5"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                            fill="#2d3748"
                          />
                          <path
                            d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                            fill="#2d3748"
                          />
                        </svg>

                        Modifier l'image
                      </a>
                      <a
                        v-show="images.length > 0"
                        class="border-none flex align-center size-12 logo-color px-3.5 pb-1.5 rounded button self-end"
                        @click="delpic"
                      >
                        <svg
                          class="mr-1.5"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z"
                            fill="#2d3748"
                          />
                        </svg>

                        Supprimer l'image
                      </a>
                    </div>
                  </div>
                  <div v-show="images.length > 0" class="border-b pb-2">
                    <div
                      v-for="(i, j) in images.length"
                      :key="j"
                      class="hiddenmox"
                      :class="{
                        slide: active === j,
                      }"
                    >
                      <div class="px-2">
                        <div class="w-max-128">
                          <label
                            :for="'sizezss' + j"
                            class="size-12 pb-0.8 block"
                            >Description de l'image</label
                          >
                          <input
                            :id="'sizezss' + j"
                            v-model="desc[active]"
                            type="text"
                            placeholder="Max 255 caractères..."
                            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-3">
                    <div
                      class="w-fit clickable m-0-auto text-center"
                      @click="uploadpic"
                    >
                      <div
                        class="flex w-fit m-0-auto text-center align-center space-x-2"
                      >
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4ZM16 15H4L8 7L11 13L13 9L16 15Z"
                              fill="#2d3748"
                            /></svg
                        ></span>
                        <span class="size-13 font-semibold logo-color"
                          >Ajouter une nouvelle image</span
                        >
                      </div>
                      <div class="wordbreaking mt-1">
                        <span class="size-11 block font-semibold logo-color"
                          >Vous ne pouvez ajouter que des images de format
                          <span class="text-red-600 size-12"
                            >.jpe?g et .png</span
                          ></span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="impp absolute opacity-0 znegatif">
                    <input
                      id="filevid"
                      ref="filevid"
                      hidden
                      type="file"
                      class="inputfilevid"
                      @change="handleFileUpload()"
                    />
                    <input
                      id="filevidmod"
                      ref="filevidmod"
                      hidden
                      type="file"
                      class="inputfilevidmod"
                      @change="handleModFileUpload()"
                    />
                  </div>
                </div>
                <div v-if="hasimage">
                  <imgs
                    :imgs="images"
                    :indexer="active"
                    @changeactive="changeactive"
                  ></imgs>
                </div>
              </div>
              <p
                v-show="unimg"
                class="size-12 appearZ text-red-700 leading-4 pt-1 pb-3"
              >
                Veuillez ajouter au min 4 images et au max 24 images
              </p>
              <div>
                <span v-show="erfile" class="size-12 font-semibold text-red-600"
                  >Veuillez ajouter une image
                </span>
                <span
                  v-show="!erfile && bigsize"
                  class="size-12 font-semibold text-red-600"
                  >La taille de l'image doit être &le; 15 MB
                </span>
              </div>
            </div>
            <div>
              <div class="w-max-128">
                <label for="sizrez" class="size-13 pb-0.8 block"
                  >Lien vidéo youtube</label
                >
                <input
                  id="sizrez"
                  v-model="links.yt"
                  type="text"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
                <p
                  v-show="noyt"
                  class="size-12 appearZ text-red-700 leading-4 pt-1 pb-3"
                >
                  Lien Youtube invalide
                </p>
              </div>
            </div>
            <div>
              <div class="w-max-128">
                <label for="sizrezzaz" class="size-13 pb-0.8 block"
                  >Lien vidéo TikTok</label
                >
                <input
                  id="sizrezzaz"
                  v-model="links.tiktok"
                  type="text"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
                <p
                  v-show="notiktok"
                  class="size-12 appearZ text-red-700 leading-4 pt-1 pb-3"
                >
                  Lien Tik Tok invalide
                </p>
              </div>
            </div>
            <div>
              <div class="w-max-128">
                <label for="sizreazz" class="size-13 pb-0.8 block"
                  >Lien vidéo Instagram</label
                >
                <input
                  id="sizreazz"
                  v-model="links.insta"
                  type="text"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
                <p
                  v-show="noinsta"
                  class="size-12 appearZ text-red-700 leading-4 pt-1 pb-3"
                >
                  Lien instagram invalide
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-4"></div>
        </div>
        <div>
          <h4 class="logo-color size-14 font-semibold my-4 border-b pb-1">
            Informations sur la propriété
          </h4>
          <div class="flex flex-col space-y-4">
            <div>
              <div class="w-max-128">
                <editor
                  v-model="tiny"
                  api-key="lky8nvtpigpvirb73qk2iobmxn3id88zwovbl7c0rw8hp9os"
                  initial-value="<p>Décrivez votre propriété...</p>"
                  :init="{
                    height: 320,
                    language_url: '/tinymce/langs/fr_FR.js',
                    language: 'fr_FR',
                    plugins: [
                      'advlist autolink lists link charmap code',
                      'searchreplace fullscreen',
                      'print preview anchor',
                      'paste wordcount table',
                    ],
                    toolbar:
                      'undo redo | formatselect code | forecolor | link fullscreen | bold italic underline | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | table tabledelete',
                    default_link_target: '_blank',
                  }"
                >
                </editor>
              </div>
            </div>
            <p
              v-show="uninfos"
              class="size-12 appearZ text-red-700 leading-4 pt-1 pb-3"
            >
              Veuillez donner une description de la propriété
            </p>
          </div>
        </div>
        <div class="border-b pb-8">
          <h4 class="logo-color size-14 font-semibold my-4 border-b pb-1">
            Caractéristiques de la propriété
          </h4>
          <div class="flex flex-col space-y-4">
            <div
              :class="{
                noclick: ['Studio', 'Magasin', 'Bureau', 'Terrain'].includes(
                  type
                ),
              }"
            >
              <div class="w-max-128">
                <label for="sizrexz" class="size-13 pb-0.8 block"
                  >Nombre de pièces (chambres)</label
                >
                <input
                  id="sizrexz"
                  v-model="pieces"
                  type="text"
                  placeholder="0 par défaut"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
              </div>
            </div>
            <div>
              <div class="w-max-128">
                <label for="sizrexxz" class="size-13 pb-0.8 block"
                  >Nombre de salles de bains</label
                >
                <input
                  id="sizrexxz"
                  v-model="bath"
                  type="text"
                  placeholder="0 par défaut"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
              </div>
            </div>
            <div>
              <div class="w-max-128">
                <label for="sizrexzz" class="size-13 pb-0.8 block"
                  >Nombre de garages (espace pour véhicule normal)</label
                >
                <input
                  id="sizrexzz"
                  v-model="garage"
                  type="text"
                  placeholder="0 par défaut"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                />
              </div>
            </div>
            <div>
              <label class="size-14 font-semibold logo-color pb-4 block"
                >Caractéristiques intérieures</label
              >
              <div v-for="(ind, i) in vindoor" :key="i" class="py-0.5">
                <label class="flex align-center container pb-1"
                  ><span class="w-fit size-13 -mt-0.75 multichoice-categ">{{
                    ind
                  }}</span>
                  <input v-model="indoor" type="checkbox" :value="ind" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div>
              <label class="size-14 font-semibold logo-color pb-4 block"
                >Caractéristiques extérieures</label
              >
              <div v-for="(ind, j) in voutdoor" :key="j" class="py-0.5">
                <label class="flex align-center container pb-1"
                  ><span class="w-fit size-13 -mt-0.75 multichoice-categ">{{
                    ind
                  }}</span>
                  <input v-model="outdoor" type="checkbox" :value="ind" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div>
              <label class="size-14 font-semibold logo-color pb-4 block"
                >Contrôle de l'énergie</label
              >
              <div v-for="(ind, k) in venergy" :key="k" class="py-0.5">
                <label class="flex align-center container pb-1"
                  ><span class="w-fit size-13 -mt-0.75 multichoice-categ">{{
                    ind
                  }}</span>
                  <input v-model="energy" type="checkbox" :value="ind" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <p v-show="oneerror" class="size-12 appearZ text-red-700 leading-4">
          Veuillez corriger les erreurs au dessus
        </p>
        <a
          class="border-none flex align-center size-13 text-white block mt-5 px-3.5 pb-1.5 rounded button btn-008489"
          :class="{ noclick: onsent }"
          @click="publish"
        >
          <svg
            v-show="!onsent"
            class="mr-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 3C18 2.65342 17.8205 2.33156 17.5257 2.14935C17.2309 1.96714 16.8628 1.95058 16.5528 2.10557L8.76393 6H5C3.34315 6 2 7.34315 2 9C2 10.6569 3.34315 12 5 12H5.27925L7.05132 17.3162C7.18744 17.7246 7.56958 18 8.00001 18H9.00001C9.55229 18 10 17.5523 10 17V12.618L16.5528 15.8944C16.8628 16.0494 17.2309 16.0329 17.5257 15.8507C17.8205 15.6684 18 15.3466 18 15V3Z"
              fill="#fff"
            />
          </svg>
          <span v-show="onsent" class="w-fit h-fit mr-2"
            ><i class="animate-spin fas fa-circle-notch color-white"></i
          ></span>
          <span v-show="!onsent" class="size-13 text-white"
            >Terminer et publier votre propriété</span
          >
          <span v-show="onsent" class="size-13 text-white"
            >Propriété en cours de publication...</span
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { vindoor, voutdoor, venergy } from '@/options/options.js'
import Editor from '@tinymce/tinymce-vue'
import Imgs from '~/components/amg/Imgs.vue'
import Typeprop from '~/components/dropdown/Typeprop.vue'
import Imgmodaled from '~/components/modal/Imgmodaled.vue'
export default {
  components: { Typeprop, Imgs, Imgmodaled, editor: Editor },
  data() {
    return {
      vindoor,
      voutdoor,
      venergy,
      infostaille: false,
      quittaille: true,
      store: false,
      type: '',
      taille: '',
      propos: '',
      partielle: '',
      typeloc: '',
      adresse: '',
      ville: '',
      cp: '',
      prix: '',
      prixmin: '',
      prixmax: '',
      tiny: '',
      negociable: 'no',
      infos: '',
      pieces: '',
      bath: '',
      garage: '',
      currentchangedfile: '',
      currentchangedimg: '',
      firstimg: 0,
      files: [],
      images: [],
      desc: [],
      imgprincipale: ['0'],
      checkedCateg: [],
      negoc: [],
      indoor: [],
      outdoor: [],
      energy: [],
      file: '',
      oldfile: '',
      image: '',
      oldimage: '',
      active: 0,
      links: { yt: '', tiktok: '', insta: '', fb: '' },
      erfile: false,
      loading: false,
      loaded: false,
      bigsize: false,
      imgmodaled: false,
      pos: { x: 0, y: 0 },
      noadresse: false,
      noprice: false,
      noinfos: false,
      noimg: false,
      ny: false,
      nt: false,
      ni: false,
    }
  },
  computed: {
    has4pic() {
      return this.files.length > 3 && this.files.length < 25
    },
    hasimage() {
      return this.images.length > 0
    },
    size() {
      return this.$store.state.size
    },
    onsent() {
      return this.store === true
    },
    oneerror() {
      return (
        this.unadresse === true ||
        this.unprice === true ||
        this.uninfos === true ||
        this.unimg === true ||
        this.noyt === true ||
        this.notiktok === true ||
        this.noinsta === true
      )
    },
    unadresse() {
      return this.noadresse === true
    },
    noyt() {
      return this.ny === true
    },
    notiktok() {
      return this.nt === true
    },
    noinsta() {
      return this.ni === true
    },
    unprice() {
      return this.noprice === true
    },
    uninfos() {
      return this.noinfos === true
    },
    unimg() {
      return this.noimg === true
    },
    modaled() {
      return this.$store.state.dash_mod
    },
  },
  watch: {
    taille(nv, ov) {
      if (this.$linker.isNumber(nv)) this.taille = nv
      else this.taille = ov
    },
    cp(nv, ov) {
      if (this.$linker.isNumber(nv)) this.cp = nv
      else this.cp = ov
    },
    negoc(nv, ov) {
      if (nv.length > 0) this.negociable = 'yes'
      else this.negociable = 'no'
    },
    adresse() {
      this.noadresse = false
    },
    links: {
      handler() {
        this.ny = false
        this.nt = false
        this.ni = false
      },
      deep: true,
    },
    infos() {
      this.noinfos = false
    },
    type(nv, ov) {
      if (['Studio', 'Magasin', 'Bureau', 'Terrain'].includes(nv)) {
        this.pieces = '0'
      }
    },
    prix(nv, ov) {
      if (this.$linker.isNumber(nv)) this.prix = nv
      else this.prix = ov

      this.noprice = false
    },
    prixmin(nv, ov) {
      if (this.$linker.isNumber(nv)) this.prixmin = nv
      else this.prixmin = ov
      this.noprice = false
    },
    prixmax(nv, ov) {
      if (this.$linker.isNumber(nv)) this.prixmax = nv
      else this.prixmax = ov
      this.noprice = false
    },
    pieces(nv, ov) {
      if (this.$linker.isNumber(nv)) this.pieces = nv
      else this.pieces = ov
    },
    bath(nv, ov) {
      if (this.$linker.isNumber(nv)) this.bath = nv
      else this.bath = ov
    },
    garage(nv, ov) {
      if (this.$linker.isNumber(nv)) this.garage = nv
      else this.garage = ov
    },
  },
  methods: {
    async insta(val = 500) {
      const embed = await fetch(
        'https://graph.facebook.com/v10.0/instagram_oembed?url=' +
          this.links.insta +
          '&access_token=1584357918425951|492c5db3d2edb3d0e8f1ca085e1824fd'
      )
        .then((res) => res.json())
        .catch(() => console.log("can't get embed link insta"))
      if (embed.error) this.ni = true
    },
    async tiktok(val = 500) {
      const embed = await fetch(
        'https://www.tiktok.com/oembed?url=' + this.links.tiktok
      )
        .then((res) => res.json())
        .catch(() => console.log("can't get embed link tiktok"))
      if (embed.status_msg) this.nt = true
    },
    async yt(val = 728) {
      const embed = await fetch(
        'https://www.youtube.com/oembed?url=' +
          this.links.yt +
          '&format=json&maxheight=728&maxwidth=' +
          val
      )
        .then((res) => res.json())
        .catch(() => console.log("can't get embed link yt"))
      if (embed === undefined) this.ny = true
    },
    async publish() {
      this.store = true
      this.ny = false
      this.nt = false
      this.ni = false
      if (this.adresse === '') this.noadresse = true
      else this.noadresse = false
      if (this.prix === '' && this.prixmin === '' && this.prixmax === '')
        this.noprice = true
      else this.noprice = false
      if (
        this.tiny === '' ||
        this.tiny === '<p>D&eacute;crivez votre propri&eacute;t&eacute;...</p>'
      )
        this.noinfos = true
      else this.noinfos = false
      if (this.has4pic) this.noimg = false
      else this.noimg = true

      if (this.links.yt !== '') {
        await this.yt()
      }
      if (this.links.tiktok !== '') {
        await this.tiktok()
      }
      if (this.links.insta !== '') {
        await this.insta()
      }

      if (
        !this.noadresse &&
        !this.noprice &&
        !this.noinfos &&
        !this.noimg &&
        !this.noyt &&
        !this.notiktok &&
        !this.noinsta
      ) {
        this.erfile = false
        const form = new FormData()
        form.append('type', this.type)
        form.append('taille', +this.taille)
        form.append('adresse', this.adresse)
        form.append('ville', this.ville)
        form.append('cp', this.cp)
        form.append('proposition', this.propos)
        form.append('percentage_part', +this.partielle)
        form.append('frequence_location', this.typeloc)
        form.append('prix_fix', +this.prix)
        form.append('prix_min', +this.prixmin)
        form.append('prix_max', +this.prixmax)
        form.append('negociable', this.negociable)
        form.append('desc', this.desc)
        this.files.forEach((file) => {
          form.append('file[]', file)
        })
        form.append('principale', +this.imgprincipale[0])
        if (this.links.yt !== '') form.append('yt', this.links.yt)
        if (this.links.tiktok !== '') form.append('tiktok', this.links.tiktok)
        if (this.links.insta !== '') form.append('insta', this.links.insta)
        if (this.links.fb !== '') form.append('fb', this.links.fb)
        form.append('infos', this.tiny)
        form.append('pieces', +this.pieces)
        form.append('bath', +this.bath)
        form.append('garage', +this.garage)
        form.append('indoor', this.indoor)
        form.append('outdoor', this.outdoor)
        form.append('energy', this.energy)
        const data = await this.$axios.$post('property', form)

        if (data.status === '201') {
          this.$store.commit('set_message', 'Propriété ajoutée')
          this.$store.commit('set_green', true)
          setTimeout(() => {
            this.$store.commit('set_green', false)
          }, 1800)
          this.$router.push(
            '/dashboard/proprietes/mes-proprietes/viewed?id=' + data.id
          )
        } else {
          this.$store.commit('set_message', 'Désolé, une erreur est survenue')
          this.$store.commit('set_red', true)
          setTimeout(() => {
            this.$store.commit('set_red', false)
          }, 1800)
        }
        this.store = false
      }
    },
    changeactive(val) {
      if (this.images.length > 0) {
        this.active = val
        document.getElementById('vidsource').src = this.images[val]
        this.image = this.images[val]
      }
    },
    check(e) {
      if (this.active === 0) {
        this.imgprincipale = ['0']
      } else if (this.imgprincipale.includes(this.active.toString())) {
        this.imgprincipale = []
        this.imgprincipale.push('0')
      } else {
        this.imgprincipale = []
        this.imgprincipale.push(this.active.toString())
      }
    },
    show(val) {
      if (val === 'taille') this.quittaille = false
      else if (val === 'visit') this.quitvisit = false
      else if (val === 'origin') this.quitorigin = false
      else this.quitlive = false
      setTimeout(() => {
        if (val === 'taille') {
          if (!this.quittaille) this.infostaille = true
          else this.infostaille = false
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
    open(e) {
      this.pos.x = e.pageX - 60
      this.pos.y = e.pageY - 60
      this.imgmodaled = true
    },
    typeprop(val) {
      this.type = val
    },
    viller(val) {
      this.ville = val
    },
    location(val) {
      this.typeloc = val
    },
    part(val) {
      this.partielle = val.substr(0, val.indexOf('%'))
      // console.log(this.partielle)
    },
    proposition(val) {
      this.propos = val
    },
    close() {
      this.imgmodaled = false
    },
    hide(val) {
      if (val === 'taille') {
        this.infostaille = false
        this.quittaille = true
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
    uploadpic() {
      this.noimg = false
      document.getElementById('filevid').click()
    },
    delpic() {
      this.noimg = false
      if (this.images.length > 0) {
        const index = this.images.indexOf(this.image)
        this.files.splice(index, 1)
        this.desc.splice(index, 1)
        this.images.splice(index, 1)
        if (index > 0) {
          this.active = index - 1
        } else this.active = 0
        if (this.images.length === 1) this.imgprincipale = ['principale0']
        if (this.images.length === 0) {
          this.erfile = false
          this.loading = false
          this.loaded = false
          this.bigsize = false
          this.file = ''
          this.image = ''
          this.files = []
          this.images = []
        }
      } else {
        this.erfile = false
        this.loading = false
        this.loaded = false
        this.bigsize = false
        this.file = ''
        this.image = ''
        this.files = []
        this.images = []
      }
    },
    moduploadpic() {
      this.noimg = false
      document.getElementById('filevidmod').click()
    },
    handleFileUpload() {
      this.oldfile = this.file
      const el = document.getElementById('vidsource')
      this.file = this.$refs.filevid.files[0]
      const reader = new FileReader()
      if (this.file) {
        this.loading = true
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          this.erfile = false
          if (this.file.size > 15000000) {
            this.bigsize = true
          } else if (this.files.length < 24) {
            this.files.push(this.file)
            const index = this.files.indexOf(this.file)
            this.desc[index] = ''
            reader.addEventListener(
              'load',
              function () {
                el.src = reader.result
                this.image = el.src
                this.images.push(this.image)
                if (this.files.length > 0) this.active = this.files.length - 1
              }.bind(this),
              false
            )
            this.bigsize = false
            reader.readAsDataURL(this.file)
          }

          this.loaded = true
        } else {
          this.erfile = true
        }
      } else if (this.oldfile && !this.bigsize && !this.erfile) {
        this.file = this.oldfile
      }
      this.loading = false
    },
    modification(tab, index, el) {
      const myel = []
      for (let i = 0; i < index; i++) {
        myel.push(tab[i])
      }
      myel.push(el)
      for (let i = index + 1; i < tab.length; i++) {
        myel.push(tab[i])
      }
      // console.log(myel)
      return myel
    },
    handleModFileUpload() {
      const index = this.images.indexOf(this.image)
      this.oldimage = this.image
      const el = document.getElementById('vidsource')
      this.file = this.$refs.filevidmod.files[0]
      const reader = new FileReader()
      if (this.file) {
        this.loading = true
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          this.erfile = false
          if (this.file.size > 15000000) {
            this.bigsize = true
          } else {
            this.files = this.modification(this.files, index, this.file)
            reader.addEventListener(
              'load',
              function () {
                el.src = reader.result
                this.image = el.src
                this.images = this.modification(this.images, index, this.image)
              }.bind(this),
              false
            )
            this.bigsize = false
            reader.readAsDataURL(this.file)
          }
          this.loaded = true
        } else {
          if (this.oldfile) {
            this.file = this.oldfile
          }
          this.erfile = true
        }
      } else if (this.oldfile && !this.bigsize && !this.erfile) {
        this.file = this.oldfile
      }
      this.loading = false
    },
  },
}
</script>

<style scoped>
.slide {
  display: block !important;
  animation: 0.7s appearZ;
}
.zoomings {
  transition: transform 0.25s ease;
  cursor: move !important;
}
</style>
