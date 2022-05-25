<template>
  <header>
    <div
      class="md:border-20 max-h-348 rellax -z-50 h-[12rem] w-full border-0 bg-primary-400 bg-header-hero bg-cover bg-center bg-no-repeat bg-blend-multiply md:h-[16rem] lg:h-[20rem]"
      zindex="10"
      data-rellax-speed="1"
    >
      <div class="p-36px flex h-full w-full items-center justify-center">
        <div class="text-center">
          <FioLogoFull class="rellax" data-rellax-speed="-2" />
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.herobanner {
  /* background-image: url(../assets/images/assetHero.png); */
  /* max-height: 348px; */
  background-attachment: fixed;
  padding-bottom: 4px;
  border-style: solid;
  border-color: var(--primary-400);
  box-shadow: 0 15px 0 0 var(--primary-400);
}
</style>
<script>
// const heroParallax = document.getElementById("heroParallax");

// window.addEventListener("scroll", () => {
//   heroParallax.style.backgroundPositionY = -window.scrollY / 2 + "px";
// });
import FioLogoFull from "./svg/FioLogoFull.vue";
export default {
  components: {
    FioLogoFull,
  },
};
</script>
