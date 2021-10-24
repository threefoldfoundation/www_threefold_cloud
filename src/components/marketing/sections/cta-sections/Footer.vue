<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<template>
  <footer class="bg-white">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <!-- <div class="xl:grid xl:grid-cols-4 xl:gap-4">
        <div class="space-y-8 xl:col-span-1">
          <g-image
            class="h-10"
            :src="require(`!!assets-loader!@images/tf_icon_black.svg`)"
            alt="Company name"
            v-if="theme == 'light'"
          />

          <g-image
            class="h-10"
            :src="require(`!!assets-loader!@images/tf_icon_white.svg`)"
            alt="Company name"
            v-else
          />

          <p class="text-gray-500 font-bold text-base leading-6">
            {{ record.description }}
          </p>
          <div class="flex space-x-6">
            <a
              v-if="record.facebook != '#'"
              :href="record.facebook"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
 
            <a
              v-if="record.twitter != '#'"
              :href="record.twitter"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
            <a
              v-if="record.github != '#'"
              :href="record.github"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">GitHub</span>
              <svg
                class="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
        

            <a
              class="text-gray-400 hover:text-gray-500"
              href="javascript:;"
              onclick="ml_account('webforms', '3562741', 'n7q9l7', 'show')"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                class="h-5 w-5 mt-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          class="mt-12 grid md:grid-cols-4 sm:grid-cols-2 xl:mt-0 xl:col-span-3"
        >
         

          <div
            v-for="footerLink in record.items"
            :key="footerLink.title"
            class=""
          >
            <div>
              <h4
                class="text-sm leading-5 font-semibold text-gray-600 tracking-wider uppercase"
              >
                {{ footerLink.title }}
              </h4>
              <ul class="mt-4 mr-4 space-y-4 footerlink">
                <li v-for="item in footerLink.links" :key="item.name">
                  <a
                    v-if="item.link.includes('http')"
                    :href="item.link"
                    target="_blank"
                    class="text-base leading-5 text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </a>
                  <a
                    v-else
                    :href="item.link"
                    class="text-base leading-5 text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> -->
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-base leading-6 text-gray-400 xl:text-center">
          &#xA9; 2021 ThreeFold, All rights reserved.
          <a
            class="leading-6 text-gray-500 hover:text-gray-900"
            target="_blank"
            href="https://library.threefold.me/info/legal/#/legal__terms_conditions_websites"
            >Terms & Conditions |
          </a>
          <a
            class="leading-6 text-gray-500 hover:text-gray-900"
            target="_blank"
            href="https://library.threefold.me/info/legal/#/legal__privacypolicy"
            >Privacy Policy |
          </a>
          <a
            class="leading-6 text-gray-500 hover:text-gray-900"
            target="_blank"
            href="#"
            >Impressum</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["record", "theme"],
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
