<template>
  <div
    class="flex flex-post px-0 sm:px-4 pb-8 mb-8"
    v-bind:class="{ 'no-border': !border }"
  >
    <g-link :to="path" class="post-card-image-link">
      <g-image
        :src="img(record.image)"
        :alt="record.title"
        class="post-card-image"
      ></g-image>
    </g-link>
    <div>
      <g-link :to="path">
        <h2 class="post-card-title mt-3">{{ record.title || record.name }}</h2>
        <p class="post-card-excerpt text-gray-700">{{ record.excerpt }}</p>
        <section
          class="flex flex-wrap post-tags container mx-auto relative py-1"
        >
          <g-link
            v-for="membership in record.memberships"
            :key="membership.id"
            :to="membership.path"
            class="text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2"
            >{{ membership.title }}</g-link
          >
        </section>
      </g-link>

      <div class="w-full post-card-meta pt-2">
        <div class="avatars">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list m-0">
                <li
                  v-for="author in record.authors"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path" v-tooltip="author.name">
                    <g-image
                      :src="img(author.image)"
                      :alt="author.name"
                      class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                    />
                  </g-link>
                </li>
              </ul>
            </div>

            <div class="flex flex-col text-xs leading-none uppercase">
              <p>
                <g-link :to="path">
                  <time :datetime="record.datetime">{{
                    record.humanTime
                  }}</time>
                </g-link>
              </p>
              <p>
                <g-link :to="path">
                  <time :datetime="record.datetime">{{
                    record.startDate
                  }}</time>
                </g-link>
                {{ record.status }}
              </p>
            </div>
          </div>
          <section
            class="post-tags container mx-auto relative py-3"
            v-if="displaytags()"
          >
            <g-link
              v-for="tag in record.tags"
              :key="tag.id"
              :to="tag.path"
              class="inline-block text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
              >{{ tag.title.replace("_", " ") }}</g-link
            >
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {},
    showtags: false,
    pathPrefix: "",
    border: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    path() {
      if (this.pathPrefix) return this.pathPrefix + "/" + this.record.id;
      return this.record.path;
    },

    memberships() {
      var res = [];
      var memberships = this.record.memberships;
      if (!memberships) {
        return [];
      }
      memberships.forEach(function (membership) {
        if (["foundation", "tech", "cloud"].includes(membership.title)) {
          res.push(membership);
        }
      });
      return res;
    },
  },
  methods: {
    displaytags() {
      return this.showtags;
    },
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>

<style scoped>
.post-card-excerpt {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
}

.post-card-image {
  max-width: 100%;
  /* height: auto; */
}
</style>
