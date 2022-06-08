<template>
  <div id="postload"></div>
</template>

<style scoped>
#postload::after {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  z-index: -1;
  /* content: url("/images/mockup/pexels-cottonbro-5119398-sm.jpg")
    url("/images/mockup/pexels-cottonbro-6153353-sm.jpg")
    url("/images/mockup/pexels-cottonbro-5119398-lg.jpg")
    url("/images/mockup/pexels-cottonbro-6153353-lg.jpg")
    url("/images/mockup/pexels-cottonbro-4904537-lg.jpg")
    url("/images/mockup/pexels-cottonbro-4904563-lg.jpg")
    url("/images/mockup/pexels-cottonbro-8717527-lg.jpg")
    url("/images/mockup/pexels-cottonbro-10679206-lg.jpg")
    url("/images/mockup/pexels-cottonbro-5120193-lg.jpg"); */
}

@media only screen and (max-width: 512px) {
  #postload::after {
    content: url("/images/mockup/pexels-cottonbro-6153562-sm.jpg")
      url("/images/mockup/pexels-cottonbro-5119398-sm.jpg")
      url("/images/mockup/pexels-cottonbro-6153353-sm.jpg");
  }
}
@media only screen and (min-width: 512px) {
  #postload::after {
    content: url("/images/mockup/pexels-cottonbro-6153562-lg.jpg")
      url("/images/mockup/pexels-cottonbro-5119398-lg.jpg")
      url("/images/mockup/pexels-cottonbro-6153353-lg.jpg");
  }
}
</style>
