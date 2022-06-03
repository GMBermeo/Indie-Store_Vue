<template>
  <div class="inner-container">
    <div class="mb-5 grid w-full grid-cols-6 gap-6 px-4 sm:px-0">
      <div class="modelo1 card-modelo col-span-3 flex flex-col">
        <FullIcon />
        <div class="card-info p-4">
          <FioLogo class="fill-white icone" />
          <div class="text-2xl">
            <div>Fio de Nós</div>
            <div>Coleção OBZIDIAN</div>
          </div>
          <div class="text-md">
            <div>Vestido Preto</div>
            <div>280,00</div>
          </div>
        </div>
      </div>
      <div class="modelo2 card-modelo col-span-3 flex flex-col">
        <FullIcon />
        <div class="card-info p-4">
          <FioLogo class="fill-white icone" />
          <div class="text-2xl">
            <div>Fio de Nós</div>
            <div>Coleção OBZIDIAN</div>
          </div>
          <div class="text-md">
            <div>Vestido Preto</div>
            <div>280,00</div>
          </div>
        </div>
      </div>
      <div class="modelo3 card-modelo col-span-3 flex flex-col md:col-span-2">
        <FullIcon />
        <div class="card-info p-4">
          <FioLogo class="fill-white icone" />
          <div class="text-2xl">
            <div>Fio de Nós</div>
            <div>Coleção OBZIDIAN</div>
          </div>
          <div class="text-md">
            <div>Vestido Preto</div>
            <div>280,00</div>
          </div>
        </div>
      </div>
      <div class="modelo4 card-modelo col-span-3 flex flex-col md:col-span-2">
        <FullIcon />
        <div class="card-info p-4">
          <FioLogo class="fill-white icone" />
          <div class="text-2xl">
            <div>Fio de Nós</div>
            <div>Coleção OBZIDIAN</div>
          </div>
          <div class="text-md">
            <div>Vestido Preto</div>
            <div>280,00</div>
          </div>
        </div>
      </div>
      <div class="modelo5 card-modelo col-span-6 flex flex-col md:col-span-2">
        <FullIcon />
        <div class="card-info p-8 md:p-4">
          <FioLogo class="fill-white icone" />
          <div class="text-2xl">
            <div>Fio de Nós</div>
            <div>Coleção OBZIDIAN</div>
          </div>
          <div class="text-md">
            <div>Vestido Preto</div>
            <div>280,00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="inner-container">
    <div class="mb-10 w-full px-4 sm:px-0">
      <button
        class="bg-black text-white float-right ml-3 h-12 w-[10rem] rounded-xl text-2xl md:w-[20rem]"
      >
        Fazer pedido
      </button>
      <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      </p>
    </div>
  </div>
</template>

<style scoped>
.card-info {
  background-image: linear-gradient(#00000000, #000000aa);
  opacity: 0.75;
  color: white;
  transition: opacity 0.5s ease-in-out;
}
.card-info:hover {
  /* background-image: linear-gradient(#00000000, #000000aa); */
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
path.gradient {
  fill: white !important;
}
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

.card-info {
  @apply m-0 mr-auto mt-auto w-full flex-col;
}

.icone {
  @apply h-8 w-8;
}
</style>

<script lang="ts">
import FullIcon from "../svg/FullIcon.vue";
import FioLogo from "../svg/FioLogo.vue";

export default {
  components: {
    FullIcon,
    FioLogo,
  },
};
</script>
