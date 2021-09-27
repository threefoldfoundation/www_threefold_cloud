<template>
  <section class="py-12 px-4">
    <div
      class="flex flex-wrap text-center lg:text-left lg:pt-10 -mx-2"
      v-if="id == 'home'"
    >
      <div class="px-3 lg:mt-5 order-1 lg:order-none mx-auto text-center">
        <h2 class="text-3xl uppercase mb-6 leading-none font-heading">
          {{ title }}
        </h2>
        <div
          class="mb-8 mx-auto text-xl max-w-4xl leading-relaxed"
          v-html="excerpt"
        ></div>
      </div>
      <g-image class="w-full order-2 lg:order-none" :src="img" :alt="altImg" />
    </div>

    <div
      v-else-if="id == 'compute'"
      class="flex flex-wrap items-center text-center lg:text-left -mx-2"
    >
      <div
        class="lg:w-1/2 lg:pl-20 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"
      >
        <h2
          class="
            text-8xl
            xs:text-4xl
            mb-6
            leading-tight
            font-bold font-heading
            text-gray-800
          "
        >
          {{ title }}
        </h2>
        <div class="mb-8 text-gray-700 leading-relaxed" v-html="excerpt"></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="
              inline-block
              text-lg text-black
              font-extrabold
              px-8
              py-3
              mr-5
              my-2
              shadow
              rounded-lg
            "
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="
              inline-block
              green
              text-lg text-black
              font-extrabold
              px-8
              py-3
              mr-5
              my-2
              shadow
              rounded-lg
            "
            :href="link"
            >{{ button }}</a
          >
        </div>
      </div>
      <div class="lg:w-1/2 px-2"><g-image :src="img" :alt="altImg" /></div>
    </div>

    <div
      v-else
      class="flex flex-wrap items-center text-center lg:text-left -mx-2"
    >
      <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
        <h2
          class="
            text-8xl
            test
            mb-6
            leading-tight
            font-bold font-heading
            text-gray-800
          "
        >
          {{ title }}
        </h2>
        <div class="mb-8 text-gray-700 leading-relaxed" v-html="excerpt"></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="
              inline-block
              bg-blue-900
              text-lg
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-8
              py-2
              mr-5
              my-2
              shadow
              rounded-full
            "
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="
              inline-block
              text-lg
              learn-button
              text-gray-100
              px-8
              py-2
              mr-5
              my-2
              shadow
              rounded-full
            "
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
  props: ["id", "title", "excerpt", "altImg", "image", "button", "link"],
  computed: {
    img: function () {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    },
  },
};
</script>
