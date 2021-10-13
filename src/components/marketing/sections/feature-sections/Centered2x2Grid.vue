<template>
  <div class="py-32 bg-white">
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

      <div
        class="mt-12 grid gap-5 mx-auto lg:grid-cols-2"
      >
        <!-- <dl
          class="
            space-y-10
            md:space-y-0
            md:grid md:grid-cols-2
            md:gap-x-8 md:gap-y-10
          "
        > -->
          <div class="flex flex-wrap text-center lg:text-left -mx-2 my-10" v-for="feature in features" :key="feature.id">
            <!-- <dt> -->
              <div class="lg:w-1/3 mx-auto self-start">
                <!-- Heroicon name: outline/globe-alt -->
                <g-image class="mx-auto" :src="feature.image" />
              </div>
             
            <!-- </dt> -->
            <div
              class="lg:w-2/3"
              
            >
             <h2 class="text-3xl leading-none uppercase font-heading">
                
                {{ feature.title }}
              </h2>
              <div
                class="mt-2 text-xl"
              v-html="feature.content"
              >
              </div>
            
            </div>
          </div>
        <!-- </dl> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "main", "features"],
};
</script>