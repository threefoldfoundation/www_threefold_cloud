<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2
        class="text-4xl text-center mb-12 font-semibold font-heading"
        v-html="news.content"
      ></h2>
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <g-link
          v-for="partner in news.partners"
          :key="partner.id"
          :to="partner.path"
          class="col-span-1 flex justify-center py-8 px-8 m-1 bg-gray-100"
        >
          <g-image
            v-if="partner.logo"
            class="max-h-12"
            :src="require(`!!assets-loader!@images/${partner.logo}`)"
          />
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>
