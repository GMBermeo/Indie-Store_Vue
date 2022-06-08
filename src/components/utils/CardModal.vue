<template>
  <div class="modal-window">
    <div class="bg-white flex h-full w-full flex-col rounded-lg">
      <div class="m-3 flex justify-between p-1">
        <div class="text-2xl">
          <h1>{{ modeloEscolhido.colecao }}</h1>
        </div>
        <div>
          <button class="botao-fechar hover:text-white" @click="closeModal()">
            X
          </button>
        </div>
      </div>
      <div class="overflow-auto">
        <img :src="modeloEscolhido.foto + 'lg.jpg'" class="foto object-cover" />

        <div class="p-6">
          <div>
            <h1 class="text-4xl">{{ modeloEscolhido.nome }}</h1>
          </div>
          <div>
            <p class="text-2xl">{{ modeloEscolhido.preco }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="background bg-black" @click="closeModal()"></div>
</template>

<script lang="ts">
export default {
  props: ["modeloEscolhido"],
  created: function () {
    console.log(
      "CardModal.vue(created) - this.modeloEscolhido " + this.modeloEscolhido
    );
  },
  methods: {
    closeModal: function () {
      this.$emit("closeModal");
    },
  },
};
</script>
<style scoped>
.foto {
  max-width: 100%;
}

.botao-fechar {
  background-color: transparent;
  transition: all 0.5s ease-in-out;
}
.botao-fechar:hover {
  color: white;
  transition: all 0.1s ease-in-out;
}
</style>
<style lang="postcss" scoped>
.modal-window {
  @apply fixed top-0 left-0 right-0 bottom-0 z-50  overflow-x-hidden overflow-y-hidden p-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32;
}
.background {
  @apply fixed inset-0 z-40 h-full w-full opacity-50;
}

.botao-fechar {
  @apply rounded-md border-2 border-primary-A400 px-4 text-lg text-primary-A400 hover:bg-primary-A400;
}
</style>
