<template>
  <div class="py-12 bg-white">
    
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
    <h2 class="text-gray-500">Next Events</h2>
    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <a href="#">
        <div class="mt-5 px-10 mt-10 py-4	border-l-2 border-gray-200">
          <a href="#"><h3 class="leading-6  font-medium text-gray-700 hover:text-blue-500">{{ title1 }}</h3></a>
          <p class="mt-2 text-lg leading-6  text-gray-400">
            {{ subtitle1 }}
          </p>
          <p class="leading-6 font-medium text-gray-600">{{ date }}</p>
        </div>
        </a>
      </div>
      </div>
    </div>


</template>

<script>
export default {
  props: ["title1",  "subtitle1","date"],
};
</script>