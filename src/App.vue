<template>
  <CardModal
    v-if="toggleModal"
    :modeloEscolhido="modeloEscolhido"
    v-on:closeModal="closeModal()"
  />
  <Hero />
  <NavBar />
  <About />
  <Obzidian />
  <Pedidos
    :modelo="modelo"
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
import Pedidos from "./components/Pedidos.vue";
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
    Pedidos,
    Postload,
    Footer,
    CardModal,
  },
  data() {
    return {
      toggleModal: false,
      modeloEscolhido: {
        id: Number,
        nome: String,
        colecao: String,
        preco: String,
        foto: String,
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
    openModal: function (modelo: Object) {
      this.toggleModal = !this.toggleModal;
      this.modeloEscolhido = modelo;
      console.log("this.modeloEscolhido" + this.modeloEscolhido);
      console.log("locale:" + navigator.language.split("-")[0]);
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
