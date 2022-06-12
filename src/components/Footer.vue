<template>
  <footer class="w-full bg-primary-A400">
    <div class="inner-container text-xl tracking-tighter">
      <div
        class="text-white fill-white flex h-[11rem] w-full justify-between pt-2 pl-0 pr-6 sm:pl-1 sm:pr-0 md:pl-2"
      >
        <div class="mt-5 ml-5 md:ml-0">
          <img src="/svg/logo-mono.svg" class="h-[5rem]" />
        </div>
        <div class="mt-5 mr-0 font-sans md:mr-5">
          <a href="https://www.instagram.com/fiofuturewear/" class="mb-2 flex">
            <img src="/svg/social/instagram.svg" class="icon" />@fiofuturewear
          </a>
          <a href="https://wa.me/556199922299" class="mb-2 flex text-lg"
            ><img src="/svg/social/whatsapp.svg" class="icon" />
            {{ lang == "br" ? "61 9992-2299" : whatsapp }}
          </a>
          <div class="text-sm text-primary-400">
            Máquina && <a href="http://bermeo.dev">[]Balde</a>
          </div>
          <div class="text-sm text-primary-400">
            <a href="http://git.bermeo.dev">made by Guilherme Bermeo</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  props: ["lang", "whatsapp"],
};
</script>

<style lang="postcss" scoped>
.icon {
  @apply my-auto mr-1 h-6 w-6;
}
</style>
