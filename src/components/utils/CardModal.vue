<template>
  <div class="modal-window">
    <div class="bg-white flex w-full flex-col rounded-xl">
      <button
        class="text-white bg-black ml-auto rounded-lg p-6 text-lg"
        @click="closeModal()"
      >
        FECHAR
      </button>

      <div class="bg-primary-300 bg-cover">{{ toggleModal }}</div>
      <div class="bg-primary-400 bg-contain">{{ modalImage }}</div>
      <div class="foto bg-cover" :style="{ 'background-image': imagemTeste }">
        aaa
      </div>
    </div>
  </div>
  <div class="background bg-black"></div>
</template>

<script lang="ts">
export default {
  props: ["toggleModal", "modalImage"],
  data: () => {
    return {
      imagemTeste: "url('/images/modelos/pexels-cottonbro-4904537.jpg')",
    };
  },
  created: function () {
    console.log("Modal openned");
    console.log(this.modalImage); //prints out an empty string
  },
  methods: {
    closeModal: function () {
      console.log("Modal closed");
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.foto {
  background-image: "url('/images/modelos/pexels-cottonbro-4904537.jpg')";
}
</style>
<style lang="postcss" scoped>
.modal-window {
  @apply fixed top-0 left-0 right-0 bottom-0 z-50  overflow-x-hidden overflow-y-hidden p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12;
}
.background {
  @apply fixed inset-0 z-40 h-full w-full opacity-25;
}
</style>
