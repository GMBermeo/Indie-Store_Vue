<template>
  <div
    id="About"
    class="flex flex-row md:m-auto px-4 items-start justify-center container w-full md:w-3/4 lg:w-3/5 xl:w-2/5"
  >
    <div class="grid gap-3 pt-2 pl-3 pr-6 grid-cols-2 md:grid-cols-3">
      <div class="row-span-2 col-span-1 md:col-span-2">
        <div class="h-full min-h-3 relative z-0">
          <span
            class="absolute bg-primary-300 bottom-7 left-0 flex justify-center items-baseline z-10 py-2 pl-2 pr-6 h-9 w-1/2 polygon4"
          />
          <div class="bg-primary-500 img-mask1 h-full ml-4"></div>
        </div>
      </div>

      <div class="flex gap-0">
        <span class="min-w-fit ml-4"><FioLogo class="h-14" /></span>
        <span class="w-full ml-6 bg-primary-300 polygon3 h-16" />
      </div>
      <p class="col-span-1 row-span-1 leading-tight">
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
  <div
    class="flex flex-row md:m-auto px-4 pt-6 items-start justify-center container w-full md:w-3/4 lg:w-3/5 xl:w-2/5"
  >
    <div
      class="grid gap-3 pt-2 pl-3 pr-6 grid-cols-3 md:grid-cols-4 grid-rows-3"
    >
      <div class="row-span-3 col-span-2 md:col-span-3">
        <FutureWear class="row-span-1 mb-4" />
        <p class="row-span-1 leading-tight pb-16">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te
        </p>
        <div class="row-span-1 relative z-0">
          <span
            class="absolute bg-primary-300 left-16 bottom-0 z-0 h-12 polygon6 w-full"
          />
        </div>
      </div>
      <div
        class="row-span-3 col-span-1 md:col-span-1 bg-primary-400 pb-50 polygon5 z-10"
      />
    </div>
  </div>
</template>
<style>
.img-mask1 {
  -webkit-clip-path: polygon(4% 0, 100% 0, 81% 100%, 0% 100%);
  clip-path: polygon(4% 0, 100% 0, 81% 100%, 0% 100%);
}
.polygon3 {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 69%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 69%, 0% 100%);
}
.polygon4 {
  clip-path: polygon(0 24%, 100% 0, 100% 100%, 0 98%);
}
.polygon5 {
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
}
.polygon6 {
  clip-path: polygon(0 0, 99% 0, 100% 100%, 0 50%);
}
</style>
<script>
import FioLogo from "./svg/FioLogo.vue";
import FutureWear from "./svg/FutureWear.vue";

export default {
  components: {
    FioLogo,
    FutureWear,
  },
};
</script>
