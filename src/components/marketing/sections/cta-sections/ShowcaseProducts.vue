<template>
  <div class="py-12 mb-5">
    <div class="w-full text-center">
      <h1
        v-if="main.title"
        class="text-4xl mt-2 uppercase mb-6 leading-tight font-heading"
      >
        {{ main.title }}
      </h1>
      <div
        v-if="main.content"
        class="text-xl tracking-widest text-gray-700"
        v-html="main.content"
      ></div>
    </div>

    <div class="my-10 grid grid-cols-1 gap-4 sm:grid-cols-4">
      <div
        v-for="(product, idx) in products"
        :key="idx"
        class="p-2 sm:p-0 text-center bg-black cursor-pointer"
      >
        <div
          class="
            m-auto
            max-w-sm
            rounded
            overflow-hidden
            shadow-lg
            transition
            duration-500
            pt-5
          "
        >
          <div class="px-2 py-2">
            <g-image
              v-if="product.image"
              class="py-4"
              :src="img(product.image)"
            />
            <div class="uppercase text-white text-xl mb-2">
              {{ product.title }}
            </div>
            <h1
              class="
                text-4xl
                mt-2
                uppercase
                text-white
                mb-6
                leading-tight
                font-heading
              "
            >
              {{ product.price }}
            </h1>
            <div v-html="product.content" class="text-white text-base"></div>
            <div class="my-10">
              <a
                :href="product.link"
                class="
                  inline-block
                  green
                  text-lg text-black
                  font-extrabold
                  px-8
                  py-3
                  my-2
                  shadow
                  rounded-lg
                "
                >{{ product.button }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["products", "main"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>

<style scoped>
.bannerFondo {
  height: 400px;
}
</style>
