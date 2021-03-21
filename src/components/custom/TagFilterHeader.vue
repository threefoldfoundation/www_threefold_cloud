<template>
  <div class="fixed top-16 left-0 z-50 mb-5 h-16 bg-gray-100 w-full">
    <header
      class="flex items-center flex-wrap container mx-auto pt-1 pb-0 sm:px-0 transition-all transition-500"
    >
      <div class="flex items-center justify-between px-4 sm:p-0">
        <div class="inline-flex items-center flex-shrink-0">
          <span class="flex text-xl p-3 capitalize tracking-tight"
            >filter:</span
          >
        </div>
        <!-- <div class="sm:block md:hidden">
          <ul class="list-none inline-flex justify-center md:justify-end">
            <li class="py-1 mx-5 cursor-pointer" @click="resetAll()">Reset</li>
          </ul>
        </div> -->
      </div>

      <nav
        class="inline-flex md:order-2 px-2 pt-2 pb-4 sm:flex sm:p-0 bg-transparent"
      >
        <ul
          class="list-none sm:flex justify-left capitalize transition-all transition-500"
        >
          <!-- Tags -->
          <li class="pt-2 mx-5">
            <div class="relative" x-data="{ open: false }">
              <button
                @click="setActive(0)"
                class="flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link"
              >
                <span class="capitalize">{{ selected }}</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  :class="{
                    'rotate-180': active == 0,
                    'rotate-0': !active == 0,
                  }"
                  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                v-if="active == 0"
                x-show="open"
                x-transition:enter="transition ease-out duration-100"
                x-transition:enter-start="transform opacity-0 scale-95"
                x-transition:enter-end="transform opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75"
                x-transition:leave-start="transform opacity-100 scale-100"
                x-transition:leave-end="transform opacity-0 scale-95"
                class="absolute w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30"
              >
                <div
                  v-if="open"
                  class="w-64 max-h-10 px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"
                >
                  <a
                    v-for="tag in tags"
                    :key="tag.path"
                    class="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    :href="$url(tag.path)"
                    @click.self="open = false"
                    >{{ tag.title }}</a
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <!-- <div class="hidden md:ml-auto md:inline-block md:order-last">
        <ul class="list-none inline-flex justify-center md:justify-end">
          <li class="py-1 mx-5 cursor-pointer" @click="resetAll()">Reset</li>
        </ul>
      </div> -->
    </header>
  </div>
</template>

<script>
/*
 * I'm a lazy guy, so i used this script
 * https://codepen.io/ninaregli/pen/OjeMLP
 * to calculate the current scroll position
 *
 * Will be used to add/remove the additional
 * css classes to show the sticky navbar
 */

export default {
  props: ["tags", "selected"],
  data() {
    return {
      tag: "All",
      isOpen: false,
      open: false,
      active: null,
    };
  },

  methods: {
    setActive(index) {
      this.active = index;
      this.open = !this.open;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
      }
    },
    resetAll() {
      this.$emit("resetAll", true);
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
</script>

<style scoped>
.top-16 {
  top: 4rem;
}
</style>