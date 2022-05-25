<template>
  <div
    id="carouselExampleCrossfade"
    class="slide carousel carousel-fade relative"
    data-bs-ride="carousel"
  >
    <div
      class="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0"
    >
      <button
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner relative h-[29rem] w-full overflow-hidden">
      <div class="active carousel-item float-left w-full">
        <img
          src="../../images/mockuping/pexels-cottonbro-6153562.jpg"
          class="block w-full"
          alt=""
        />
      </div>
      <div class="carousel-item float-left w-full">
        <img
          src="../../images/mockuping/pexels-cottonbro-6153373.jpg"
          class="block w-full"
          alt=""
        />
      </div>
      <div class="carousel-item float-left w-full">
        <img
          src="../../images/mockuping/pexels-cottonbro-6153353.jpg"
          class="block w-full"
          alt=""
        />
      </div>
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide="prev"
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
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped></style>
<script></script>
