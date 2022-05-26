<template>
  <div
    id="carouselExampleCrossfade"
    class="slide carousel carousel-fade relative mb-6"
    data-bs-ride="carousel"
  >
    <div
      class="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0"
    >
      <button
        data-bs-target="#carouselExampleCrossfade"
        type="button"
        aria-current="true"
        aria-label="Slide 1"
        @click="this.slide = 1"
        :class="{ active: this.slide === 1 }"
      ></button>
      <button
        data-bs-target="#carouselExampleCrossfade"
        type="button"
        aria-label="Slide 2"
        @click="this.slide = 2"
        :class="{ active: this.slide === 2 }"
      ></button>
      <button
        data-bs-target="#carouselExampleCrossfade"
        type="button"
        aria-label="Slide 3"
        @click="this.slide = 3"
        :class="{ active: this.slide === 3 }"
      ></button>
    </div>
    <div
      class="mh-[29rem] carousel-inner relative h-[29rem] w-full overflow-hidden bg-cover"
      :class="classObject"
    ></div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
      type="button"
      @click="prev()"
      data-bs-target="#carouselExampleCrossfade"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
      type="button"
      @click="next()"
      data-bs-target="#carouselExampleCrossfade"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 1,
    };
  },
  props: [],
  computed: {
    classObject() {
      return {
        foto1: this.slide === 1,
        foto2: this.slide === 2,
        foto3: this.slide === 3,
      };
    },
  },
  methods: {
    next() {
      if (this.slide === 3) {
        this.slide = 1;
      } else {
        this.slide++;
      }
    },
    prev() {
      if (this.slide === 1) {
        this.slide = 3;
      } else {
        this.slide--;
      }
    },
  },
};
</script>

<style scoped>
.foto1 {
  background-image: url("../../images/mockuping/pexels-cottonbro-6153562.jpg");
  background-position: 50% 0%;
  transition: all 1s ease-in-out;
}
.foto2 {
  background-image: url("../../images/mockuping/pexels-cottonbro-5119398.jpg");
  background-position: 50% 30%;
  transition: all 1s ease-in-out;
}
.foto3 {
  background-image: url("../../images/mockuping/pexels-cottonbro-6153353.jpg");
  background-position: 50% 10%;
  transition: all 1s ease-in-out;
}

bg-cover {
}
</style>
