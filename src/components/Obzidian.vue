<template>
  <div
    id="Colecoes"
    class="bg-stone-900 mt-16 h-[10rem] bg-obzidian-pattern bg-cover bg-no-repeat md:h-[13rem]"
  >
    <div class="h-full items-center justify-center">
      <div
        class="md:max-w-2sxl mx-auto flex h-full w-full items-center justify-center px-6 text-center sm:max-w-lg md:px-0"
      >
        <img
          src="/svg/obzidian.svg"
          alt="Obzidian Collection"
          class="rellax"
          data-rellax-speed="-0.2"
          data-rellax-percentage="0.3"
        />
      </div>
    </div>
  </div>

  <ObzidianSlide />
  <ObzidianAbout />
</template>

<script lang="ts">
import ObzidianSlide from "./Obzidian/ObzidianSlide.vue";
import ObzidianAbout from "./Obzidian/ObzidianAbout.vue";

export default {
  components: {
    ObzidianSlide,
    ObzidianAbout,
  },
};
</script>
<style scoped></style>
