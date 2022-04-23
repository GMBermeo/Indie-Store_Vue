<template>
  <div>
    <Hero />
    <h1 class="text-red-400">Teste de Tailwind</h1>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Hero from "./components/Hero.vue";

export default {
  name: "Fio de nós",
  components: {
    HelloWorld,
    Hero,
  },
};
</script>
