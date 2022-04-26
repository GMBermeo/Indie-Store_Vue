<template>
  <div
    class="flex flex-row md:m-auto px-4 items-start justify-center container w-full md:w-3/4 lg:w-3/5 xl:w-2/5"
  >
    <div class="grid gap-3 pt-2 pl-3 pr-6 grid-cols-2 md:grid-cols-3">
      <div class="row-span-2 col-span-1 md:col-span-2">
        <div class="h-full min-h-3 relative z-0">
          <span
            class="absolute bg-primary-300 bottom-7 left-0 flex justify-center items-baseline z-10 py-2 pl-2 pr-6 h-9 w-1/2 polygon4"
          >
          </span>
          <div class="bg-primary-500 img-mask1 h-full ml-4"></div>
        </div>
      </div>

      <div class="flex gap-0">
        <span class="min-w-fit ml-4"><FioLogo class="h-14" /></span>
        <span class="w-full ml-6 bg-primary-300 polygon3 h-16"></span>
      </div>
      <div class="col-span-1 row-span-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
        perferendis cumque reprehenderit obcaecati ab vitae quam, possimus
        officia doloribus sequi earum explicabo similique culpa quasi quas, enim
        a itaque numquam!
      </div>
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
</style>
<script>
import FioLogo from "./svg/FioLogo.vue";

export default {
  components: {
    FioLogo,
  },
};
</script>
