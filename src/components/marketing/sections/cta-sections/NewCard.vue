<template>
  <div>
    <div class="lg:py-12 lg:flex lg:justify-center flex flex-col">
      <div
        class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:rounded-lg"
      >
        <div class="lg:w-1/2">
          <div class="h-64 bg-cover lg:rounded-lg lg:h-full" :style="img"></div>
        </div>
        <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 class="text-3xl text-gray-700 font-bold">{{ card.title }}</h2>
          <div class="mt-4 text-gray-700" v-html="card.content"></div>
          <div class="mt-8" v-if="card.button">
            <a
              v-if="card.link.includes('http')"
              target="_blank"
              :href="card.link"
              class="inline-block uppercase bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
              >{{ card.button }}</a
            >
            <a
              v-else
              :href="card.link"
              class="inline-block uppercase bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
              >{{ card.button }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    img: function () {
      if (this.card.image.src)
        return "background-image:url(" + this.card.image.src + ")";
      return this.card.image;
    },
  },

  props: ["card"],
};
</script>
