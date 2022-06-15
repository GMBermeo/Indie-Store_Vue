<template>
  <div id="About" class="inner-container px-0">
    <div
      class="rellax mt-4 grid grid-cols-2 gap-3 pt-2 pl-1 pr-6 md:grid-cols-3 md:pl-2"
    >
      <div class="col-span-1 row-span-2 md:col-span-2">
        <div class="min-h-3 relative z-0 h-full">
          <span
            class="polygon4 rellax absolute bottom-7 left-0 z-10 flex h-12 w-1/2 items-baseline justify-center bg-primary-300 py-2 pl-2 pr-6"
            zindex="1"
            data-rellax-speed="8"
          />
          <div
            class="img-mask1 rellax ml-4 h-full bg-primary-400"
            data-rellax-zindex="2"
            data-rellax-speed="2"
          ></div>
        </div>
      </div>

      <div class="flex gap-0">
        <img
          src="/svg/logo.svg"
          class="rellax gradient ml-4 h-16 min-w-fit"
          data-rellax-speed="2"
        />
        <div
          class="polygon3 rellax ml-6 h-16 w-full bg-primary-300"
          data-rellax-speed="1"
        />
      </div>
      <p
        class="rellax col-span-1 row-span-1 text-lg leading-tight"
        data-rellax-speed="1"
        data-rellax-percentage="0.4"
      >
        {{ text.about[0] }}
      </p>
    </div>
  </div>
  <div class="inner-container rellax px-4 py-6" data-rellax-speed="-1">
    <div
      class="grid grid-cols-3 grid-rows-9 gap-3 pt-2 pr-1 md:grid-cols-4 md:pr-5 md:pl-2"
    >
      <div class="col-span-2 row-[span_9_/_span_9] md:col-span-3">
        <img src="/svg/futurewear.svg" class="row-span-3 mb-4" />
        <p class="row-span-3 pb-16 text-lg leading-tight">
          {{ text.about[1] }}
        </p>
        <div class="relative z-0 row-span-3">
          <span
            class="rellax polygon6 absolute left-16 bottom-0 z-0 h-12 w-full bg-primary-300"
            data-rellax-speed="0.25"
            data-rellax-percentage="0.15"
          />
        </div>
      </div>
      <div
        class="pb-50 polygon5 rellax z-10 col-span-1 row-[span_8_/_span_8] bg-primary-A400 md:col-span-1"
        data-rellax-speed="0.75"
        data-rellax-percentage="0.5"
      />
    </div>
  </div>
</template>
<style scoped>
.img-mask1 {
  -webkit-clip-path: polygon(4% 0, 100% 0, 81% 100%, 0% 100%);
  clip-path: polygon(4% 0, 100% 0, 81% 100%, 0% 100%);
  /* shape-outside: polygon(4% 0, 100% 0, 81% 100%, 0% 100%); */
}
.polygon3 {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 69%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 69%, 0% 100%);
  /* shape-outside: polygon(0 0, 100% 0, 100% 69%, 0% 100%); */
}
.polygon4 {
  -webkit-clip-path: polygon(0 24%, 100% 0, 100% 100%, 0 98%);
  clip-path: polygon(0 24%, 100% 0, 100% 100%, 0 98%);
  /* shape-outside: polygon(0 24%, 100% 0, 100% 100%, 0 98%); */
}
.polygon5 {
  -webkit-clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
  /* shape-outside: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%); */
}
.polygon6 {
  -webkit-clip-path: polygon(0 0, 99% 0, 100% 100%, 0 50%);
  clip-path: polygon(0 0, 99% 0, 100% 100%, 0 50%);
  /* shape-outside: polygon(0 0, 99% 0, 100% 100%, 0 50%); */
}
</style>
<script lang="ts">
export default {
  props: ["text"],
};
</script>
