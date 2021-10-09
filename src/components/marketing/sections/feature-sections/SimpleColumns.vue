<template>
  <div class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8">
      <div v-if="main" class="mx-auto mb-24 lg:text-center">
        <h2
          class="text-5xl max-w-3xl uppercase mb-6 leading-none font-black font-heading mx-auto"
        >
          {{ main.title }}
        </h2>
        <div
          class="mt-2 lg:text-2xl text-xl leading-normal text-gray-900"
          v-html="main.content"
        ></div>
      </div>
      <div
        class="lg:grid lg:gap-8"
        :class="{
          'lg:grid-cols-3': id == 'storage',
          'lg:grid-cols-4': id == 'home',
        }"
      >
        <div
          class="my-10 text-center lg:mt-0"
          v-for="section in sections"
          :key="section.id"
        >
          <div class="flex items-center justify-center rounded-md text-white">
            <g-image :src="section.image" class="w-3/4 mx-auto" />
          </div>
          <div class="mt-5">
            <h2 class="text-3xl uppercase mb-6 leading-none font-black font-heading py-8">
              {{ section.title }}
            </h2>
            <div
              class="mt-2 lg:text-2xl text-xl leading-normal text-gray-900 pb-6"
              v-html="section.content"
            ></div>
          </div>
        </div>
      </div>
      <div class="block text-center mt-10">
         <a
          :href="main.link"
          class="
            green
            bg-green-300
            lg:text-2xl text-lg
            font-extrabold
            px-12
            hover:bg-green-200
            rounded-lg
            py-4
            mb-4
            shadow
          "
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
  /* background-color: #70dfc9; */
  font-family: 'Orbitron', sans-serif !important;
}
</style>