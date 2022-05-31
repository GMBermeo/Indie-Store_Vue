<template>
  <div
    id="Colecoes"
    class="bg-stone-900 mt-16 h-[10rem] bg-obzidian-pattern bg-cover bg-no-repeat md:h-[13rem]"
  >
    <div class="h-full items-center justify-center">
      <div
        class="md:max-w-2sxl mx-auto flex h-full w-full items-center justify-center px-6 text-center sm:max-w-lg md:px-0"
      >
        <ObzidianLogo
          alt="Obzidian Collection"
          class="rellax"
          data-rellax-speed="-0.5"
          data-rellax-percentage="0.4"
        />
      </div>
    </div>
  </div>

  <ObzidianSlide />
  <ObzidianAbout />
  <ObzidianPedidos />
</template>

<script lang="ts">
import ObzidianLogo from "./svg/ObzidianLogo.vue";
import ObzidianSlide from "./Obzidian/ObzidianSlide.vue";
import ObzidianAbout from "./Obzidian/ObzidianAbout.vue";
import ObzidianPedidos from "./Obzidian/ObzidianPedidos.vue";

export default {
  components: {
    ObzidianLogo,
    ObzidianSlide,
    ObzidianAbout,
    ObzidianPedidos,
  },
};
</script>
<style scoped></style>
