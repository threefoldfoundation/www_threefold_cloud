<template>
  <div class="my-12">
    <nav class="inline-block w-1/4 border-r-2 border-gray-200">
      <a
        v-for="(slide, index) in slides"
        :key="index"
        :href="`#${index}`"
        class="mt-1 capitalize group flex items-center px-3 py-2 text-sm leading-5 font-medium hover:text-gray-900 hover:bg-gray-400 focus:outline-none transition border-blue-500 hover:bg-gray-100 transition ease-in-out duration-150"
        :class="{
          'border-r-3 border-blue-500 hover:bg-gray-100': activeIndex === index,
        }"
        @click="setActive(index)"
      >
        <span class="truncate"> {{ slide.title }} </span>
      </a>
    </nav>

    <div
      class="content inline-block h-full w-3/4 align-top p-5 transition ease-in-out duration-150"
    >
      <div :id="slides[activeIndex]" class="hidden" style="display: block">
        <g-image
          v-if="slides[activeIndex].image"
          :src="
            require(`!!assets-loader!@images/sliders/${slides[activeIndex].image}`)
          "
          :alt="slides[activeIndex].title"
        />
        <div v-html="slides[activeIndex].content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slides"],
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>