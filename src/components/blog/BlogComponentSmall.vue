<template>
    <a :href="url" class=" hover:text-threefold-green">
        <div class="w-full px-6 mb-8 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div class="h-full md:p-6 bg-white rounded border-t-2 border-b-2 border-green-500 ">
                <h3 class="text-2xl mb-3 font-semibold">{{ title }}</h3>
                <p class="text-gray-900">{{ description }}</p>
            </div>
        </div>
    </a>
</template>

<script>
export default {
  props: ["title", "description", "url"],
};
</script>