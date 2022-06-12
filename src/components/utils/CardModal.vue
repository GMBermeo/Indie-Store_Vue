<template>
  <div class="modal-window">
    <div class="bg-white mb-4 flex h-full w-full flex-col rounded-lg">
      <div class="m-3 flex justify-between p-1">
        <div class="text-2xl">
          <h1>
            {{
              lang == "br"
                ? selectedProduct.collection.br
                : selectedProduct.collection.en
            }}
          </h1>
        </div>
        <div>
          <button
            class="close-btn hover:text-white"
            @click="$emit('closeModal')"
          >
            X
          </button>
        </div>
      </div>
      <div class="overflow-auto">
        <img
          v-for="photo in selectedProduct.photos"
          :key="selectedProduct.photos.indexOf(photo)"
          :src="'/images/mockup' + photo + 'lg.jpg'"
          class="photo object-cover"
          :class="[
            selectedProduct.photos.indexOf(photo) == 0 ? '' : 'mt-2 md:mt-4',
          ]"
        />

        <div class="px-6 pb-6 pt-4 md:pt-6">
          <div>
            <h1 class="mb-4 text-4xl underline decoration-primary-A400">
              {{
                lang == "br" ? selectedProduct.name.br : selectedProduct.name.en
              }}
            </h1>
          </div>
          <div class="mb-4 font-sans text-lg">
            {{
              lang == "br"
                ? selectedProduct.description.br
                : selectedProduct.description.en
            }}
          </div>

          <div class="flex justify-between">
            <p class="self-center text-2xl">
              {{
                lang == "br"
                  ? selectedProduct.price.br
                  : selectedProduct.price.en
              }}
            </p>
            <button
              class="bg-black text-white float-right ml-3 h-12 w-[10rem] rounded-xl text-2xl md:w-[20rem]"
              @click="$emit('placeOrder', selectedProduct)"
            >
              {{ lang == "br" ? "Fazer pedido" : "Place order" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="background bg-black" @click="closeModal()"></div>
</template>

<script lang="ts">
export default {
  props: ["selectedProduct", "lang"],
  created: function () {
    console.log("CardModal.vue(created) - this.selectedProduct ");
    console.log(this.selectedProduct);
    console.log("locale: " + this.lang);
  },
};
</script>
<style scoped>
.photo {
  max-width: 100%;
}

.close-btn {
  background-color: transparent;
  transition: all 0.5s ease-in-out;
}
.close-btn:hover {
  color: white;
  transition: all 0.1s ease-in-out;
}
</style>
<style lang="postcss" scoped>
.modal-window {
  @apply fixed top-0 left-0 right-0 bottom-0 z-50  overflow-x-hidden overflow-y-hidden px-3 pt-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32;
}
.background {
  @apply fixed inset-0 z-40 h-full w-full opacity-50;
}

.close-btn {
  @apply rounded-md border-2 border-primary-A400 px-4 text-lg text-primary-A400 hover:bg-primary-A400;
}
</style>
