<template>
  <div class="modal-window">
    <div class="bg-white flex w-full flex-col rounded-lg">
      <button class="botao-fechar hover:text-white" @click="closeModal()">
        X
      </button>
      <div
        class="foto bg-cover"
        :style="{ 'background-image': modalImage }"
      ></div>
    </div>
  </div>
  <div class="background bg-black" @click="closeModal()"></div>
</template>

<script lang="ts">
export default {
  props: ["modalImage"],
  created: function () {
    console.log(this.modalImage); //prints out an empty string
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
  background-image: "url('/images/mockup/pexels-cottonbro-4904537.jpg')";
  min-height: 80vh;
  height: max-content;
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
  @apply fixed top-0 left-0 right-0 bottom-0 z-50  overflow-x-hidden overflow-y-hidden p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12;
}
.background {
  @apply fixed inset-0 z-40 h-full w-full opacity-50;
}

.botao-fechar {
  @apply m-3 ml-auto rounded-sm border-2 border-primary-A400 px-4 text-lg text-primary-A400 hover:bg-primary-A400;
}
</style>
