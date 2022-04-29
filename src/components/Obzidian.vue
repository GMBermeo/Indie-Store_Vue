<template>
  <div
    class="inner-container bg-stone-900 bg-obzidian-pattern bg-cover bg-center bg-no-repeat md:h-[10rem] lg:h-[20rem]"
  >
    <div class="flex items-center justify-center">
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
