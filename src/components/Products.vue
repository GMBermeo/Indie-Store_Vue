<template>
  <div class="inner-container" id="Pedidos">
    <div class="gallery">
      <div
        v-for="product in products"
        @click="$emit('whenOpenPhoto', product)"
        class="card-product"
        :key="product.id"
        :style="{
          'background-image':
            product.id == products.length
              ? 'url(' + product.photos[0] + 'lg.jpg)'
              : 'url(' + product.photos[0] + 'sm.jpg)',
        }"
        :class="[
          product.id == 1 ? 'col-span-6' : 'col-span-3',
          ' md:col-span-2',
        ]"
      >
        <img src="/svg/iconFull.svg" class="full-icon ml-auto" />
        <div
          class="card-info md:p-4"
          :class="[product.id === 1 ? 'p-8' : 'p-4']"
        >
          <img src="/svg/logo-mono.svg" class="icon" />
          <div
            :class="[product.id == 1 ? 'text-3xl' : 'text-xl', 'md:text-2xl']"
          >
            <div>Fio de Nós</div>
            <div>
              {{ product.collection }}
            </div>
          </div>
          <div
            :class="[product.id == 1 ? 'text-lg' : 'text-sm', 'md:text-base']"
          >
            <div>{{ product.name }}</div>
            <div>{{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="inner-container">
    <div class="mb-10 w-full px-4 sm:px-0">
      <button
        class="bg-black text-white float-right ml-3 h-16 w-[10rem] rounded-xl text-2xl md:w-[20rem]"
        @click="$emit('placeOrder')"
      >
        {{ text.placeOrderButton }}
      </button>
      <p class="text-lg">
        {{ text.products }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["products", "text"],
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
.gallery {
  @apply mb-5 mt-4 grid w-full grid-cols-6 gap-4 px-4 sm:px-0 md:gap-6;
}
.card-product {
  @apply flex aspect-[9/12] w-full cursor-pointer flex-col bg-cover bg-center;
}

.card-info {
  @apply m-0 mr-auto mt-auto w-full flex-col;
}

.icon {
  @apply h-6 w-6 sm:h-8 sm:w-8;
}

.full-icon {
  @apply my-3 mr-3 h-6 w-6 ease-in-out sm:my-5 sm:mr-5 sm:h-8 sm:w-8;
}
</style>
