<template>
  <div class="m-auto flex flex-nowrap items-end justify-center navbar text-2xl">
    <button
      class="polygon1 bg-primary-300 pt-4 pb-2 pl-4 pr-2 rounded-tr-sm rounded-tl-md rounded-bl-sm w-36 steelfish-i text-white tracking-wide"
    >
      A Fio
    </button>
    <button
      class="bg-stone-900 px-10 pt-2 pb-2 botao-meio w-[156px] md:w-[20%] steelfish-i text-white tracking-wide"
    >
      Coleções
    </button>
    <button
      class="polygon2 bg-primary-500 pt-4 pb-2 rounded-tl-sm rounded-tr-md rounded-br-sm w-36 steelfish-i text-white tracking-wide"
    >
      Pedidos
    </button>
  </div>
</template>

<style>
.navbar {
  color: white;
  margin-top: -1rem !important;
  margin-bottom: 2rem !important;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
}

.botao-meio {
  background-color: #1c1c1c;
  margin: 8px -2px 0px -2px;
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
