<template>
  <header>
    <div
      class="w-full bg-center bg-cover h-[32rem] herobanner"
      id="heroParallax"
    >
      <div class="flex items-center justify-center w-full h-full">
        <div class="text-center">
          <FioLogo />
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.herobanner {
  background-position-x: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-color: var(--primary-color);
  background-image: url(../assets/images/assetHero.png);
  max-height: 348px;
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
