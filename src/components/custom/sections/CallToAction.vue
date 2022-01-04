<template>
  <section
    class="lg:py-20 py-10 px-4 text-center"
    :class="{
      'to-black': textOnly,
      'bg-gray': lastCta,
    }"
  >
    <div class="w-full mx-auto mt-10" v-if="id == 'home' && !textOnly">
      <g-image class="mx-auto" :src="img(cta.image)" />
    </div>

    <div
      v-else-if="id == 'home' && textOnly"
      class="w-full py-20 max-w-3xl mx-auto"
    >
      <h2 class="text-5xl text-white leading-tight font-semibold font-heading">
        {{ cta.title }}
        <span class="pink">{{ cta.subtitle }}</span>
      </h2>
      <div
        v-html="cta.content"
        class="text-2xl text-white leading-normal py-10"
      ></div>
      <a
        v-if="cta.link.includes('http')"
        target="_blank"
        :href="cta.link"
        class="
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
        >{{ cta.button }}</a
      >
      <a
        v-else
        :href="cta.link"
        class="
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
        >{{ cta.button }}</a
      >
    </div>

    <div id="block_3"
      v-else-if="id == 'compute' && !lastCta && !textOnly"
      class="w-full py-20 max-w-3xl mx-auto"
    >
      <div class="w-full mx-auto mt-10">
        <g-image :src="img(cta.image)" class="w-2/3 mx-auto" />
      </div>
      <h2
        class="lg:text-5xl text-black leading-none font-semibold font-heading"
      >
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-xl lg:text-2xl leading-normal"
      ></div>
      <a
        v-if="cta.link.includes('http')"
        target="_blank"
        :href="cta.link"
        class="
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
        >{{ cta.button }}</a
      >
      <a
        v-else
        :href="cta.link"
        class="
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
        >{{ cta.button }}</a
      >
    </div>

    <div
      v-else-if="
        (id == 'compute' && lastCta) ||
        (id == 'compute' && textOnly) ||
        id == 'network'
      "
      class="w-full py-20 max-w-4xl mx-auto"
    >
      <h2
        class="lg:text-5xl leading-tight font-bold font-heading"
        :class="{ 'text-white': textOnly, 'text-black': !textOnly }"
      >
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-xl lg:text-2xl leading-non"
        :class="{ 'text-white': textOnly, 'text-black': !textOnly }"
      ></div>
      <div class="w-full mx-auto mt-10">
        <g-image
          :src="img(cta.image)"
          class="mx-auto"
          :class="{ 'w-1/2': id == 'network' }"
        />
      </div>
      <div class="mt-20">
        <a
          v-if="cta.link.includes('http')"
          target="_blank"
          :href="cta.link"
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
          >{{ cta.button }}</a
        >
        <a
          v-else
          :href="cta.link"
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
          >{{ cta.button }}</a
        >
      </div>
    </div>

    <div
      v-else-if="id == 'storage' && textOnly"
      class="w-full max-w-4xl mx-auto my-20"
    >
      <h2
        class="lg:text-5xl text-white leading-tight font-semibold font-heading"
      >
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-white text-xl lg:text-2xl leading-normal"
      ></div>
      <div class="w-full mx-auto mt-10" v-if="cta.image">
        <g-image :src="img(cta.image)" class="mx-auto w-1/2" />
      </div>
      <div class="mt-20" v-if="cta.button">
        <a
          v-if="cta.link.includes('http')"
          target="_blank"
          :href="cta.link"
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
          >{{ cta.button }}</a
        >
        <a
          v-else
          :href="cta.link"
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
          >{{ cta.button }}</a
        >
      </div>
    </div>

    <div v-else-if="id == 'storage' && !textOnly" class="w-full mx-auto">
      <h2 class="lg:text-5xl text-black leading-tight font-bold font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="
          mt-6
          mb-8
          text-black text-xl
          lg:text-2xl
          max-w-3xl
          mx-auto
          leading-relaxed
        "
      ></div>
      <div class="w-full mx-auto mt-10">
        <g-image
          :src="img(cta.image)"
          class="mx-auto lg:w-1/2 lg:my-20"
          :class="{ 'w-1/2': id == 'network' }"
        />
      </div>
      <div class="mt-20">
        <a
          v-if="cta.link.includes('http')"
          target="_blank"
          :href="cta.link"
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
          >{{ cta.button }}</a
        >
        <a
          v-else
          :href="cta.link"
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
          >{{ cta.button }}</a
        >
      </div>
    </div>

    <div v-else class="w-full max-w-2xl mx-auto">
      <h2
        class="text-5xl leading-tight font-bold font-heading"
      >
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-12 leading-relaxed"
      ></div>
      <!-- <a
        v-if="cta.button"
        class="inline-block bg-blue-900 text-lg learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
        :href="cta.link"
        >{{ cta.button }}</a
      > -->

      <a
        v-if="cta.link.includes('http')"
        target="_blank"
        :href="cta.link"
        class="
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
        >{{ cta.button }}</a
      >
      <a
        v-else
        :href="cta.link"
        class="
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
        >{{ cta.button }}</a
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["id", "cta", "textOnly", "lastCta"],
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
.to-black {
  background: #000;
  background: -webkit-linear-gradient(to right, #000, #323232);
  background: linear-gradient(to right, #000, #323232);
}
.to-black-bottom {
  background: #000;
  background: -webkit-linear-gradient(to bottom, #000, #323232);
  background: linear-gradient(to bottom, #000, #323232);
}
.bg-gray {
  background-color: #e6e6e6;
}

.green {
  /* background-color: #70dfc9; */
  font-family: "Orbitron", sans-serif !important;
}
</style>