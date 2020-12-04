<template>
<section class="py-12 px-4">
  <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
    <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
      <h2 class="text-4xl mb-6 leading-tight font-semibold font-heading">{{ header.title }}</h2>
      <p class="mb-8 text-gray-700 leading-relaxed">{{ header.content }}</p>
      <!-- <div>
          <a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow" href="#">Sign up</a>
          <a class="text-indigo-600 hover:underline" href="#">Learn more</a>
      </div> -->
    </div>
    <div class="lg:w-1/2 px-2"><img :src="header.img" :alt="header.altImg"></div>
  </div>
</section>


</template>

<script>
export default {
  props: ["header"],
};
</script>