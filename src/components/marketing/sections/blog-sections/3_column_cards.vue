<template>
  <div
    v-if="id == 'home'"
    class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center" v-if="main">
        <h2
          class="
            text-5xl
            leading-tight
            mb-6
            font-bold font-heading
            uppercase
            sm:leading-10
          "
        >
          {{ main.title }}
        </h2>
        <div
          class="mt-3 max-w-2xl mx-auto text-gray-700 sm:mt-4"
          v-html="main.content"
        ></div>
      </div>
      <div
        class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
      >
        <div
          class="flex flex-col text-center overflow-hidden"
          v-for="blog in blogs"
          :key="blog.id"
        >
          <div class="flex-shrink-0">
            <g-image
              class="h-48 w-full object-cover"
              :src="img(blog.image)"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {{ blog.title }}
              </h3>
              <div
                v-html="blog.content"
                class="mt-3 text-base md:text-lg leading-6 text-gray-800"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="
            text-5xl
            leading-tight
            mb-6
            font-bold font-heading
            uppercase
            sm:leading-10
          "
        >
          {{ main.title }}
        </h2>
        <div
          class="mt-3 max-w-2xl mx-auto text-gray-700 sm:mt-4"
          v-html="main.content"
        ></div>
      </div>
      <div
        class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
      >
        <div
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
          v-for="blog in blogs"
          :key="blog.id"
        >
          <div class="flex-shrink-0">
            <g-image
              class="h-48 w-full object-cover"
              :src="img(blog.image)"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <!-- <p class="text-sm leading-5 font-medium text-indigo-600">
                <a :href="blog.tagUrl" class="hover:underline">
                  {{ blog.tag }}
                </a>
              </p> -->
              <a :href="path(blog)" class="block">
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {{ blog.title }}
                </h3>
                <div
                  v-html="blog.excerpt"
                  class="mt-3 text-base leading-6 text-gray-500"
                ></div>
              </a>
            </div>
            <!-- <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a :href="blog.autherUrl">
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="img(blog.authorImg)"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm leading-5 font-medium text-gray-900">
                  <a :href="blog.autherUrl" class="hover:underline">
                    {{ blog.author }}
                  </a>
                </p>
                <div class="flex text-sm leading-5 text-gray-500">
                  <time :datetime="blog.created"> {{ blog.created }} </time>
                  <span class="mx-1"> &#xB7; </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "main", "blogs"],
  methods: {
    path(blog) {
      if (this.pathPrefix) return this.pathPrefix + "/" + blog.id;
      return blog.path;
    },
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>