<template>
  <CardModal
    v-if="toggleModal"
    :selectedProduct="selectedProduct"
    :lang="lang"
    v-on:closeModal="closeModal()"
  />
  <Hero />
  <NavBar />
  <About />
  <Obzidian />
  <Products
    :product="product"
    :lang="lang"
    v-on:whenOpenPhoto="openModal($event)"
  />
  <Footer />

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

export default {
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
  data() {
    return {
      toggleModal: false,
      selectedProduct: {
        id: Number,
        name: String,
        collection: String,
        price: String,
        photos: String,
      },
    };
  },
  computed: {
    lang: function () {
      if (navigator.language.split("-")[0] === "pt") {
        return "br";
      } else {
        return "en";
      }
    },
  },
  compilerOptions: {
    // treat all tags with a dash as custom elements
    isCustomElement: (tag: any) => tag.includes("-"),
  },
  methods: {
    openModal: function (product: Object) {
      this.toggleModal = !this.toggleModal;
      this.selectedProduct = product;
      console.log("App.vue - this.selectedProduct:");
      console.log(this.selectedProduct);
      console.log("locale: " + navigator.language.split("-")[0]);
    },
    closeModal: function () {
      this.toggleModal = !this.toggleModal;
    },
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
