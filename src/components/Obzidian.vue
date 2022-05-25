<template>
  <div
    class="bg-stone-900 mt-16 h-[10rem] bg-obzidian-pattern bg-cover bg-center bg-no-repeat md:h-[13rem]"
  >
    <div class="h-full items-center justify-center">
      <div
        class="md:max-w-2sxl mx-auto flex h-full w-full items-center justify-center px-6 text-center sm:max-w-lg md:px-0"
      >
        <ObzidianLogo />
      </div>
    </div>
  </div>
  <ObzidianSlide />
  <ObzidianAbout />
</template>
<style></style>
<script>
import ObzidianLogo from "./svg/ObzidianLogo.vue";
import ObzidianSlide from "./Obzidian/ObzidianSlide.vue";
import ObzidianAbout from "./Obzidian/ObzidianAbout.vue";

export default {
  components: {
    ObzidianLogo,
    ObzidianSlide,
    ObzidianAbout,
  },
};
</script>
