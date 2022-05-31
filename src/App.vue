<template>
  <Hero />
  <NavBar />
  <About />
  <Obzidian />
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
import Postload from "./components/Postload.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "Fio de nós",
  components: {
    Hero,
    NavBar,
    About,
    Obzidian,
    Postload,
    Footer,
  },
  compilerOptions: {
    // treat all tags with a dash as custom elements
    isCustomElement: (tag) => tag.includes("-"),
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
