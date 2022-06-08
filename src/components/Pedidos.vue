<template>
  <div class="inner-container" id="Pedidos">
    <div class="galeria">
      <div
        v-for="modelo in modelos"
        @click="openPhoto(modelo.imagem)"
        class="card-modelo"
        :key="modelo.id"
        :style="{ 'background-image': 'url(' + modelo.imagem + 'sm.jpg)' }"
        :class="[
          modelo.id <= 2
            ? 'col-span-3'
            : [
                modelo.id == modelos.length ? 'col-span-6' : 'col-span-3',
                ' md:col-span-2',
              ],
        ]"
      >
        <FullIcon class="ml-auto" />
        <div
          class="card-info md:p-4"
          :class="[modelo.id === modelos.length ? 'p-8' : 'p-4']"
        >
          <FioLogo class="fill-white icone" />
          <div
            :class="[
              modelo.id === modelos.length ? 'text-3xl' : 'text-xl',
              'md:text-2xl',
            ]"
          >
            <div>Fio de Nós</div>
            <div>{{ modelo.colecao }}</div>
          </div>
          <div
            :class="[
              modelo.id === modelos.length ? 'text-lg' : 'text-sm',
              'md:text-base',
            ]"
          >
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
          imagem: "/images/mockup/pexels-cottonbro-4904537-",
        },
        {
          id: 2,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "/images/mockup/pexels-cottonbro-4904563-",
        },
        {
          id: 3,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "/images/mockup/pexels-cottonbro-8717527-",
        },
        {
          id: 4,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "/images/mockup/pexels-cottonbro-10679206-",
        },
        {
          id: 5,
          nome: "Vestido preto",
          colecao: "Coleção OBZIDIAN",
          preco: "280,00",
          imagem: "/images/mockup/pexels-cottonbro-5120193-",
        },
      ],
    };
  },
  methods: {
    openPhoto: function (imagem: string): void {
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
  color: white;
  opacity: 0.75;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
}
@media (hover: hover) {
  .card-info:hover {
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }
}

@media (hover: none) {
  .card-info {
    /* background-image: linear-gradient(#00000000, #000000aa); */
    opacity: 1;
  }
}
</style>
<style lang="postcss" scoped>
.galeria {
  @apply mb-5 grid w-full grid-cols-6 gap-6 px-4 sm:px-0;
}
.card-modelo {
  @apply flex aspect-[9/12] w-full flex-col  bg-cover bg-center;
}

.card-info {
  @apply m-0 mr-auto mt-auto w-full flex-col;
}

.icone {
  @apply h-6 w-6 sm:h-8 sm:w-8;
}
</style>
