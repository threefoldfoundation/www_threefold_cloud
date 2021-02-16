<template>
        <div>
    <div class="lg:py-12 lg:flex lg:justify-center flex flex-col">
        <div class="bg-white lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-lg lg:h-full" :style="card.img"></div>
            </div>
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                <h2 class="text-3xl text-gray-700 font-bold">{{ card.title }}</h2>
                <p class="mt-4 text-gray-700">{{ card.content }}</p>
                <div class="mt-8">
                    <a  :href="card.link" class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded">{{ card.button }}</a>
                </div>
            </div>
        </div>
    </div> 
</div>


</template>

<script>
export default {
  props: ["card"],
};
</script>