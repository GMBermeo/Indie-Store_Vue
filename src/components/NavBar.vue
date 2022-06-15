<template>
  <div class="navbar m-auto flex flex-nowrap items-end justify-center text-2xl">
    <a
      href="#About"
      class="rellax polygon1 steelfish-i text-white z-20 w-36 rounded-tr-sm rounded-tl-md rounded-bl-sm bg-primary-300 pt-4 pb-2 pl-4 pr-2 text-center tracking-wide"
      data-rellax-speed="1.5"
    >
      {{ text.navbar[0] }}</a
    >

    <a
      href="#Colecoes"
      class="rellax bg-stone-900 middle-button steelfish-i text-white z-10 w-[156px] px-10 pt-2 pb-2 text-center tracking-wide md:w-[20%]"
      data-rellax-speed="1"
    >
      {{ text.navbar[1] }}
    </a>
    <a
      href="#Pedidos"
      class="rellax polygon2 steelfish-i text-white z-20 w-36 rounded-tl-sm rounded-tr-md rounded-br-sm bg-primary-500 pt-4 pb-2 text-center tracking-wide"
      data-rellax-speed="2"
    >
      {{ text.navbar[2] }}
    </a>
  </div>
</template>
<style>
.navbar {
  color: white;
  margin-top: -1rem !important;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
}

.middle-button {
  background-color: #1c1c1c;
  margin: 8px -2px 0px -2px;
  z-index: -10;
}

.polygon1 {
  -webkit-clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
}

.polygon2 {
  -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
}
</style>
<script lang="ts">
export default {
  props: ["text"],
};
</script>
