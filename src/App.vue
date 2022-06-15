<template>
  <CardModal
    v-if="toggleModal"
    :selectedProduct="selectedProduct"
    :text="text"
    v-on:closeModal="closeModal()"
    v-on:placeOrder="placeOrder($event)"
  />
  <Hero />
  <NavBar :text="text" />
  <About :text="text" />
  <Obzidian :text="text" />
  <Products
    :products="products"
    :text="text"
    v-on:whenOpenPhoto="openModal($event)"
    v-on:placeOrder="placeOrder($event)"
  />
  <Footer :data="data" :lang="lang" />

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
    lang: () => (navigator.language.split("-")[0] === "pt" ? "br" : "en"),
    data: () => dataJSON,
    products: ({ lang }: { lang: String }) =>
      lang == "br" ? productsJSON.br : productsJSON.en,
    text: ({ lang }: { lang: String }) =>
      lang == "br" ? textJSON.br : textJSON.en,
  },
  data() {
    return {
      toggleModal: false,
    };
  },
  methods: {
    openModal: function (this: any, product: Object) {
      this.toggleModal = !this.toggleModal;
      this.selectedProduct = product;
    },

    closeModal: function (this: any) {
      this.toggleModal = !this.toggleModal;
    },
    placeOrder: function (this: any, product: any) {
      if (product != undefined) {
        console.log(this.text.whatsappMessage);
        window.open(
          "https://wa.me/" +
            data.whatsapp +
            "?text=" +
            encodeURIComponent(
              this.text.whatsappMessage[0] +
                product.name +
                this.text.whatsappMessage[1] +
                product.collection
            ),
          "_blank"
        );
      } else {
        window.open("https://wa.me/" + data.whatsapp, "_blank");
      }
    },
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
