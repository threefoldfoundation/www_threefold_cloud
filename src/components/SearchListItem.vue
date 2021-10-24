<template>
  <div
    class="flex search-post px-0 sm:px-4 pb-8 mb-8"
    v-bind:class="{ 'no-border': !border }"
  >
    <g-link :to="record.path" class="post-card-image-link">
      <g-image
        :src="record.image"
        :alt="record.title"
        class="post-card-image"
      ></g-image>
    </g-link>
    <div class="p-5">
      <g-link :to="record.path">
        <h2 class="post-card-title mt-3">{{ record.title || record.name }}</h2>
        <p class="post-card-excerpt">{{ record.excerpt }}</p>
        <section class="post-tags container mx-auto relative py-1">
          <g-link
            v-for="membership in record.memberships"
            :key="membership.id"
            :to="membership.path"
            class="text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
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
                  v-for="author in record.author"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path" v-tooltip="author.name">
                    <g-image
                      :src="author.image"
                      :alt="author.name"
                      class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                    />
                  </g-link>
                </li>
              </ul>
            </div>

            <div class="flex flex-col text-xs leading-none uppercase">
              <p>
                <g-link :to="record.path">
                  <time :datetime="record.datetime">{{
                    record.humanTime
                  }}</time>
                </g-link>
              </p>
              <p>
                <g-link :to="record.path">
                  <time :datetime="record.datetime">{{
                    record.startDate
                  }}</time>
                </g-link>
                {{ record.status }}
              </p>
            </div>
          </div>
          <section class="post-tags container mx-auto relative py-3">
            <g-link
              v-for="tag in record.tags"
              :key="tag.id"
              :to="tag.path"
              class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
              >{{ tag.title }}</g-link
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
    border: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.post-card-excerpt {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
}

.flex-post {
  flex-direction: row;
  
}
.search-post{
  border-bottom-width: 1px;
  border-bottom-color: #e2e8f0;
  
  width: 100%;
}

.post-card-image {
  max-width: 400px;
  height: auto;
}
</style>