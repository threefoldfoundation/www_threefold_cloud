<template>
  <div class="py-12 mb-5 mx-40">
    <div class="mx-auto text-center">
      <h1
        v-if="main.title"
        class="text-5xl mt-2 uppercase mb-6 leading-tight font-heading"
      >
        {{ main.title }}
      </h1>
      <div
        v-if="main.content"
        class="lg:text-2xl mx-auto text-xl tracking-widest max-w-4xl"
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
                  bg-green-300
                  text-lg
                  font-extrabold
                  px-12
                  hover:bg-green-200
                  rounded-lg
                  py-4
                  mb-4
                  shadow
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
.green {
  /* background-color: #70dfc9; */
  font-family: "Orbitron", sans-serif !important;
}
</style>
