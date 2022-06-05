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
  content: url("/images/mockup/pexels-cottonbro-5119398.jpg")
    url("/images/mockup/pexels-cottonbro-6153353.jpg");
}
</style>
