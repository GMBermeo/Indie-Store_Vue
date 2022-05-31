<template>
  <div class="inner-container">
    <div class="mb-5 grid w-full grid-cols-6 gap-6 px-4 sm:px-0">
      <div class="modelo1 card-modelo col-span-3 hover:grow"></div>
      <div class="modelo2 card-modelo col-span-3"></div>

      <div class="modelo3 card-modelo col-span-3 md:col-span-2"></div>
      <div class="modelo4 card-modelo col-span-3 md:col-span-2"></div>
      <div class="modelo5 card-modelo col-span-6 md:col-span-2"></div>
    </div>
  </div>
  <div class="inner-container mb-10 px-4 sm:px-0">
    <div class="">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat
    </div>
    <button class="bg-black text-white h-12 w-[20rem] rounded-xl">
      Fazer pedido
    </button>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.modelo1 {
  background-image: url("../../images/mockuping/pexels-cottonbro-4904537.jpg");
}

.modelo2 {
  background-image: url("../../images/mockuping/pexels-cottonbro-4904563.jpg");
}
.modelo3 {
  background-image: url("../../images/mockuping/pexels-cottonbro-8717527.jpg");
}
.modelo4 {
  background-image: url("../../images/mockuping/pexels-cottonbro-10679206.jpg");
}
.modelo5 {
  background-image: url("../../images/mockuping/pexels-cottonbro-5120193.jpg");
}
</style>

<style lang="postcss" scoped>
.card-modelo {
  @apply aspect-[9/12] w-full bg-cover bg-center;
}
</style>
