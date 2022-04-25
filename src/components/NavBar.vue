<template>
  <div class="m-auto flex flex-nowrap justify-center navbar">
    <button
      class="polygon1 bg-primary-300 py-3 pl-4 pr-2 rounded-tr-sm rounded-tl-md rounded-bl-sm w-36 steelfish-i"
    >
      A Fio
    </button>
    <button
      class="bg-stone-900 px-10 py-0 botao-meio w-[144px] md:w-[20%] steelfish-i"
    >
      Coleções
    </button>
    <button
      class="polygon2 bg-primary-500 py-3 rounded-tl-sm rounded-tr-md rounded-br-sm w-36 steelfish-i"
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
}

.botao-meio {
  margin-top: 6px;
  background-color: #1c1c1c;
  margin: 6px -2px 0px -2px;
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
