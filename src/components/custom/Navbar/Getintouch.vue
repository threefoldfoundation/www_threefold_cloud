<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="grid grid-cols-1 gap-16">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 class="text-4xl mb-6 leading-tight font-semibold font-heading">
            Get in touch
          </h2>
          <div
            class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2"
          >
            <div v-for="(contact, idx) in contacts" :key="idx">
              <h4 class="text-lg leading-6 font-medium text-gray-700">
                {{ contact.title }}
              </h4>
              <div class="mt-2 text-base leading-6 text-gray-500">
                <div>
                  {{ contact.mail }}
                </div>
              </div>
              <div class="mt-1">
                {{ contact.phone }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-100"></div>
  </div>
</template>

<script>
export default {
  props: ["contacts"],
};
</script>

