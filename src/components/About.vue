<template>
  <div
    class="flex flex-row md:m-auto px-4 items-start justify-center container w-full md:w-3/4 lg:w-2/4 2xl:w-1/4"
  >
    <span class="w-1/2 bg-primary-400 img-mask1 h-full bg-auto"><br /></span>
    <div class="w-1/2 space-x-4">
      <div class="flex flex-row mb-5 h-16">
        <span class="min-w-fit ml-4"><FioLogo class="h-16" /></span>
        <span class="w-full ml-6 bg-primary-300 polygon3 h-16"></span>
      </div>
      <div class="steelfish">
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
</style>
<script>
import FioLogo from "./svg/FioLogo.vue";

export default {
  components: {
    FioLogo,
  },
};
</script>
