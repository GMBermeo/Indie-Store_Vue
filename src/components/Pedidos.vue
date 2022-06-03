<template>
  <div class="inner-container" id="Pedidos">
    <div class="galeria">
      <div
        v-for="modelo in modelos"
        :key="modelo.id"
        class="card-modelo"
        :class="[modelo.id === modelos.length ? 'col-span-6' : 'col-span-3']"
        :style="{ 'background-image': modelo.imagem }"
      >
        <FullIcon @click="openPhoto(modelo.imagem)" />
        <div
          class="card-info"
          :class="[modelo.id === modelos.length ? 'p-4 md:p-8' : 'p-4']"
        >
          <FioLogo class="fill-white icone" />
          <div
            :class="[modelo.id === modelos.length ? 'text-3xl' : 'text-2xl']"
          >
            <div>Fio de Nós</div>
            <div>{{ modelo.colecao }}</div>
          </div>
          <div :class="[modelo.id === modelos.length ? 'text-lg' : 'text-md']">
            <div>{{ modelo.nome }}</div>
            <div>{{ modelo.preco }}</div>
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

<style lang="postcss" scoped>
.galeria {
  @apply mb-5 grid w-full grid-cols-6 gap-6 px-4 sm:px-0;
}
.card-modelo {
  @apply flex aspect-[9/12] w-full flex-col  bg-cover bg-center  md:col-span-2;
}

.card-info {
  @apply m-0 mr-auto mt-auto w-full flex-col;
}

.icone {
  @apply h-8 w-8;
}
</style>

<script lang="ts">
import FullIcon from "./svg/FullIcon.vue";
import FioLogo from "./svg/FioLogo.vue";

export default {
  data: () => {
    return {
      // toggleModal: false,
      modelos: [
        {
          id: 1,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "url('/src/images/mockuping/pexels-cottonbro-4904537.jpg')",
        },
        {
          id: 2,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "url('/src/images/mockuping/pexels-cottonbro-4904563.jpg')",
        },
        {
          id: 3,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "url('/src/images/mockuping/pexels-cottonbro-8717527.jpg')",
        },
        {
          id: 4,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "url('/src/images/mockuping/pexels-cottonbro-10679206.jpg')",
        },
        {
          id: 5,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "url('/src/images/mockuping/pexels-cottonbro-5120193.jpg')",
        },
      ],
    };
  },
  methods: {
    openPhoto: function (imagem: string) {
      this.$emit("whenOpenPhoto", imagem);
    },
  },
  components: {
    FullIcon,
    FioLogo,
  },
};
</script>
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
</style>
