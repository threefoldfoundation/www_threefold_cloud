<template>
  <section class="md:py-16 px-4 md:mx-24  mx-12 w-full container">
      <div class="text-center">
        <span class="text-green-600 font-semibold">BLOG</span>
        <h2 class="text-3xl text-center mt-2 mb-12 font-semibold font-heading">Check our latest blog posts</h2>
      </div>
      <div v-for="(blog, index) in blogs" :key="blog.id" class="md:grid md:grid-cols-4 grid-cols-1 md:grid-rows-1 md:gap-8 gap-4">
        <div v-if="index == 0" class="col-span-2 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
          <a :href="blogs[0].url" class=" hover:text-threefold-green">
            <div class="h-full p-6 bg-white rounded border-t-4 border-green-500 shadow">
              <img :src="blog.image" :alt="blog.imgAlt" class="w-full md:max-w-xl mx-auto">  
              <h3 class="text-2xl mb-3 font-semibold">{{ blog.title}}</h3>
              <p class="text-gray-900">{{ blog.description }}</p>
            </div>
          </a>
        </div>
        <div v-if="index > 1 && index < 4" class="col-span-2">
          
          <a :href="blog.url" class="w-full hover:text-threefold-green">
            <div class="w-full px-6 mb-8 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div class="h-full md:p-6 bg-white rounded border-t-2 border-green-500 ">
                <h3 class="text-2xl mb-3 font-semibold">{{ blog.title }}</h3>
                <p class="text-gray-900">{{ blog.description }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="mx-auto text-center  my-8">
        <a href="#">
          <h3 class="text-xl uppercase text-threefold-green font-semibold hover:underline transition duration-300">Join {{blogs.length}} Blog Subscribers</h3>
        </a>
      </div>
    </section>


</template>

<script>
export default {
  props: {
    blogs: Array  
  },
};
</script>
