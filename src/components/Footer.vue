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
            <img src="/svg/social/instagram.svg" class="icon" />@{{
              data.instagram
            }}
          </a>
          <a href="https://wa.me/556199922299" class="mb-2 flex text-lg"
            ><img src="/svg/social/whatsapp.svg" class="icon" />
            {{ formatedNumber }}
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
  props: ["data", "lang"],
  computed: {
    formatedNumber: function ({ lang, data }: { lang: String; data: any }) {
      if (lang == "br") {
        return (
          "(" +
          data.whatsapp.substr(2, 2) +
          ") " +
          data.whatsapp.substr(4, 4) +
          "-" +
          data.whatsapp.substr(8, 4)
        );
      } else {
        return (
          "+" +
          data.whatsapp.substr(0, 1) +
          " (" +
          data.whatsapp.substr(1, 3) +
          ") " +
          data.whatsapp.substr(4, 3) +
          "-" +
          data.whatsapp.substr(7, 4)
        );
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.icon {
  @apply my-auto mr-1 h-6 w-6;
}
</style>
