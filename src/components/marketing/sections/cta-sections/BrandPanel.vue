<template>
  <div
    v-if="
      (id == 'home' && !lastBrand) ||
      (id == 'network' && !lastBrand && !textFirst)
    "
    class="to-black"
  >
    <div class="max-w-screen-2xl mx-auto py-20">
      <div class="rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div
          class="
            pt-10
            pb-12
            px-6
            sm:pt-16 sm:px-16
            lg:py-16 lg:pr-0
            xl:py-20 xl:px-10
          "
        >
          <div class="lg:self-center">
            <h2
              class="leading-none font-extrabold mb-10 text-white"
              :class="{
                'lg:text-5xl leading-none': id == 'home',
                'lg:text-5xl ': id == 'network',
              }"
            >
              {{ brand.title }}
            </h2>
            <div
              class="mt-4 lg:text-2xl text-xl leading-normal text-white"
              v-html="brand.content"
            ></div>
            <div class="my-10" v-if="brand.button">
              <a
                v-if="brand.link.includes('http')"
                target="_blank"
                :href="brand.link"
                class="
                  inline-block
                  green
                  uppercase
                  text-2xl text-black
                  font-extrabold
                  px-8
                  py-3
                  mr-5
                  my-2
                  shadow
                  rounded-lg
                "
                >{{ brand.button }}</a
              >
              <a
                v-else
                :href="brand.link"
                class="
                  inline-block
                  green
                  uppercase
                  text-2xl text-black
                  font-extrabold
                  px-8
                  py-3
                  mr-5
                  my-2
                  shadow
                  rounded-lg
                "
                >{{ brand.button }}</a
              >
            </div>
          </div>
        </div>
        <div class="relative">
          <g-image
            class="inset-0 mx-auto object-cover"
            :class="{ 'w-3/4': id == 'network' }"
            :src="image"
            :alt="brand.title"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-else-if="
      (id == 'home' && lastBrand) ||
      (id == 'network' && textFirst) ||
      (id == 'storage' && textFirst)
    "
  >
    <div class="max-w-screen-3xl mx-auto py-16">
      <div class="rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div
          class="
            flex
            content-center
            pb-12
            px-6
            sm:px-16
            lg:pr-0
            xl:py-10 xl:px-20
          "
        >
          <div class="lg:self-center">
            <h2 class="lg:text-5xl leading-none text-black">
              {{ brand.title }}
            </h2>
            <div
              class="mt-4 text-xl lg:text-2xl leading-normal text-black"
              v-html="brand.content"
            ></div>
            <div class="my-10">
              <a
                :href="brand.link"
                v-if="brand.button"
                class="
                  text-center
                  inline-block
                  green
                  bg-green-300
                  lg:text-2xl
                  text-lg
                  font-extrabold
                  px-12
                  hover:bg-green-200
                  rounded-lg
                  py-4
                  mb-4
                  lg:mr-4
                  shadow
                "
                >{{ brand.button }}</a
              >
              <a
                :href="brand.link2"
                v-if="brand.button2"
                class="
                  text-center
                  inline-block
                  green
                  bg-green-300
                  lg:text-2xl
                  text-lg
                  font-extrabold
                  px-12
                  hover:bg-green-200
                  rounded-lg
                  py-4
                  mb-4
                  shadow
                "
                >{{ brand.button2 }}</a
              >
            </div>
          </div>
        </div>
        <div class="relative lg:mt-14">
          <g-image
            class="inset-0 mx-auto object-cover"
            :class="{
              'w-3/4': id == 'home',
              'w-3/4': id == 'network',
              'w-3/4': id == 'storage',
            }"
            :src="image"
            :alt="brand.title"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    id="block_2"
    v-else-if="
      (id == 'compute' && !lastBrand) || (id == 'network' && lastBrand)
    "
  >
    <div class="max-w-screen-3xl mx-auto py-16">
      <div class="rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="lg:mt-14">
          <g-image class="mx-auto" :src="image" :alt="brand.title" />
        </div>
        <div class="flex content-center px-6 sm:px-16 lg:pr-0 xl:px-20">
          <div class="lg:self-center">
            <h2
              class="lg:text-5xl leading-none font-extrabold text-black mb-10"
            >
              {{ brand.title }}
            </h2>
            <div
              class="mt-4 text-xl lg:text-2xl leading-normal text-black"
              v-html="brand.content"
            ></div>
            <div class="mt-20">
              <a
                v-if="brand.link.includes('http')"
                target="_blank"
                :href="brand.link"
                class="
                  text-center
                  inline-block
                  green
                  bg-green-300
                  lg:text-2xl
                  text-lg
                  font-extrabold
                  px-12
                  hover:bg-green-200
                  rounded-lg
                  py-4
                  mb-4
                  shadow
                "
                >{{ brand.button }}</a
              >
              <a
                v-else
                :href="brand.link"
                class="
                  text-center
                  inline-block
                  green
                  bg-green-300
                  lg:text-2xl
                  text-lg
                  font-extrabold
                  px-12
                  hover:bg-green-200
                  rounded-lg
                  py-4
                  mb-4
                  shadow
                "
                >{{ brand.button }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    id="block_4"
    v-else-if="(id == 'compute' && lastBrand) || (id == 'network' && lastBrand)"
  >
    <div class="max-w-screen-3xl mx-auto py-16">
      <div class="rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="flex content-center px-6 sm:px-16 lg:pr-0 xl:px-20">
          <div class="lg:self-center">
            <h2
              class="lg:text-5xl leading-none font-extrabold text-black mb-10"
            >
              {{ brand.title }}
            </h2>
            <div
              class="mt-4 text-xl lg:text-2xl leading-normal text-black"
              v-html="brand.content"
            ></div>
            <div class="my-10">
              <a
                v-if="brand.link.includes('http')"
                target="_blank"
                :href="brand.link"
                class="
                  text-center
                  inline-block
                  green
                  bg-green-300
                  lg:text-2xl
                  text-lg
                  font-extrabold
                  px-12
                  hover:bg-green-200
                  rounded-lg
                  py-4
                  mb-4
                  shadow
                "
                >{{ brand.button }}</a
              >
              <a
                v-else
                :href="brand.link"
                class="
                  text-center
                  inline-block
                  green
                  bg-green-300
                  lg:text-2xl
                  text-lg
                  font-extrabold
                  px-12
                  hover:bg-green-200
                  rounded-lg
                  py-4
                  mb-4
                  shadow
                "
                >{{ brand.button }}</a
              >
            </div>
          </div>
        </div>
        <div class="lg:mt-14">
          <g-image class="mx-auto w-2/3" :src="image" :alt="brand.title" />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="bg-white">
    <div class="max-w-screen-xl mx-auto py-16">
      <div
        class="
          brandpanel
          rounded-lg
          shadow-xl
          overflow-hidden
          lg:grid lg:grid-cols-2 lg:gap-4
        "
      >
        <div
          class="
            pt-10
            pb-12
            px-6
            sm:pt-16 sm:px-16
            lg:py-16 lg:pr-0
            xl:py-20 xl:px-20
          "
        >
          <div class="lg:self-center">
            <h2
              class="
                text-3xl
                leading-9
                font-extrabold
                text-white
                sm:text-3xl sm:leading-10
              "
            >
              <span class="block">{{ brand.title }}</span>
              <span class="block" v-if="brand.subtitle">{{
                brand.subtitle
              }}</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-white">
              {{ brand.excerpt }}
            </p>
            <g-link
              :to="brand.sourceUrl"
              class="
                mt-8
                bg-white
                border border-transparent
                rounded-md
                shadow
                px-6
                py-3
                inline-flex
                items-center
                text-base
                leading-6
                font-medium
                text-gray-900
                hover:text-indigo-500 hover:bg-gray-50
                transition
                duration-150
                ease-in-out
              "
              >{{ brand.btnTxt }}</g-link
            >
          </div>
        </div>
        <div class="relative pb-3/5 -mt-6 md:pb-1/2">
          <g-image
            class="
              absolute
              brandpanel
              inset-0
              w-full
              h-full
              transform
              translate-x-6 translate-y-6
              rounded-md
              object-cover object-left-top
              sm:translate-x-16
              lg:translate-y-20
            "
            :src="image"
            :alt="brand.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "brand", "lastBrand", "textFirst"],
  computed: {
    image() {
      return this.brand.image.src
        ? this.brand.image.src
        : require(`!!assets-loader!@images/brandPanel/${this.brand.image}`);
    },
  },
};
</script>

<style scoped>
.to-black {
  background: #000;
  background: -webkit-linear-gradient(to right, #000, #323232);
  background: linear-gradient(to right, #000, #323232);
}
.green {
  /* background-color: #70dfc9; */
  font-family: "Orbitron", sans-serif !important;
}
</style>