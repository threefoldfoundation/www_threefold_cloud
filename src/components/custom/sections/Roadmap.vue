<template>
  <!-- component -->
  <div class="container bg-gray-200 mx-auto w-full h-full">
    <div class="relative wrap overflow-hidden p-10 h-full">
      <div
        class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
        style="left: 50%"
      ></div>
      <div
        v-for="(post, index) in roadmap"
        :key="index"
        class="mb-8 flex justify-between items-center w-full"
        :class="{
          'flex-row-reverse left-timeline': index % 2 !== 0,
          'right-timeline': index % 2 == 0,
        }"
      >
        <div class="order-1 w-5/12"></div>
        <div
          class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"
        >
          <h1 class="mx-auto font-semibold text-lg text-white">
            {{ index + 1 }}
          </h1>
        </div>

        <div
          class="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4"
          :class="{
            'bg-red-400': index % 2 !== 0,
            'bg-gray-400': index % 2 == 0,
          }"
        >
          <h3
            class="mb-3 font-bold text-xl"
            :class="{
              'text-white': index % 2 !== 0,
              'text-gray-800': index % 2 == 0,
            }"
          >
            {{ post.title }}
          </h3>
          <p
            class="text-sm leading-snug tracking-wide text-opacity-100"
            :class="{
              'text-white': index % 2 !== 0,
              'text-gray-800': index % 2 == 0,
            }"
          >
            {{ post.excerpt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["roadmap"],
};
</script>