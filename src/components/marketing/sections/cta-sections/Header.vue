<template>
  <section class="py-12 px-4">
    <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
      <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
        <h2 class="text-8xl test mb-6 leading-tight font-bold font-heading text-gray-800">
          {{ title }}
        </h2>
        <div class="mb-8 text-gray-700 leading-relaxed" v-html="excerpt"></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="inline-block bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="inline-block bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
            :href="link"
            >{{ button }}</a
          >
          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>
      <div class="lg:w-1/2 px-2"><g-image :src="img" :alt="altImg" /></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "excerpt", "altImg", "image", "button", "link"],
  computed: {
    img: function () {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    },
  },
};
</script>
<style scoped>
.green {
  /* background-color: #70dfc9; */
  font-family: "Orbitron", sans-serif !important;
}
.arrow_up,
.arrow_down {
  display: inline-block;
  margin-right: 10px;
  width: 0;
  height: 0;
  border-width: 0 12.5px 30px 12.5px;
  border-color: transparent transparent #000000 transparent;
  border-style: solid;
}
.arrow_down {
  margin-left: 10px;

  border-width: 35px 12.5px 0 12.5px;
  border-color: #000000 transparent transparent transparent;
}

a {
  font-family: "Orbitron", sans-serif !important;
}
hr {
  height:1px;
  border-width:0;
  color:gray;
  background-color:gray;
}
</style>
