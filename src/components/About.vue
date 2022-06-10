<template>
  <div id="About" class="inner-container px-0">
    <div
      class="rellax grid grid-cols-2 gap-3 pt-2 pl-1 pr-6 md:grid-cols-3 md:pl-2"
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
        <FioLogo
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
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse, quat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
        dolor sit amet, cons ectetuer adipiscing elit,
      </p>
    </div>
  </div>
  <div class="inner-container rellax px-4 py-6" data-rellax-speed="-1">
    <div
      class="grid grid-cols-3 grid-rows-9 gap-3 pt-2 pr-1 md:grid-cols-4 md:pr-5 md:pl-2"
    >
      <div class="col-span-2 row-[span_9_/_span_9] md:col-span-3">
        <FutureWear class="row-span-3 mb-4" />
        <p class="row-span-3 pb-16 text-lg leading-tight">
          In vitae placerat purus, nec consequat tortor. Duis eget varius est,
          ac consequat est. Integer ut ligula at lorem porta ultricies. Integer
          odio nunc, accumsan vitae eros id, congue sodales sapien. Sed sagittis
          sapien sed dui faucibus rutrum. Nulla ac lorem elementum, finibus mi
          in, scelerisque metus. Duis scelerisque velit eget malesuada
          porttitor. Donec ultrices nibh ut odio aliquet, nec ultricies mi
          varius. Ut finibus, magna nec gravida consequat, enim purus pulvinar
          nunc, vitae dictum arcu ex ac urna. Praesent tristique, magna a
          vestibulum tempor, mi dui vulputate nisi, at laoreet risus leo id
          magna. Nam augue ex, tempus vel euismod sed, efficitur sed metus.
          Curabitur a urna nisi. Nunc egestas tortor vel lacus bibendum
          scelerisque.
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
import FutureWear from "./svg/FutureWear.vue";
import FioLogo from "./svg/FioLogo.vue";

export default {
  components: {
    FutureWear,
    FioLogo,
  },
};
</script>
