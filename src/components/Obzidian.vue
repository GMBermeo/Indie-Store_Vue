<template>
  <div
    class="max-h-348 bg-neutral-900 z-5 h-[12rem] w-full border-0 bg-obzidian-pattern bg-cover bg-center bg-no-repeat bg-blend-hard-light md:h-[16rem] lg:h-[20rem]"
  >
    <div class="p-36px flex h-full w-full items-center justify-center">
      <div class="text-center">
        <ObzidianLogo class="rellax" data-rellax-speed="2" />
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
import ObzidianLogo from "./svg/ObzidianLogo.vue";
export default {
  components: {
    ObzidianLogo,
  },
};
</script>
