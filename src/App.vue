<template>
  <Hero />
  <NavBar />
  <div class="min-w-md sm:min-w-lg mx-auto">
    <About />
  </div>
  <Obzidian data-rellax-percentage="0.5" />

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

export default {
  name: "Fio de nós",
  components: {
    Hero,
    NavBar,
    About,
    Obzidian,
  },
  compilerOptions: {
    // treat all tags with a dash as custom elements
    isCustomElement: (tag) => tag.includes("-"),
  },
};
</script>
<style>
body::after {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  z-index: -1;
  content: url("./images/mockuping/pexels-cottonbro-5119398.jpg")
    url("./images/mockuping/pexels-cottonbro-6153353.jpg");
}
</style>
