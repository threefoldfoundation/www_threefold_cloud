<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <h2 class="text-5xl text-gray-700 leading-tight font-semibold font-heading">
        {{ cta.title }} 
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-gray-700 leading-relaxed"
      ></div>
      <!-- <a
        v-if="cta.button"
        class="inline-block bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
        :href="cta.link"
        >{{ cta.button }}</a
      > -->


      <a
              v-if="cta.link.includes('http')"
              target="_blank"
              :href="cta.link"
              class="inline-block bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
              >{{ cta.button }}</a 
            >
            <a
              v-else
              :href="cta.link"
              class="inline-block bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
              >{{ cta.button }}</a
            >

    </div>
  </section>
</template>

<script>
export default {
  props: ["cta"],
};
</script>
