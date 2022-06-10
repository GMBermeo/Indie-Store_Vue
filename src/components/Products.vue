<template>
  <div class="inner-container" id="Pedidos">
    <div class="gallery">
      <div
        v-for="product in products"
        @click="openPhoto(product)"
        class="card-product"
        :key="product.id"
        :style="{
          'background-image':
            'url(/images/mockup' + product.photos[0] + 'sm.jpg)',
        }"
        :class="[
          product.id <= 2
            ? 'col-span-3'
            : [
                product.id == products.length ? 'col-span-6' : 'col-span-3',
                ' md:col-span-2',
              ],
        ]"
      >
        <FullIcon class="ml-auto" />
        <div
          class="card-info md:p-4"
          :class="[product.id === products.length ? 'p-8' : 'p-4']"
        >
          <FioLogo class="fill-white icon" />
          <div
            :class="[
              product.id === products.length ? 'text-3xl' : 'text-xl',
              'md:text-2xl',
            ]"
          >
            <div>Fio de Nós</div>
            <div>
              {{ lang == "br" ? product.collection.br : product.collection.en }}
            </div>
          </div>
          <div
            :class="[
              product.id === products.length ? 'text-lg' : 'text-sm',
              'md:text-base',
            ]"
          >
            <div>{{ lang == "br" ? product.name.br : product.name.en }}</div>
            <div>{{ lang == "br" ? product.price.br : product.price.en }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="inner-container">
    <div class="mb-10 w-full px-4 sm:px-0">
      <button
        class="bg-black text-white float-right ml-3 h-16 w-[10rem] rounded-xl text-2xl md:w-[20rem]"
      >
        {{ lang == "br" ? "Fazer pedido" : "Place order" }}
      </button>
      <p class="text-lg">
        Integer suscipit velit eget neque vulputate congue. Donec auctor
        pulvinar tortor quis cursus. Sed consectetur facilisis metus dictum
        placerat. Morbi sollicitudin congue pellentesque. Integer posuere quis
        tortor vitae molestie. Proin elit erat, ultricies porttitor maximus
        eget, finibus at dolor. Aliquam erat volutpat. Sed lobortis eros nec
        velit sollicitudin elementum. Nulla mi eros, mollis et arcu quis,
        posuere interdum turpis. Aliquam ut porttitor lacus. Maecenas ut
        porttitor nisl. Nullam pharetra elit ut cursus congue. Nam ut lorem
        eros.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import FullIcon from "./svg/FullIcon.vue";
import FioLogo from "./svg/FioLogo.vue";

export default {
  props: ["lang"],
  data: () => {
    return {
      // toggleModal: false,
      products: [
        {
          id: 1,
          name: { br: "Weary Neon Insects", en: "Weary Neon Insects" },
          collection: { br: "Coleção OBZIDIAN", en: "Obzidian collection" },
          price: { br: "280,00", en: "$ 90.00" },
          description: {
            br: "In molestie aliquam ex, nec convallis nibh tempus quis. Vivamus ultrices magna in est rutrum, in pellentesque orci posuere. Ut in tellus suscipit, venenatis tortor in, condimentum odio. Pellentesque ut efficitur ipsum. Praesent sit amet enim gravida, vehicula orci vel, tempor mi. Maecenas sodales et nisl rhoncus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris lacinia, tincidunt elit eu, accumsan nunc. Nunc sed orci sed sapien accumsan lobortis sit amet eget diam. Quisque tempor lobortis feugiat. Etiam vitae turpis eu nibh pulvinar gravida in eu quam. Quisque vel mauris id massa hendrerit sodales a quis neque. Maecenas ac sapien fringilla, finibus lectus at, auctor elit.",
            en: "In molestie aliquam ex, nec convallis nibh tempus quis. Vivamus ultrices magna in est rutrum, in pellentesque orci posuere. Ut in tellus suscipit, venenatis tortor in, condimentum odio. Pellentesque ut efficitur ipsum. Praesent sit amet enim gravida, vehicula orci vel, tempor mi. Maecenas sodales et nisl rhoncus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris lacinia, tincidunt elit eu, accumsan nunc. Nunc sed orci sed sapien accumsan lobortis sit amet eget diam. Quisque tempor lobortis feugiat. Etiam vitae turpis eu nibh pulvinar gravida in eu quam. Quisque vel mauris id massa hendrerit sodales a quis neque. Maecenas ac sapien fringilla, finibus lectus at, auctor elit.",
          },
          photos: [
            "/pexels-mikhail-nilov-8108403-",
            "/pexels-mikhail-nilov-8108408-",
            "/pexels-mikhail-nilov-8108417-",
          ],
        },
        {
          id: 2,
          name: { br: "Cyberleather Chrome", en: "Cyberleather Chrome" },
          collection: { br: "Coleção OBZIDIAN", en: "Obzidian collection" },
          price: { br: "250,00", en: "$ 70.00" },
          description: {
            br: "Duis laoreet pellentesque eros, ut tempor justo suscipit eget. Maecenas aliquet odio id urna vulputate, vel bibendum urna euismod. Curabitur sodales magna eget est tempus mollis quis a ante. Pellentesque tempor metus tincidunt eros ultricies consectetur. Aliquam egestas in eros id posuere. Fusce metus magna, faucibus eget risus at, sollicitudin blandit lorem. Aenean quis consectetur libero, quis cursus dolor.",
            en: "Duis laoreet pellentesque eros, ut tempor justo suscipit eget. Maecenas aliquet odio id urna vulputate, vel bibendum urna euismod. Curabitur sodales magna eget est tempus mollis quis a ante. Pellentesque tempor metus tincidunt eros ultricies consectetur. Aliquam egestas in eros id posuere. Fusce metus magna, faucibus eget risus at, sollicitudin blandit lorem. Aenean quis consectetur libero, quis cursus dolor.",
          },
          photos: [
            "/pexels-cottonbro-4904537-",
            "/pexels-cottonbro-4904473-",
            "/pexels-cottonbro-4904449-",
            "/pexels-cottonbro-4904442-",
          ],
        },
        {
          id: 3,
          name: {
            br: "Tranquil Coded Peace",
            en: "Tranquil Coded Peace",
          },
          collection: { br: "Coleção OBZIDIAN", en: "Obzidian collection" },
          price: { br: "380,00", en: "$ 135.00" },
          description: {
            br: "Phasellus tincidunt justo quam, nec eleifend nulla vehicula vitae. Pellentesque nec sapien eu sem posuere commodo at eu massa. In ullamcorper luctus velit. Donec sagittis, sapien non pretium pulvinar, arcu elit mattis est, a cursus mi est ac tortor. Integer porttitor metus et mi ultrices, sed dictum nisl varius. Donec quis justo ac mauris laoreet porttitor. Etiam consectetur fringilla lectus, in gravida tortor interdum ac. Suspendisse porttitor consequat purus. Nunc odio velit, ullamcorper quis vulputate non, commodo quis magna. Aliquam eget elementum nunc. Nulla facilisi. Vestibulum pellentesque pretium arcu, faucibus viverra ligula placerat ac. Nullam mollis auctor est, in accumsan eros hendrerit eu. In sem justo, feugiat et aliquam sed, accumsan sit amet mi.",
            en: "Phasellus tincidunt justo quam, nec eleifend nulla vehicula vitae. Pellentesque nec sapien eu sem posuere commodo at eu massa. In ullamcorper luctus velit. Donec sagittis, sapien non pretium pulvinar, arcu elit mattis est, a cursus mi est ac tortor. Integer porttitor metus et mi ultrices, sed dictum nisl varius. Donec quis justo ac mauris laoreet porttitor. Etiam consectetur fringilla lectus, in gravida tortor interdum ac. Suspendisse porttitor consequat purus. Nunc odio velit, ullamcorper quis vulputate non, commodo quis magna. Aliquam eget elementum nunc. Nulla facilisi. Vestibulum pellentesque pretium arcu, faucibus viverra ligula placerat ac. Nullam mollis auctor est, in accumsan eros hendrerit eu. In sem justo, feugiat et aliquam sed, accumsan sit amet mi.",
          },
          photos: [
            "/pexels-cottonbro-8717527-",
            "/pexels-cottonbro-8717523-",
            "/pexels-cottonbro-8717532-",
            "/pexels-cottonbro-8717533-",
          ],
        },
        {
          id: 4,
          name: { br: "Paintings made away", en: "Paintings made away" },
          collection: { br: "Coleção DUNE", en: "Dune collection" },
          price: { br: "120,00", en: "$ 49.00" },
          description: {
            br: "Etiam lacinia iaculis massa vel iaculis. Nunc gravida sem et ipsum vestibulum finibus. Donec vulputate justo ante, ut sollicitudin ligula gravida eget. Integer euismod posuere mi quis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis est, tempus in velit id, malesuada rutrum nisl. In leo orci, feugiat vitae ultricies sed, congue eget quam. Donec sed libero varius, pellentesque mauris ut, scelerisque est. Vivamus in est sit amet est commodo elementum ac eget massa.",
            en: "Etiam lacinia iaculis massa vel iaculis. Nunc gravida sem et ipsum vestibulum finibus. Donec vulputate justo ante, ut sollicitudin ligula gravida eget. Integer euismod posuere mi quis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis est, tempus in velit id, malesuada rutrum nisl. In leo orci, feugiat vitae ultricies sed, congue eget quam. Donec sed libero varius, pellentesque mauris ut, scelerisque est. Vivamus in est sit amet est commodo elementum ac eget massa.",
          },
          photos: [
            "/pexels-cottonbro-10679206-",
            "/pexels-cottonbro-10679176-",
            "/pexels-cottonbro-10679168-",
            "/pexels-cottonbro-10679233-",
          ],
        },
        {
          id: 5,
          name: { br: "Stranded Sands", en: "Stranded Sands" },
          collection: { br: "Coleção DUNE", en: "Dune collection" },
          price: { br: "320,00", en: "$ 120.00" },
          description: {
            br: "Sed consequat vestibulum dui, sit amet placerat nulla dapibus ut. Phasellus sit amet rhoncus arcu. Vivamus eget rhoncus ligula, non accumsan nisl. Nullam quis augue dui. Aenean maximus id nulla commodo congue. Aenean molestie nulla ac pulvinar tincidunt. Quisque convallis nulla ac eleifend congue. Aenean placerat, magna id ultrices sodales, orci ex condimentum augue, eu egestas ligula nisl venenatis ex. Nam et ex egestas, lacinia nisl at, vulputate velit. Pellentesque id mi at justo condimentum blandit vitae nec mi. Fusce eget feugiat mauris, vel tristique tellus. Suspendisse potenti. Nam venenatis mi et luctus aliquam. Ut eget sem euismod, feugiat felis ut, volutpat odio.",
            en: "Sed consequat vestibulum dui, sit amet placerat nulla dapibus ut. Phasellus sit amet rhoncus arcu. Vivamus eget rhoncus ligula, non accumsan nisl. Nullam quis augue dui. Aenean maximus id nulla commodo congue. Aenean molestie nulla ac pulvinar tincidunt. Quisque convallis nulla ac eleifend congue. Aenean placerat, magna id ultrices sodales, orci ex condimentum augue, eu egestas ligula nisl venenatis ex. Nam et ex egestas, lacinia nisl at, vulputate velit. Pellentesque id mi at justo condimentum blandit vitae nec mi. Fusce eget feugiat mauris, vel tristique tellus. Suspendisse potenti. Nam venenatis mi et luctus aliquam. Ut eget sem euismod, feugiat felis ut, volutpat odio.",
          },
          photos: [
            "/pexels-cottonbro-5120193-",
            "/pexels-cottonbro-5119211-",
            "/pexels-cottonbro-5119921-",
            "/pexels-cottonbro-5119414-",
            "/pexels-cottonbro-5119398-",
          ],
        },
      ],
    };
  },
  methods: {
    openPhoto: function (product: Object) {
      this.$emit("whenOpenPhoto", product);
    },
  },
  components: {
    FullIcon,
    FioLogo,
  },
};
</script>
<style scoped>
.card-info {
  background-image: linear-gradient(#00000000, #000000aa);
  color: white;
  opacity: 0.75;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
}
@media (hover: hover) {
  .card-info:hover {
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }
}

@media (hover: none) {
  .card-info {
    /* background-image: linear-gradient(#00000000, #000000aa); */
    opacity: 1;
  }
}
</style>
<style lang="postcss" scoped>
.gallery {
  @apply mb-5 grid w-full grid-cols-6 gap-4 px-4 sm:px-0 md:gap-6;
}
.card-product {
  @apply flex aspect-[9/12] w-full cursor-pointer flex-col bg-cover bg-center;
}

.card-info {
  @apply m-0 mr-auto mt-auto w-full flex-col;
}

.icon {
  @apply h-6 w-6 sm:h-8 sm:w-8;
}
</style>
