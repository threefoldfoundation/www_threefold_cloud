<template>
  <div class="fixed inset-0 h-16 bg-white">
    <header
      class="flex items-center justify-between flex-wrap container mx-auto px-4 sm:px-0 py-4 transition-all transition-500"
      v-bind:class="{
        'opacity-100': !disableScroll && scrollPosition > headerHeight,
        'opacity-0': !disableScroll && scrollPosition < headerHeight,
      }"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div class="inline-flex items-center flex-shrink-0">
          <a href="/" class="flex">
            <img
              src="../../../static/img/TFN_black.svg"
              class="mr-3 fill-current"
              width="180"
              v-if="theme == 'light'"
              alt=""
            />

            <img
              src="../../../static/img/TFN_white.svg"
              class="mr-3 fill-current"
              width="180"
              v-else
              alt=""
            />
            <!-- <span
              class="hidden md:block font-semibold text-xl tracking-tight"
              >{{ $static.metadata.siteName }}</span
            > -->
          </a>
        </div>

        <div class="sm:hidden ml-auto">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <div class="text-gray-400 sm:block md:hidden">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="mr-0 sm:mr-6">
              <theme-switcher v-on="$listeners" :theme="theme" />
            </li>
            <li
              :key="element.name"
              v-for="(element, index) in $static.metadata.social"
              class="hover:text-white sm:block"
              v-bind:class="{
                'mr-6':
                  index != Object.keys($static.metadata.social).length - 1,
              }"
            >
              <span class="text-sm">
                <a
                  :href="element.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome :icon="['fab', element.icon]" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="md:order-2 px-2 pt-2 pb-4 sm:flex sm:p-0 bg-white"
      >
        <ul
          class="list-none sm:flex justify-left uppercase transition-all transition-500"
        >
          <li
            class="py-1"
            :key="element.name"
            v-for="(element, index) in $static.metadata.navigation"
            :class="{
              'mr-2':
                index != Object.keys($static.metadata.navigation).length - 1,
            }"
          >
            <div
              v-if="element.expandable"
              class="relative"
              x-data="{ open: false }"
            >
              <button
                @click="setActive(index)"
                class="flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link"
              >
                <span class="uppercase">{{ element.name }}</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  :class="{
                    'rotate-180': active == index,
                    'rotate-0': !active == index,
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
                v-if="active == index"
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
                  v-if="element.name == 'Projects' && open"
                  class="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"
                >
                  <g-link
                    :to="element.link"
                    class="block px-4 py-2 capitalize mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >All</g-link
                  >
                  <a
                    v-for="edge in $static.allProjectTag.edges"
                    :key="edge.node.id"
                    class="block px-4 py-2 mt-2 capitalize text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="open = false"
                    :href="edge.node.path"
                    >{{ edge.node.title }}</a
                  >
                </div>

                <div
                  v-else-if="element.name == 'People' && open"
                  class="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"
                >
                  <g-link
                    :to="element.link"
                    class="block px-4 py-2 mt-2 capitalize text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >All</g-link
                  >
                  <a
                    v-for="edge in $static.allMembership.edges"
                    :key="edge.node.id"
                    class="block px-4 py-2 mt-2 text-sm capitalize font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="open = false"
                    :href="edge.node.path"
                    >{{ edge.node.title }}</a
                  >
                </div>
              </div>
            </div>

            <g-link v-else :to="element.link" class="animated-link">{{
              element.name
            }}</g-link>
          </li>
        </ul>
        <div class="md:hidden inline-flex rounded-full border w-1/2">
          <span class="w-auto flex justify-end items-center p-2">
            <font-awesome :icon="['fas', 'search']" />
          </span>
          <input
            class="w-full rounded mr-4 bg-white"
            type="text"
            placeholder="Search..."
            v-model="search"
            @keyup.enter="result"
          />
        </div>
      </nav>
      <div class="hidden md:ml-auto md:inline-block md:order-last">
        <div class="inline-flex rounded-full border w-1/2">
          <span class="w-auto flex justify-end items-center p-2">
            <font-awesome :icon="['fas', 'search']" />
          </span>
          <input
            class="w-full rounded mr-4 bg-white"
            type="text"
            placeholder="Search..."
            v-model="search"
            @keyup.enter="result"
          />
        </div>
        <ul class="list-none inline-flex justify-center md:justify-end">
          <li class="mr-0 sm:mr-6">
            <theme-switcher v-on="$listeners" :theme="theme" />
          </li>
          <li
            :key="element.name"
            v-for="(element, index) in $static.metadata.social"
            class="sm:block"
            v-bind:class="{
              'mr-6': index != Object.keys($static.metadata.social).length - 1,
            }"
          >
            <span class="text-sm">
              <a :href="element.link" target="_blank" rel="noopener noreferrer">
                <font-awesome :icon="['fab', element.icon]" />
              </a>
            </span>
          </li>
        </ul>
      </div>
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

import ThemeSwitcher from "~/components/ThemeSwitcher";

export default {
  components: {
    ThemeSwitcher,
  },
  props: {
    disableScroll: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
    },
  },
  data: function () {
    return {
      scrollPosition: null,
      headerHeight: 0,
      isOpen: false,
      search: "",
      open: false,
      active: null,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    setHeaderHeight(height) {
      this.headerHeight = height;
    },
    result() {
      window.location.href = `/search?query=${this.search}`;
    },
    setActive(index) {
      this.active = index;
      this.open = !this.open;
    },
  },

  mounted() {
    if (!this.disableScroll) {
      var height = document.getElementById("header").clientHeight;
      this.setHeaderHeight(height);
      window.addEventListener("scroll", this.updateScroll);
    }
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
    navigation : headerNavigation {
      name
      link
      external
      expandable
    }
    social {
      icon
      link
    }
  }
  allMembership{
     edges{
      node{
        id
        title
        path
      }
    }
  }
  allProjectTag{
     edges{
      node{
        id
        title
        path
      }
    }
  }
}
</static-query>

<style scoped>
input:focus,
button:focus {
  outline: 0;
}

.inset-0 {
  z-index: 999;
}
</style>