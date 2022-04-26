<template>
  <div>
    <Hero />
    <NavBar />
    <About />
    <h1
      class="text-primary-400 lg:text-stone-50 md:text-neutral-900 text-center"
    >
      Teste de Tailwind
    </h1>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";

export default {
  name: "Fio de nós",
  components: {
    Hero,
    NavBar,
    About,
  },
};
</script>
