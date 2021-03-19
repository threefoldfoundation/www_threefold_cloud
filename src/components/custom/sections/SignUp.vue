<template>
  <section class="py-8 px-4">
    <div class="flex flex-wrap items-center -mx-4">
      <div class="w-full lg:w-4/6 px-4 mb-8 lg:mb-0 text-center lg:text-left">
        <h2 class="text-xl text-gray-700 font-semibold font-heading">
          {{ signup.title }}
        </h2>
      </div>
      <div class="w-full lg:w-2/6 px-4 text-center">
        <g-link
          class="inline-block uppercase bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
          :to="signup.link1"
          >{{ signup.button1 }}</g-link
        ><g-link
          class="text-gray-900 bg-transparent hover:underline"
          :to="signup.link2"
          >{{ signup.button2 }}</g-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["signup"],
};
</script>