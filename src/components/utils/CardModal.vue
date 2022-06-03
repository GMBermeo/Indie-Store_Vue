<template>
  <div class="fixed flex flex-col overflow-x-hidden overflow-y-hidden p-3">
    <div>
      <button class="text-white bg-black ml-auto rounded-lg p-6 text-lg">
        FECHAR
      </button>
    </div>
    <div class="bg-primary-300 bg-contain">a</div>
  </div>
  <div class="bg-black fixed inset-0 z-40 h-full w-full opacity-25"></div>
</template>

<script lang="ts">
export default {
  methods: {
    closeModal: function () {
      this.$emit("close");
    },
  },
};
</script>
