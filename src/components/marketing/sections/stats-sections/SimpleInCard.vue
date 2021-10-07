<template>
  <div class="py-12 sm:pt-16">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="
            text-3xl
            leading-9
            font-extrabold
            text-gray-900
            sm:text-4xl
            sm:leading-10
          "
        >
          {{ info.title }}
        </h2>
        <div
          class="mt-3 text-xl leading-7 text-gray-900 sm:mt-4"
          v-html="info.content"
        ></div>
      </div>
    </div>
    <div class="mt-10 pb-12 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2"></div>
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white sm:grid sm:grid-cols-4">
              <div
                class="
                  flex flex-col
                  border-b border-gray-200
                  p-6
                  text-center
                  sm:border-0 sm:border-r
                "
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-lg
                    leading-6
                    font-medium
                    text-gray-900
                  "
                  id="item-1"
                >
                  Nodes
                </dt>
                <dd
                  class="
                    order-1
                    text-5xl
                    leading-none
                    font-extrabold
                    text-black
                  "
                  aria-describedby="item-1"
                >
                  {{ stats[1] }}
                </dd>
              </div>
              <div
                class="
                  flex flex-col
                  border-t border-b border-gray-200
                  p-6
                  text-center
                  sm:border-0 sm:border-l sm:border-r
                "
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-lg
                    leading-6
                    font-medium
                    text-gray-900
                  "
                >
                  Capacity
                </dt>
                <dd
                  class="
                    order-1
                    text-5xl
                    leading-none
                    font-extrabold
                    text-black
                  "
                >
                  {{ stats[0] }}PB
                </dd>
              </div>
              <div
                class="
                  flex flex-col
                  border-t border-gray-200
                  p-6
                  text-center
                  sm:border-0 sm:border-l
                "
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-lg
                    leading-6
                    font-medium
                    text-gray-900
                  "
                >
                  Cores
                </dt>
                <dd
                  class="
                    order-1
                    text-5xl
                    leading-none
                    font-extrabold
                    text-black
                  "
                >
                  {{ stats[2] }}
                </dd>
              </div>
              <div
                class="
                  flex flex-col
                  border-t border-gray-200
                  p-6
                  text-center
                  sm:border-0 sm:border-l
                "
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-lg
                    leading-6
                    font-medium
                    text-gray-900
                  "
                >
                  Countries
                </dt>
                <dd
                  class="
                    order-1
                    text-5xl
                    leading-none
                    font-extrabold
                    text-black
                  "
                >
                  {{ stats[3] }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="block text-center mt-5">
      <a
        :href="info.link"
        class="
          green
          text-md
          font-extrabold
          text-gray-900
          px-12
          py-4
          rounded-lg
          mb-4
          shadow
        "
        >{{ info.button }}</a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id", "info"],
  data() {
    return {
      stats: [],
    };
  },
  async mounted() {
    try {
      // const getFarms = await axios.get(
      //   "https://explorer.threefold.io/api/farms?network=all"
      // );
      const results = await axios.get(
        "https://explorer.threefold.io/api/stats"
      );
      // let farms = getFarms.data.length;
      let nodes = results.data.onlinenodes;
      let hru = parseInt(results.data.hru);
      let sru = parseInt(results.data.sru) / 1000; // To TB
      let capacity = (hru + sru)
        .toFixed()
        .slice(0, 4)
        .toString()
        .replace(/\B(?=(\d{2})+(?!\d))/g, ",");
      let cores = results.data.cru
        .toFixed()
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let countries = results.data.countries;
      this.stats.push(capacity, nodes, cores, countries);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.green {
  background-color: #70dfc9;
}
</style>