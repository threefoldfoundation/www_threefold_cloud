<template>
    <div class="mt-8">
        <a :href="card.link" class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded">{{ card.button }}</a>
    </div>
</template>

<script>
export default {
    props:['card']
}
</script>