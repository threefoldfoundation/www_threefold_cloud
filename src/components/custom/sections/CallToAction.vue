<template>
  <section
    class="py-12 px-4 text-center"
    :class="{
      'to-black': textOnly,
      'bg-gray': lastCta,
    }"
  >
    <div class="w-full mx-auto mt-10" v-if="id == 'home' && !textOnly">
      <g-image class="mx-auto" :src="cta.image.src" />
    </div>

    <div
      v-else-if="id == 'home' && textOnly"
      class="w-full py-20 max-w-2xl mx-auto"
    >
      <h2 class="text-5xl text-white leading-tight font-semibold font-heading">
        {{ cta.title }}
        <span class="pink">{{ cta.subtitle }}</span>
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-white leading-relaxed"
      ></div>
      <a
        v-if="cta.link.includes('http')"
        target="_blank"
        :href="cta.link"
        class="green text-md text-gray-900 px-12 py-2 mb-4 shadow"
        >{{ cta.button }}</a
      >
      <a
        v-else
        :href="cta.link"
        class="green text-md text-gray-900 px-12 py-2 mb-4 shadow"
        >{{ cta.button }}</a
      >
    </div>

    <div
      v-else-if="id == 'compute' && !lastCta && !textOnly"
      class="w-full py-20 max-w-2xl mx-auto"
    >
      <div class="w-full mx-auto mt-10">
        <g-image :src="cta.image.src" class="w-1/2 mx-auto" />
      </div>
      <h2 class="text-4xl text-black leading-tight font-semibold font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-black leading-relaxed"
      ></div>
      <a
        v-if="cta.link.includes('http')"
        target="_blank"
        :href="cta.link"
        class="
          green
          text-xl
          font-extrabold
          text-gray-900
          px-12
          py-2
          mb-4
          shadow
          rounded-lg
        "
        >{{ cta.button }}</a
      >
      <a
        v-else
        :href="cta.link"
        class="
          green
          text-xl
          font-extrabold
          text-gray-900
          px-12
          py-2
          mb-4
          shadow
          rounded-lg
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
      <h1
        class="text-6xl leading-tight font-semibold font-heading"
        :class="{ 'text-white': textOnly, 'text-black': !textOnly }"
      >
        {{ cta.title }}
      </h1>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-xl leading-relaxed"
        :class="{ 'text-white': textOnly, 'text-black': !textOnly }"
      ></div>
      <div class="w-full mx-auto mt-10">
        <g-image
          :src="cta.image.src"
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
            green
            text-xl
            font-extrabold
            text-gray-900
            px-12
            py-2
            mb-4
            shadow
            rounded-lg
          "
          >{{ cta.button }}</a
        >
        <a
          v-else
          :href="cta.link"
          class="
            green
            text-xl
            font-extrabold
            text-gray-900
            px-12
            py-2
            shadow
            rounded-lg
          "
          >{{ cta.button }}</a
        >
      </div>
    </div>

    <div
      v-else-if="id == 'storage' && textOnly"
      class="w-full max-w-2xl mx-auto"
    >
      <h2 class="text-5xl text-white leading-tight font-semibold font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-white text-lg leading-relaxed"
      ></div>
      <div class="w-full mx-auto mt-10" v-if="cta.image">
        <g-image :src="cta.image.src" class="mx-auto" />
      </div>
      <div class="mt-20" v-if="cta.button">
        <a
          v-if="cta.link.includes('http')"
          target="_blank"
          :href="cta.link"
          class="
            green
            text-xl
            font-extrabold
            text-gray-900
            px-12
            py-4
            mb-4
            shadow
            rounded-lg
          "
          >{{ cta.button }}</a
        >
        <a
          v-else
          :href="cta.link"
          class="
            green
            text-xl
            font-extrabold
            text-gray-900
            px-12
            py-4
            shadow
            rounded-lg
          "
          >{{ cta.button }}</a
        >
      </div>
    </div>

    <div v-else-if="id == 'storage' && !textOnly" class="w-full mx-auto">
      <h2 class="text-5xl text-black leading-tight font-semibold font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-black text-xl max-w-3xl mx-auto leading-relaxed"
      ></div>
      <div class="w-full mx-auto mt-10">
        <g-image
          :src="cta.image.src"
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
            green
            text-xl
            font-extrabold
            text-gray-900
            px-12
            py-4
            mb-4
            shadow
            rounded-lg
          "
          >{{ cta.button }}</a
        >
        <a
          v-else
          :href="cta.link"
          class="
            green
            text-xl
            font-extrabold
            text-gray-900
            px-12
            py-4
            shadow
            rounded-lg
          "
          >{{ cta.button }}</a
        >
      </div>
    </div>

    <div v-else class="w-full max-w-2xl mx-auto">
      <h2
        class="text-5xl text-gray-700 leading-tight font-semibold font-heading"
      >
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-gray-700 leading-relaxed"
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
          rounded
          shadow
          rounded-full
        "
        >{{ cta.button }}</a
      >
      <a
        v-else
        :href="cta.link"
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
          rounded
          shadow
          rounded-full
        "
        >{{ cta.button }}</a
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["id", "cta", "textOnly", "lastCta"],
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
</style>