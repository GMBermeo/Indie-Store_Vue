<template>
  <CardModal
    v-if="toggleModal"
    :selectedProduct="selectedProduct"
    :lang="lang"
    v-on:closeModal="closeModal()"
    v-on:placeOrder="placeOrder($event)"
  />
  <Hero />
  <NavBar :lang="lang" />
  <About :text="text" />
  <Obzidian :text="text" />
  <Products
    :products="products"
    :lang="lang"
    :text="text"
    v-on:whenOpenPhoto="openModal($event)"
    v-on:placeOrder="placeOrder($event)"
  />
  <Footer :whatsapp="whatsapp" :lang="lang" />

  <Postload />

  <!-- <div
      class="text-primary-400 lg:text-stone-50 md:text-neutral-900 absolute bottom-0 w-full"
    >
      <h1 class="text-white text-center">Teste de Tailwind</h1>
    </div> -->
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Obzidian from "./components/Obzidian.vue";
import Products from "./components/Products.vue";
import Postload from "./components/Postload.vue";
import Footer from "./components/Footer.vue";
import CardModal from "./components/utils/CardModal.vue";
import data from "./data/data.json";
import productsJSON from "./data/products.json";
import textJSON from "./data/text.json";
import dataJSON from "./data/data.json";

export default {
  compilerOptions: {
    // treat all tags with a dash as custom elements
    isCustomElement: (tag: any) => tag.includes("-"),
  },
  name: "Fio de nós",
  components: {
    Hero,
    NavBar,
    About,
    Obzidian,
    Products,
    Postload,
    Footer,
    CardModal,
  },

  computed: {
    lang: function () {
      if (navigator.language.split("-")[0] === "pt") {
        return "br";
      } else {
        return "en";
      }
    },
    products: function () {
      return productsJSON;
    },
    text: function (lang: string) {
      if (lang == "br") {
        return textJSON.br;
      } else {
        return textJSON.en;
      }
    },
    data: function (lang: string) {
      if (lang == "br") {
        return dataJSON.br;
      } else {
        return dataJSON.en;
      }
    },
  },
  methods: {
    openModal: function (product: Object) {
      this.toggleModal = !this.toggleModal;
      this.selectedProduct = product;
    },
    closeModal: function () {
      this.toggleModal = !this.toggleModal;
    },
    placeOrder: function (product: any, text: any) {
      if (product != undefined) {
        window.open(
          "https://wa.me/" +
            data.whatsapp +
            "?text=" +
            encodeURIComponent(
              text.whatsappMessage.p1 +
                product.name +
                text.whatsappMessage.p2 +
                product.collection
            ),
          "_blank"
        );
      } else {
        window.open("https://wa.me/556199922299", "_blank");
      }
    },
  },
  data() {
    return {
      data: data,
      toggleModal: false,
      whatsapp: "556199922299",
      // selectedProduct: {
      //   collection: Object,
      //   description: Object,
      //   id: Number,
      //   name: Object,
      //   photos: Array,
      //   price: Object,
      // },
      // products: [
      //   {
      //     id: 1,
      //     name: { br: "Weary Neon Insects", en: "Weary Neon Insects" },
      //     collection: { br: "Coleção OBZIDIAN", en: "Obzidian collection" },
      //     price: { br: "280,00", en: "$ 90.00" },
      //     description: {
      //       br: "In molestie aliquam ex, nec convallis nibh tempus quis. Vivamus ultrices magna in est rutrum, in pellentesque orci posuere. Ut in tellus suscipit, venenatis tortor in, condimentum odio. Pellentesque ut efficitur ipsum. Praesent sit amet enim gravida, vehicula orci vel, tempor mi. Maecenas sodales et nisl rhoncus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris lacinia, tincidunt elit eu, accumsan nunc. Nunc sed orci sed sapien accumsan lobortis sit amet eget diam. Quisque tempor lobortis feugiat. Etiam vitae turpis eu nibh pulvinar gravida in eu quam. Quisque vel mauris id massa hendrerit sodales a quis neque. Maecenas ac sapien fringilla, finibus lectus at, auctor elit.",
      //       en: "In molestie aliquam ex, nec convallis nibh tempus quis. Vivamus ultrices magna in est rutrum, in pellentesque orci posuere. Ut in tellus suscipit, venenatis tortor in, condimentum odio. Pellentesque ut efficitur ipsum. Praesent sit amet enim gravida, vehicula orci vel, tempor mi. Maecenas sodales et nisl rhoncus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris lacinia, tincidunt elit eu, accumsan nunc. Nunc sed orci sed sapien accumsan lobortis sit amet eget diam. Quisque tempor lobortis feugiat. Etiam vitae turpis eu nibh pulvinar gravida in eu quam. Quisque vel mauris id massa hendrerit sodales a quis neque. Maecenas ac sapien fringilla, finibus lectus at, auctor elit.",
      //     },
      //     photos: [
      //       "/pexels-mikhail-nilov-8108403-",
      //       "/pexels-mikhail-nilov-8108408-",
      //       "/pexels-mikhail-nilov-8108417-",
      //     ],
      //   },
      //   {
      //     id: 2,
      //     name: { br: "Cyberleather Chrome", en: "Cyberleather Chrome" },
      //     collection: { br: "Coleção OBZIDIAN", en: "Obzidian collection" },
      //     price: { br: "250,00", en: "$ 70.00" },
      //     description: {
      //       br: "Duis laoreet pellentesque eros, ut tempor justo suscipit eget. Maecenas aliquet odio id urna vulputate, vel bibendum urna euismod. Curabitur sodales magna eget est tempus mollis quis a ante. Pellentesque tempor metus tincidunt eros ultricies consectetur. Aliquam egestas in eros id posuere. Fusce metus magna, faucibus eget risus at, sollicitudin blandit lorem. Aenean quis consectetur libero, quis cursus dolor.",
      //       en: "Duis laoreet pellentesque eros, ut tempor justo suscipit eget. Maecenas aliquet odio id urna vulputate, vel bibendum urna euismod. Curabitur sodales magna eget est tempus mollis quis a ante. Pellentesque tempor metus tincidunt eros ultricies consectetur. Aliquam egestas in eros id posuere. Fusce metus magna, faucibus eget risus at, sollicitudin blandit lorem. Aenean quis consectetur libero, quis cursus dolor.",
      //     },
      //     photos: [
      //       "/pexels-cottonbro-4904537-",
      //       "/pexels-cottonbro-4904473-",
      //       "/pexels-cottonbro-4904449-",
      //       "/pexels-cottonbro-4904442-",
      //     ],
      //   },
      //   {
      //     id: 3,
      //     name: {
      //       br: "Tranquil Coded Peace",
      //       en: "Tranquil Coded Peace",
      //     },
      //     collection: { br: "Coleção MARBLE", en: "Marble collection" },
      //     price: { br: "380,00", en: "$ 135.00" },
      //     description: {
      //       br: "Phasellus tincidunt justo quam, nec eleifend nulla vehicula vitae. Pellentesque nec sapien eu sem posuere commodo at eu massa. In ullamcorper luctus velit. Donec sagittis, sapien non pretium pulvinar, arcu elit mattis est, a cursus mi est ac tortor. Integer porttitor metus et mi ultrices, sed dictum nisl varius. Donec quis justo ac mauris laoreet porttitor. Etiam consectetur fringilla lectus, in gravida tortor interdum ac. Suspendisse porttitor consequat purus. Nunc odio velit, ullamcorper quis vulputate non, commodo quis magna. Aliquam eget elementum nunc. Nulla facilisi. Vestibulum pellentesque pretium arcu, faucibus viverra ligula placerat ac. Nullam mollis auctor est, in accumsan eros hendrerit eu. In sem justo, feugiat et aliquam sed, accumsan sit amet mi.",
      //       en: "Phasellus tincidunt justo quam, nec eleifend nulla vehicula vitae. Pellentesque nec sapien eu sem posuere commodo at eu massa. In ullamcorper luctus velit. Donec sagittis, sapien non pretium pulvinar, arcu elit mattis est, a cursus mi est ac tortor. Integer porttitor metus et mi ultrices, sed dictum nisl varius. Donec quis justo ac mauris laoreet porttitor. Etiam consectetur fringilla lectus, in gravida tortor interdum ac. Suspendisse porttitor consequat purus. Nunc odio velit, ullamcorper quis vulputate non, commodo quis magna. Aliquam eget elementum nunc. Nulla facilisi. Vestibulum pellentesque pretium arcu, faucibus viverra ligula placerat ac. Nullam mollis auctor est, in accumsan eros hendrerit eu. In sem justo, feugiat et aliquam sed, accumsan sit amet mi.",
      //     },
      //     photos: [
      //       "/pexels-cottonbro-8717527-",
      //       "/pexels-cottonbro-8717523-",
      //       "/pexels-cottonbro-8717532-",
      //       "/pexels-cottonbro-8717533-",
      //     ],
      //   },
      //   {
      //     id: 4,
      //     name: { br: "Paintings made away", en: "Paintings made away" },
      //     collection: { br: "Coleção TOPAZ", en: "Topaz collection" },
      //     price: { br: "120,00", en: "$ 49.00" },
      //     description: {
      //       br: "Etiam lacinia iaculis massa vel iaculis. Nunc gravida sem et ipsum vestibulum finibus. Donec vulputate justo ante, ut sollicitudin ligula gravida eget. Integer euismod posuere mi quis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis est, tempus in velit id, malesuada rutrum nisl. In leo orci, feugiat vitae ultricies sed, congue eget quam. Donec sed libero varius, pellentesque mauris ut, scelerisque est. Vivamus in est sit amet est commodo elementum ac eget massa.",
      //       en: "Etiam lacinia iaculis massa vel iaculis. Nunc gravida sem et ipsum vestibulum finibus. Donec vulputate justo ante, ut sollicitudin ligula gravida eget. Integer euismod posuere mi quis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis est, tempus in velit id, malesuada rutrum nisl. In leo orci, feugiat vitae ultricies sed, congue eget quam. Donec sed libero varius, pellentesque mauris ut, scelerisque est. Vivamus in est sit amet est commodo elementum ac eget massa.",
      //     },
      //     photos: [
      //       "/pexels-cottonbro-10679206-",
      //       "/pexels-cottonbro-10679176-",
      //       "/pexels-cottonbro-10679168-",
      //       "/pexels-cottonbro-10679233-",
      //     ],
      //   },
      //   {
      //     id: 5,
      //     name: { br: "Stranded Sands", en: "Stranded Sands" },
      //     collection: { br: "Coleção DUNE", en: "Dune collection" },
      //     price: { br: "320,00", en: "$ 120.00" },
      //     description: {
      //       br: "Sed consequat vestibulum dui, sit amet placerat nulla dapibus ut. Phasellus sit amet rhoncus arcu. Vivamus eget rhoncus ligula, non accumsan nisl. Nullam quis augue dui. Aenean maximus id nulla commodo congue. Aenean molestie nulla ac pulvinar tincidunt. Quisque convallis nulla ac eleifend congue. Aenean placerat, magna id ultrices sodales, orci ex condimentum augue, eu egestas ligula nisl venenatis ex. Nam et ex egestas, lacinia nisl at, vulputate velit. Pellentesque id mi at justo condimentum blandit vitae nec mi. Fusce eget feugiat mauris, vel tristique tellus. Suspendisse potenti. Nam venenatis mi et luctus aliquam. Ut eget sem euismod, feugiat felis ut, volutpat odio.",
      //       en: "Sed consequat vestibulum dui, sit amet placerat nulla dapibus ut. Phasellus sit amet rhoncus arcu. Vivamus eget rhoncus ligula, non accumsan nisl. Nullam quis augue dui. Aenean maximus id nulla commodo congue. Aenean molestie nulla ac pulvinar tincidunt. Quisque convallis nulla ac eleifend congue. Aenean placerat, magna id ultrices sodales, orci ex condimentum augue, eu egestas ligula nisl venenatis ex. Nam et ex egestas, lacinia nisl at, vulputate velit. Pellentesque id mi at justo condimentum blandit vitae nec mi. Fusce eget feugiat mauris, vel tristique tellus. Suspendisse potenti. Nam venenatis mi et luctus aliquam. Ut eget sem euismod, feugiat felis ut, volutpat odio.",
      //     },
      //     photos: [
      //       "/pexels-cottonbro-5120193-",
      //       "/pexels-cottonbro-5119211-",
      //       "/pexels-cottonbro-5119921-",
      //       "/pexels-cottonbro-5119414-",
      //       "/pexels-cottonbro-5119398-",
      //     ],
      //   },
      // ],
    };
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
