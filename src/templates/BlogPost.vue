<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-20">
      <div class="pt-8">
        <section class="post-header container mx-auto px-0 mb-4 border-b">
          <h1 class="text-5xl font-medium leading-none mt-0">
            {{ $page.blog.title }}
          </h1>
          <div
            class="text-2xl pt-4 pb-10 text-gray-700"
            v-html="$page.blog.excerpt"
          ></div>
        </section>
        <section class="post-author-list mb-10 mx-0">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list m-0">
                <li
                  v-for="author in $page.blog.authors"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path" v-tooltip="author.name">
                    <g-image
                      :src="author.image"
                      :alt="author.name"
                      class="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 border-2 border-white"
                    />
                  </g-link>
                </li>
              </ul>
            </div>

            <div class="pl-3 flex flex-col text-xs leading-none uppercase">
              <p>
                <span
                  v-for="(author, index) in $page.blog.authors"
                  :key="author.id"
                >
                  <g-link
                    :to="author.path"
                    v-tooltip="author.name"
                    class="hover:underline"
                    >{{ author.name }}</g-link
                  >
                  <span v-if="index < $page.blog.authors.length - 1">,</span>
                </span>
              </p>
              <p class="text-gray-700">
                <g-link :to="$page.blog.path">
                  <time :datetime="$page.blog.datetime">{{
                    $page.blog.humanTime
                  }}</time>
                </g-link>
                <!-- &nbsp;&middot;&nbsp; {{ $page.blog.timeToRead }} min read -->
                <!-- &nbsp;&middot;&nbsp; -->
                <g-link :to="$page.blog.path">
                  <time :datetime="$page.blog.datetime">{{
                    $page.blog.startDate
                  }}</time>
                </g-link>
              </p>
            </div>
          </div>
        </section>
      </div>
      <section class="post-image mx-auto w-full">
        <g-image :src="$page.blog.image"></g-image>
      </section>

      <div class="py-12">
        <section
          class="post-content container mx-auto relative font-serif text-gray-700"
        >
          <div
            class="post-content-text text-xl"
            v-html="$page.blog.content"
          ></div>
        </section>

        <section class="post-tags container mx-auto relative py-10">
          <g-link
            v-for="tag in $page.blog.tags"
            :key="tag.id"
            :to="tag.path"
            class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
            >{{ tag.title }}</g-link
          >
        </section>
      </div>
    </div>

    <section
      class="post-related text-gray-700 pt-10 border-b border-b-gray-900"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
          <PostListItem
            v-if="$page.previous"
            :record="$page.previous"
            :border="false"
          ></PostListItem>
          <PostListItem
            v-if="$page.next"
            :record="$page.next"
            :border="false"
          ></PostListItem>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    blog(id: $id) {
      title
      path
      image(width:1600, height:800)
      image_caption
      content
      excerpt
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      timeToRead
      tags {
        id
        title
        path
      }
      authors {
        id
        name
        image
        path
      }
    }

    previous: blog(id: $previousElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      authors {
        id
        name
        image(width:64, height:64, fit:inside)
        path
      }
    }

    next: blog(id: $nextElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      authors {
        id
        name
        image(width:64, height:64, fit:inside)
        path
      }
    }


    
  }
</page-query>

<script>
import PostListItem from "~/components/custom/Cards/PostListItem.vue";


export default {
  components: {
    PostListItem,
  },
  metaInfo() {
    return {
      title: this.$page.blog.title,
    };
  },

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.post-card-excerpt,
.post-content-text {
  font-family: "Roboto", sans-serif !important;
  line-height: 1.2;
}
</style>