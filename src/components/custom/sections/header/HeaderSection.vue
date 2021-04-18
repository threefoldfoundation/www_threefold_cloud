<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <span class="text-sm font-semibold">{{ header.title }}</span>
      <h2 class="text-5xl text-gray-700 leading-tight font-semibold font-heading">
        {{ header.subtitle }}
      </h2>
      <div
        v-html="header.content"
        class="mb-8 text-gray-700 leading-relaxed"
      ></div>
      <div>
        <g-link
          class="inline-block bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
          v-if="header.btn1"
          :to="header.link1"
          >{{ header.btn1 }}</g-link
        ><g-link
          class="inline-block bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
          v-if="header.btn2"
          :to="header.link2"
          >{{ header.btn2 }}</g-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["header"],
};
</script>
