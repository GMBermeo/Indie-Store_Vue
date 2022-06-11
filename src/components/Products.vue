<template>
  <div class="inner-container" id="Pedidos">
    <div class="gallery">
      <div
        v-for="product in products"
        @click="openPhoto(product)"
        class="card-product"
        :key="product.id"
        :style="{
          'background-image':
            'url(/images/mockup' + product.photos[0] + 'sm.jpg)',
        }"
        :class="[
          product.id <= 2
            ? 'col-span-3'
            : [
                product.id == products.length ? 'col-span-6' : 'col-span-3',
                ' md:col-span-2',
              ],
        ]"
      >
        <img src="/svg/iconFull.svg" class="fill-white full-icon ml-auto" />
        <div
          class="card-info md:p-4"
          :class="[product.id === products.length ? 'p-8' : 'p-4']"
        >
          <Logo class="fill-white icon" />
          <div
            :class="[
              product.id === products.length ? 'text-3xl' : 'text-xl',
              'md:text-2xl',
            ]"
          >
            <div>Fio de Nós</div>
            <div>
              {{ lang == "br" ? product.collection.br : product.collection.en }}
            </div>
          </div>
          <div
            :class="[
              product.id === products.length ? 'text-lg' : 'text-sm',
              'md:text-base',
            ]"
          >
            <div>{{ lang == "br" ? product.name.br : product.name.en }}</div>
            <div>{{ lang == "br" ? product.price.br : product.price.en }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="inner-container">
    <div class="mb-10 w-full px-4 sm:px-0">
      <button
        class="bg-black text-white float-right ml-3 h-16 w-[10rem] rounded-xl text-2xl md:w-[20rem]"
      >
        {{ lang == "br" ? "Fazer pedido" : "Place order" }}
      </button>
      <p class="text-lg">
        Integer suscipit velit eget neque vulputate congue. Donec auctor
        pulvinar tortor quis cursus. Sed consectetur facilisis metus dictum
        placerat. Morbi sollicitudin congue pellentesque. Integer posuere quis
        tortor vitae molestie. Proin elit erat, ultricies porttitor maximus
        eget, finibus at dolor. Aliquam erat volutpat. Sed lobortis eros nec
        velit sollicitudin elementum. Nulla mi eros, mollis et arcu quis,
        posuere interdum turpis. Aliquam ut porttitor lacus. Maecenas ut
        porttitor nisl. Nullam pharetra elit ut cursus congue. Nam ut lorem
        eros.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from "./svg/Logo.vue";

export default {
  props: ["lang", "products"],
  methods: {
    openPhoto: function (product: Object) {
      this.$emit("whenOpenPhoto", product);
    },
  },
  components: {
    Logo,
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
.gallery {
  @apply mb-5 grid w-full grid-cols-6 gap-4 px-4 sm:px-0 md:gap-6;
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
