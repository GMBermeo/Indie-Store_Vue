<template>
  <div class="relative mb-6">
    <div
      id="carousel-indicators"
      class="absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0"
    >
      <button
        type="button"
        aria-current="true"
        aria-label="Slide 1"
        @click="slide = 1"
        class="select"
        :class="{ active: slide === 1 }"
      ></button>
      <button
        type="button"
        aria-label="Slide 2"
        @click="slide = 2"
        class="select"
        :class="{ active: slide === 2 }"
      ></button>
      <button
        type="button"
        aria-label="Slide 3"
        @click="slide = 3"
        class="select"
        :class="{ active: slide === 3 }"
      ></button>
    </div>
    <div
      class="mh-[29rem] relative h-[29rem] w-full overflow-hidden bg-cover"
      :class="classObject"
    ></div>
    <!-- <button
      class="absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
      type="button"
      @click="prev()"
    >
      <span class="inline-block bg-no-repeat" aria-hidden="true">Previous</span>
    </button> -->
    <!-- <button
      class="absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
      type="button"
      @click="next()"
    >
      <span class="inline-block bg-no-repeat" aria-hidden="true">Next</span>
    </button> -->
  </div>
  <!-- <div class="absolute top-0 right-0 bottom-0 left-0">
    <div class="foto2"></div>
    <div class="foto3"></div>
  </div> -->
</template>
<script lang="ts">
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
    // update() {
    //   setInterval(next(), 10000);
    // },
  },
  mounted() {
    setInterval(() => {
      if (this.slide == 3) {
        this.slide = 1;
      } else {
        this.slide++;
      }
    }, 8000);
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

/* button {
  background-color: red;
  height: 50px;
  width: 50px;
  border-radius: 50%;
} */

.active {
  background-color: #fff;
  transition: background-color 1.5s ease-in-out;
}
.select {
  background-color: none;
  border: 1.5px solid #fff;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  display: block;
  transition: background-color 1.5s ease-in-out;
}

#carousel-indicators {
  z-index: 1;
}
</style>
