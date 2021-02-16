<template>
  <section class="py-12 px-4 text-center">
    <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">
      {{ title }}
    </h2>

    <p class="max-w-xl mx-auto mb-12 text-gray-600">{{ description }}</p>
    <div class="flex max-w-lg mx-auto mb-12 justify-center border-b-2">
      <div class="w-1/3 mr-5 pb-2">
        <a
          href="#"
          @click="setSelected('', -1)"
          class="pb-2 hover:text-indigo-600 capitalize"
          :class="{ 'border-b-4 border-indigo-600': activeIndex == 0 }"
        >
          All
        </a>
      </div>

      <div
        v-for="(tag, index) in tags"
        :key="tag.node.id"
        class="w-1/3 mr-5 pb-2"
      >
        <a
          :href="`#${tag.node.title}`"
          @click.stop="setSelected(tag.node.title, index)"
          class="pb-2 hover:text-indigo-600 capitalize"
          :class="{ 'border-b-4 border-indigo-600': activeIndex == index + 1 }"
        >
          {{ tag.node.title.replace("_", " ") }}
        </a>
      </div>
    </div>
    <div class="flex flex-wrap -mx-4 transition-all ease-in-out duration-150">
      <div
        v-for="obj in filter(selected)"
        :key="obj.node.id"
        class="w-1/2 lg:w-1/4 p-4"
      >
        <g-link :to="obj.node.path" class="post-card-image-link">
          <g-image
            :src="obj.node.logo || obj.node.image"
            :alt="obj.node.name || obj.node.title"
            class="w-1/2 mx-auto mb-4 rounded-full img-thumbnail"
          ></g-image>
        </g-link>
        <h3 class="text-xl mb-1 font-semibold font-heading font-semibold">
          {{ obj.node.name }}
        </h3>
        <!-- <span>{{ edge.node.title }}</span> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    var selected = this.$route.hash.replace("#", "");
    var activeIndex = 0;

    for (var i = 0; i < this.tags.length; i++) {
      if (this.tags[i].node.title == selected) {
        activeIndex = i + 1;
      }
    }
    return {
      selected: selected,
      activeIndex: activeIndex,
    };
  },

  props: {
    title: String,
    description: String,
    objects: {},
    tags: {},
    tagsField: String,
  },
  methods: {
    setSelected: function (tag, index) {
      this.selected = tag;
      this.activeIndex = index + 1;
    },

    filter: function (tag) {
      if (tag == "") return this.objects;

      var result = [];

      for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i].node;
        for (var j = 0; j < obj[this.tagsField].length; j++) {
          var membership = obj[this.tagsField][j];
          if (membership.title == tag) {
            result.push(this.objects[i]);
            break;
          }
        }
      }
      return result;
    },
  },
};
</script>

<style>
.img-thumbnail {
  padding: 0.15rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  /* border-radius: 0.25rem; */
  max-width: 100%;
  height: auto;
}
</style>