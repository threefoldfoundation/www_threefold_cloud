<template>
  <section class="py-12 px-4 text-center">
    <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">
      {{ main.title }}
    </h2>
    <p class="text-gray-600">{{ main.description }}</p>
    <div class="flex flex-wrap items-center -mx-8 mt-12 mb-2">
      <div
        class="lg:w-1/3 px-8 mb-8"
        v-for="(section, index) in sections"
        :key="index"
      >
        <g-image
          class="w-1/2 mx-auto mb-8 h-32"
          :src="section.svg.src"
          :alt="section.title"
        />
        <h3 class="text-2xl mb-4 font-semibold font-heading">
          <!-- <span
            class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full"
            >{{ index + 1 }}</span
          > -->
          <span>{{ section.title }}</span>
        </h3>
        <div class="text-gray-700" v-html="section.content"></div>
      </div>
    </div>
    <div>
      <g-link
        v-if="main.button"
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        :to="main.link"
        >{{ main.button }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["main", "sections"],
};
</script>