<template>
  <div class="bg-white">
    <div
      class="max-w-screen-xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8"
    >
      <!-- xs to lg -->
      <div class="max-w-2xl mx-auto lg:hidden">
        <table class="mt-8 w-full" v-for="plan in plans" :key="plan.id">
          <caption
            class="bg-gray-100 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left"
          >
            {{
              plan.title
            }}
          </caption>

          <tbody
            class="divide-y divide-gray-200"
            v-for="plan in plan.rows"
            :key="plan.id"
          >
            <tr class="border-t border-gray-200">
              <th
                class="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                scope="row"
              >
                {{ plan.title }}
              </th>
              <td class="py-5 pr-4" v-if="plan.firstCol == 'include'">
                <!-- Heroicon name: check -->
                <svg
                  class="ml-auto h-5 w-5 text-green-500"
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
                <span class="sr-only">Yes</span>
              </td>
              <td class="py-5 pr-4" v-else-if="plan.firstCol == 'none'">
                <!-- Heroicon name: minus -->
                <svg
                  class="ml-auto h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">No</span>
              </td>
              <td class="py-5 pr-4" v-else>
                <span
                  class="block text-sm leading-5 text-gray-700 text-right"
                  >{{ plan.firstCol }}</span
                >
              </td>

              <td class="py-5 pr-4" v-if="plan.secCol == 'include'">
                <!-- Heroicon name: check -->
                <svg
                  class="ml-auto h-5 w-5 text-green-500"
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
                <span class="sr-only">Yes</span>
              </td>
              <td class="py-5 pr-4" v-else-if="plan.secCol == 'none'">
                <!-- Heroicon name: minus -->
                <svg
                  class="ml-auto h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">No</span>
              </td>
              <td class="py-5 pr-4" v-else>
                <span
                  class="block text-sm leading-5 text-gray-700 text-right"
                  >{{ plan.secCol }}</span
                >
              </td>

              <td class="py-5 pr-4" v-if="plan.thirdCol == 'include'">
                <!-- Heroicon name: check -->
                <svg
                  class="ml-auto h-5 w-5 text-green-500"
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
                <span class="sr-only">Yes</span>
              </td>
              <td class="py-5 pr-4" v-else-if="plan.thirdCol == 'none'">
                <!-- Heroicon name: minus -->
                <svg
                  class="ml-auto h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">No</span>
              </td>
              <td class="py-5 pr-4" v-else>
                <span
                  class="block text-sm leading-5 text-gray-700 text-right"
                  >{{ plan.thirdCol }}</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- lg+ -->
      <div class="hidden lg:block">
        <table class="w-full h-px table-fixed">
          <thead>
            <tr>
              <th
                class="pb-4 px-6 text-sm leading-5 font-medium text-gray-900 text-left"
                scope="col"
              >
                <span class="sr-only">Feature by</span>
                <span>Plans</span>
              </th>

              <th
                class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                Basic
              </th>

              <th
                class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                Essential
              </th>

              <th
                class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                Premium
              </th>
            </tr>
          </thead>

          <tbody
            class="border-t border-gray-200 divide-y divide-gray-200"
            v-for="plan in plans"
            :key="plan.id"
          >
            <tr>
              <th
                class="bg-gray-100 py-3 pl-6 text-sm leading-5 font-medium text-gray-900 text-left"
                colspan="4"
                scope="colgroup"
              >
                {{ plan.title }}
              </th>
            </tr>

            <tr v-for="plan in plan.rows" :key="plan.id">
              <th
                class="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                scope="row"
              >
                {{ plan.title }}
              </th>
              <td class="py-5 px-6" v-if="plan.firstCol == 'include'">
                <!-- Heroicon name: check -->
                <svg
                  class="h-5 w-5 text-green-500"
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
              </td>
              <td class="py-5 px-6" v-else-if="plan.firstCol == 'none'">
                <!-- Heroicon name: minus -->
                <svg
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </td>
              <td class="py-5 px-6" v-else>
                <span class="block text-sm leading-5 text-gray-700">{{
                  plan.firstCol
                }}</span>
              </td>
              <td class="py-5 px-6" v-if="plan.secCol == 'include'">
                <!-- Heroicon name: check -->
                <svg
                  class="h-5 w-5 text-green-500"
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
                <span class="sr-only">Included in Essential</span>
              </td>

              <td class="py-5 px-6" v-else-if="plan.secCol == 'none'">
                <!-- Heroicon name: minus -->
                <svg
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </td>

              <td class="py-5 px-6" v-else>
                <span class="block text-sm leading-5 text-gray-700">{{
                  plan.secCol
                }}</span>
              </td>

              <td class="py-5 px-6" v-if="plan.thirdCol == 'include'">
                <!-- Heroicon name: check -->
                <svg
                  class="h-5 w-5 text-green-500"
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
                <span class="sr-only">Included in Premium</span>
              </td>

              <td class="py-5 px-6" v-else-if="plan.thirdCol == 'none'">
                <svg
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </td>

              <td class="py-5 px-6" v-else>
                <span class="block text-sm leading-5 text-gray-700">{{
                  plan.thirdCol
                }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["plans"],
};
</script>