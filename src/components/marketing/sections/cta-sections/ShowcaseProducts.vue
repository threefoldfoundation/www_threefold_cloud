<template>
  <div>
    <div
      class="bannerFondo bg-green-800 bg-left-top bg-auto bg-repeat-x"
      style="background-image: url(./img/continuartl_4.png)"
    ></div>

    <div class="-mt-64">
      <div class="w-full text-center">
        <p class="text-sm tracking-widest text-white">subtitle</p>
        <h1 class="font-bold text-5xl text-white">title</h1>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div v-for="(product, idx) in products" :key="idx" class="p-2 sm:p-10 text-center cursor-pointer">
          <div
            class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white"
          >
            <div class="space-y-10">
              <i class="fa fa-spa" style="font-size: 48px"></i>

              <div class="px-6 py-4">
                <div class="space-y-5">
                  <div class="font-bold text-xl mb-2">{{ product.title }}</div>
                  <p v-html="product.content" class="text-gray-700 text-base">
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["products"],
};
</script>

<style scoped>
.bannerFondo {
  height: 400px;
}
</style>
