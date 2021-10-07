<template>
  <div class="lg:py-20 py-10 sm:pt-16">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:max-w-xl mx-auto text-center">
        <h2
          class="
            text-5xl
            uppercase
            mb-6
            leading-none
            font-black font-heading
            mx-auto
          "
        >
          {{ info.title }}
        </h2>
        <div
          class="py-10 lg:text-2xl text-xl leading-normal text-gray-900 sm:mt-4"
          v-html="info.content"
        ></div>
      </div>
    </div>
    <div class="mt-10 pb-12 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2"></div>
        <div class="relative mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-8xl mx-auto">
            <dl class="rounded-lg bg-white sm:grid sm:grid-cols-4">
              <div
                class="
                  flex flex-col
                  border-b border-gray-400
                  p-6
                  text-center
                  sm:border-0 sm:border-r
                "
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-2xl
                    leading-6
                    font-medium
                    text-gray-900
                    uppercase
                  "
                  id="item-1"
                >
                  Nodes
                </dt>
                <dd
                  class="
                    order-1
                    text-6xl
                    leading-none
                    font-extrabold
                    text-black
                    mb-4
                  "
                  aria-describedby="item-1"
                >
                  {{ stats[1] }}
                </dd>
              </div>
              <div
                class="
                  flex flex-col
                  border-t border-b border-gray-400
                  p-6
                  text-center
                  sm:border-0 sm:border-l sm:border-r
                "
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-2xl
                    leading-6
                    font-medium
                    text-gray-900
                    uppercase
                  "
                >
                  Capacity
                </dt>
                <dd
                  class="
                    order-1
                    text-6xl
                    leading-none
                    font-extrabold
                    text-black
                    mb-4
                  "
                >
                  {{ stats[0] }}PB
                </dd>
              </div>
              <div
                class="
                  flex flex-col
                  border-t border-gray-400
                  p-6
                  text-center
                  sm:border-0 sm:border-l
                "
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-2xl
                    leading-6
                    font-medium
                    text-gray-900
                    uppercase
                  "
                >
                  Cores
                </dt>
                <dd
                  class="
                    order-1
                    text-6xl
                    leading-none
                    font-extrabold
                    text-black
                    mb-4
                  "
                >
                  {{ stats[2] }}
                </dd>
              </div>
              <div
                class="
                  flex flex-col
                  border-t border-gray-400
                  p-6
                  text-center
                  sm:border-0 sm:border-l
                "
              >
                <dt
                  class="
                    order-2
                    mt-2
                    text-2xl
                    leading-6
                    font-medium
                    text-gray-900
                    uppercase
                  "
                >
                  Countries
                </dt>
                <dd
                  class="
                    order-1
                    text-6xl
                    leading-none
                    font-extrabold
                    text-black
                    mb-4
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
            bg-green-300
            lg:text-2xl text-lg
            font-extrabold
            px-12
            hover:bg-green-200
            rounded-lg
            py-4
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
  /* background-color: #70dfc9; */
  font-family: 'Orbitron', sans-serif !important;
}

dd {
  font-family: 'Orbitron', sans-serif !important;
}
</style>