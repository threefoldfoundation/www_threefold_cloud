<template>
        <section class="py-12 px-4 text-center">
  <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">THREEFOLD TEAM</h2>
  
  <p class="max-w-xl mx-auto mb-12 text-gray-400">The heartbeat behind the ThreeFold Movement.</p>
       <div class="flex max-w-lg mb-12 mx-auto text-center border-b-2">
  
    <div v-for="(filter, index) in filters" :key="filter" class="w-1/3 pb-2">
      <button v-if="index == 0" class="w-1/3 pb-2 border-b-4 border-indigo-600">{{ filter }}</button>
       <button v-if="index != 0" class="hover:text-indigo-600">{{ filter }}</button>
    </div>

  </div>
  <div class="flex flex-wrap -mx-4">

    <div  v-for="person in people" :key="person.id" class="w-1/2 lg:w-1/4 p-4">
      <img class="w-1/2 mx-auto mb-4 rounded-full" :src="person.img" :alt="person.imgAlt">
      <h3 class="text-xl mb-1 font-semibold font-heading font-semibold">{{ person.name }}</h3>
      <span>{{ person.title }}</span>
    </div> 
  </div>
</section>


</template>

<script>
export default {
  props: {
    people: Array,
    filters: Array
  }
}
</script>