<template>
  <div>
    <div class="lg:py-12 lg:flex lg:justify-center flex flex-col">
      <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:rounded-lg">
          <div class="lg:w-1/2 md:order-last">
          <div class="h-64 bg-cover lg:rounded-lg lg:h-full" :style="img"></div>
        </div>
        <div class="lg:w-1/2 py-12 px-6 max-w-xl lg:max-w-5xl ">
          <h2 class="text-5xl text-gray-700 font-bold">{{ cardLeft.title }}</h2>
          <div class="mt-4 text-gray-700" v-html="cardLeft.content"></div>
          <div class="mt-8" v-if="cardLeft.button">
            <a
              v-if="cardLeft.link.includes('http')"
              target="_blank"
              :href="cardLeft.link"
              class="inline-block bg-blue-900 text-md learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
              >{{ cardLeft.button }}</a
            >
            <a
              v-else
              :href="cardLeft.link"
              class="inline-block bg-blue-900 text-md learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
              >{{ cardLeft.button }}</a
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
      if (this.cardLeft.image.src)
        return "background-image:url(" + this.cardLeft.image.src + ")";
      return this.cardLeft.image;
    },
  },

  props: ["cardLeft"],
};
</script>