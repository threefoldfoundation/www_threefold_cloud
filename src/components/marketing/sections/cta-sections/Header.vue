<template>
  <section>
    <div class="flex flex-wrap text-center lg:pt-4 pb-10" v-if="id == 'home'">
      <div class="px-3 lg:mt-5 order-1 lg:order-none mx-auto text-center">
        <h2
          class="text-5xl uppercase mb-6 leading-none font-black font-heading"
        >
          {{ title }}
        </h2>
        <div
          class="mb-8 mx-auto lg:text-2xl text-xl lg:max-w-4xl leading-normal"
          v-html="excerpt"
        ></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 mx-auto items-center">
        <div class="w-full mb-4">
          <div class="arrow_up"></div>
          <g-link :to="link1" class="text-5xl font-extrabold">{{
            text1
          }}</g-link>
        </div>
        <div class="mb-4">
          <g-image
            class="mx-auto sm:w-1/2 lg:w-full"
            :src="img"
            :alt="altImg"
          />
        </div>
        <div class="w-full mb-4">
          <g-link :to="link2" class="text-5xl font-extrabold">{{
            text2
          }}</g-link>
          <div class="arrow_down"></div>
        </div>
      </div>
    </div>

    <div
      v-else-if="id == 'compute'"
      class="
        flex flex-wrap
        items-center
        text-center
        lg:text-left
        -mx-2
        lg:mx-10 lg:my-40
        my-10
      "
    >
      <div
        class="lg:w-1/2 lg:pl-20 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"
      >
        <h2
          class="
            lg:text-6xl
            xs:text-4xl
            mb-6
            leading-none
            font-bold font-heading
            text-gray-800
          "
        >
          {{ title }}
        </h2>
        <div
          class="mb-8 lg:text-2xl text-xl leading-normal"
          v-html="excerpt"
        ></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="
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
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="
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
            :href="link"
            >{{ button }}</a
          >
        </div>
      </div>
      <div class="lg:w-1/2 px-2">
        <g-image class="lg:w-3/4 mx-auto" :src="img" :alt="altImg" />
      </div>
    </div>
    <div
      class="flex flex-wrap text-center lg:text-left -mx-2"
      v-else-if="id == 'network'"
    >
      <div class="px-3 order-1 lg:order-none mx-auto text-center px-4">
        <h2
          class="max-w-4xl lg:text-6xl uppercase mb-6 leading-none font-heading"
        >
          {{ title }}
        </h2>
        <div
          class="mb-8 mx-auto lg:text-2xl text-xl max-w-4xl"
          v-html="excerpt"
        ></div>

        <a
          v-if="link.includes('http')"
          target="_blank"
          class="
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
          :href="link"
          >{{ button }}</a
        >
        <a
          v-else
          class="
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
          :href="link"
          >{{ button }}</a
        >
      </div>
      <g-image class="order-2 lg:order-none" :src="img" :alt="altImg" />
    </div>

    <div
      v-else-if="id == 'storage'"
      class="
        flex flex-wrap
        items-center
        text-center
        lg:text-left
        -mx-2
        lg:mx-10
        px-4
        lg:my-10
        mb-10
      "
    >
      <div class="lg:w-1/2 px-2">
        <g-image class="mx-auto w-3/4" :src="img" :alt="altImg" />
      </div>

      <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
        <h2
          class="
            lg:text-6xl
            test
            mb-6
            leading-none
            font-bold font-heading
            text-gray-800
          "
        >
          {{ title }}
        </h2>
        <div
          class="
            mb-8
            text-gray-900
            max-w-2xl
            text-xl
            lg:text-2xl
            leading-normal
          "
          v-html="excerpt"
        ></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="
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
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="
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
            :href="link"
            >{{ button }}</a
          >
          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>
    </div>

    <div
      v-else
      class="flex flex-wrap items-center text-center lg:text-left -mx-2"
    >
      <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
        <h2
          class="
            text-8xl
            test
            mb-6
            leading-tight
            font-bold font-heading
            text-gray-800
          "
        >
          {{ title }}
        </h2>
        <div class="mb-8 text-gray-700 leading-relaxed" v-html="excerpt"></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="
              inline-block
              bg-blue-900
              text-lg
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-8
              py-2
              mr-5
              my-2
              shadow
              rounded-full
            "
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="
              inline-block
              text-lg
              learn-button
              text-gray-100
              px-8
              py-2
              mr-5
              my-2
              shadow
              rounded-full
            "
            :href="link"
            >{{ button }}</a
          >
          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>
      <div class="lg:w-1/2 px-2"><g-image :src="img" :alt="altImg" /></div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "id",
    "title",
    "excerpt",
    "altImg",
    "image",
    "button",
    "link",
    "text1",
    "link1",
    "text2",
    "link2",
  ],
  computed: {
    img: function () {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    },
  },
};
</script>
<style scoped>
.green {
  /* background-color: #70dfc9; */
  font-family: "Orbitron", sans-serif !important;
}
.arrow_up,
.arrow_down {
  display: inline-block;
  margin-right: 10px;
  width: 0;
  height: 0;
  border-width: 0 12.5px 30px 12.5px;
  border-color: transparent transparent #000000 transparent;
  border-style: solid;
}
.arrow_down {
  margin-left: 10px;

  border-width: 35px 12.5px 0 12.5px;
  border-color: #000000 transparent transparent transparent;
}

a {
  font-family: "Orbitron", sans-serif !important;
}
</style>
