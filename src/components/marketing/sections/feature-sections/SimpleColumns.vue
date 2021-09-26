<template>
  <div class="py-12 bg-white">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
      <div v-if="main" class="max-w-md mx-auto mb-24 lg:text-center">
        <h2
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          {{ main.title }}
        </h2>
      </div>
      <div class="lg:grid lg:grid-cols-4 lg:gap-8">
        <div
          class="my-10 text-center lg:mt-0"
          v-for="section in sections"
          :key="section.id"
        >
          <div class="flex items-center justify-center rounded-md text-white">
            <g-image :src="section.image" class="mx-auto w-1/2" />
          </div>
          <div class="mt-5">
            <h5 class="text-lg leading-6 font-medium text-gray-900">
              {{ section.title }}
            </h5>
            <div
              class="mt-2 text-base leading-6 text-gray-900"
              v-html="section.content"
            ></div>
          </div>
        </div>
      </div>
      <div class="block text-center mt-10">
        <a
          :href="main.link"
          class="green text-md text-gray-900 px-12 py-2 mb-4 shadow"
          >{{ main.button }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "main", "sections"],
};
</script>

<style scoped>
.green {
  background-color: #70dfc9;
}
</style>