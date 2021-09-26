<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="main" class="lg:text-center">
        <h2
          class="
            text-base text-indigo-600
            font-semibold
            tracking-wide
            uppercase
          "
        >
          {{ main.subtitle }}
        </h2>
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          {{ main.title }}
        </p>
        <div
          class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          v-html="main.content"
        ></div>
      </div>

      <div class="mt-10">
        <dl
          class="
            space-y-10
            md:space-y-0
            md:grid md:grid-cols-2
            md:gap-x-8 md:gap-y-10
          "
        >
          <div class="relative" v-for="feature in features" :key="feature.id">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/globe-alt -->
                <g-image :src="feature.image" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.title }}
              </p>
            </dt>
            <dd
              class="mt-2 ml-16 text-base text-gray-500"
              v-html="feature.content"
            ></dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "main", "features"],
};
</script>