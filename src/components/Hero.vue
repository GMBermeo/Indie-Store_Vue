<template>
  <header>
    <div
      class="w-full bg-center bg-cover h-[9rem] md:h-[16rem] lg:h-[20rem] max-h-348 bg-primary-400 bg-blend-multiply bg-no-repeat herobanner"
      id="heroParallax"
    >
      <div class="flex items-center justify-center w-full h-full p-36px">
        <div class="text-center">
          <FioLogo />
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.herobanner {
  background-image: url(../assets/images/assetHero.png);
  /* max-height: 348px; */
  /* background-attachment: local;
  transition: all 2s ease; */
}
</style>
<script>
// const heroParallax = document.getElementById("heroParallax");

// window.addEventListener("scroll", () => {
//   heroParallax.style.backgroundPositionY = -window.scrollY / 2 + "px";
// });
import FioLogo from "./FioLogo.vue";
export default {
  components: {
    FioLogo,
  },
};
</script>
