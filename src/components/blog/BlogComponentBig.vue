<template>
    <div class="col-span-2 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
        <a :href="url" class=" hover:text-threefold-green">
            <div class="h-full p-6 bg-white rounded border-t-4 border-green-500 shadow">
            <img :src="imgUrl" :lt="imgAlt" class="w-full md:max-w-xl mx-auto">  
            <h3 class="text-2xl mb-3 font-semibold">{{ title}}</h3>
            <p class="text-gray-900">{{ description}}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
  props: ["imgUrl", "imgAlt",  "title", "description", "url"],
};
</script>