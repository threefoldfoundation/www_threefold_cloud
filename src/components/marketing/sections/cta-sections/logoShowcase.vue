<template>
  <section class="pt-8 px-4 text-center" v-if="id == 'home'">
    <div class="max-w-2xl mx-auto mb-8" v-if="title">
      <h2 class="text-4xl leading-tight mb-6 font-semibold font-heading">
        {{ title }}
      </h2>
      <p class="text-gray-400 leading-relaxed"></p>
    </div>
    <div class="flex flex-wrap -mx-8">
      <g-link
        v-for="(logo, idx) in logos"
        :key="idx"
        :to="logo.url"
        class="md:w-1/4 px-8 mb-5"
      >
        <g-image :src="img(logo.image)" />
      </g-link>
    </div>
  </section>

  <section class="pt-8 px-4 text-center" v-else>
    <div class="max-w-2xl mx-auto mb-8" v-if="title">
      <h2 class="text-4xl leading-tight mb-6 font-semibold font-heading">
        {{ title }}
      </h2>
      <p class="text-gray-400 leading-relaxed"></p>
    </div>
    <div class="flex flex-wrap -mx-8">
      <g-link
        v-for="(logo, idx) in logos"
        :key="idx"
        :to="logo.url"
        class="w-1/2 md:w-1/6 px-8 mb-5"
      >
        <g-image :src="img(logo.image)" />
      </g-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id", "title", "logos"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>



