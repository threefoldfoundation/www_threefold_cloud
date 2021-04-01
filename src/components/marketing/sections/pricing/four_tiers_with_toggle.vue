<template>
  <div id="pricing" class="bg-white">
    <div class="max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1
          class="text-5xl leading-none font-bold text-gray-700 sm:text-center"
        >
          {{ main.title }}
        </h1>
        <p class="mt-5 text-m leading-7 text-gray-700 sm:text-center">
          {{ main.excerpt }}
        </p>
        <!-- <div
          class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8"
        >
          <button
            type="button"
            class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm leading-5 font-medium text-gray-700 whitespace-no-wrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-8"
          >
            {{ main.button1 }}
          </button>
          <button
            type="button"
            class="relative w-1/2 border border-transparent rounded-md py-2 text-sm leading-5 font-medium text-gray-700 whitespace-no-wrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-8"
          >
            {{ main.button2 }}
          </button>
        </div> -->
      </div>
      <div
        class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
      >
        <div
          v-for="(plan, index) in pricingPlans"
          :key="index"
          class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
        >
          <div class="p-2 text-center">
            <h2 class="text-lg leading-6 font-bold text-gray-600">
              {{ plan.title }}
            </h2>
            <p class="mt-4 text-sm leading-5 text-gray-500">
              {{ plan.excerpt }}
            </p>
            <p class="mt-8">
              <span class="text-4xl leading-10 font-extrabold text-gray-700">{{
                plan.price
              }}</span>
              <span class="text-base leading-6 font-medium text-gray-500"
                >/{{ plan.duration }}</span
              >
            </p>
            <g-link
              type="button"
              :to="plan.link"
              class="inline-block bg-blue-900 learn-button hover:bg-blue-800 text-gray-100 px-6 py-1 my-4 rounded shadow rounded-full"
            > 
              {{ plan.button }}
            </g-link>
          </div>
          <div class="pt-6 pb-8 px-2 text-center ">
            <h3
              class="text-xs leading-4 font-medium text-gray-700 tracking-wide uppercase"
            >
              {{ plan.includeTitle }}
            </h3>
            <ul class="mt-6 mx-2 space-y-4">
              <li
                class="flex space-x-3"
                v-for="option in plan.options"
                :key="option.id"
              >
                <!-- Heroicon name: check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-green-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm leading-5 text-gray-600">{{
                  option
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["main", "pricingPlans"],
};
</script>