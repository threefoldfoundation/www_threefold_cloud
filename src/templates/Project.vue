<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 px-2 mx-auto overflow-x-hidden pt-24">
      <div class="flex flex-row flex-wrap items-center mx-4 sm:mx-0">
        <div class="w-full md:w-1/6 mx-auto sm:mx-0">
          <g-image
            :src="$page.project.logo"
            class="rounded-full bg-gray-200 w-32 h-32 border-4 border-gray-400 mx-auto md:mx-0"
          ></g-image>
        </div>
        <div class="w-full md:w-5/6 text-center md:text-left md:pl-8 lg:pl-0">
          <h1 class="pb-0 mb-0 mt-0 text-4xl font-medium">
            {{ $page.project.title }}
            <!-- <a
              :href="$page.project.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-black"
            >
              <font-awesome :icon="['fab', 'linkedin']" />
            </a> -->
          </h1>

          <p class="text-gray-700 text-xl" v-if="$page.project.bio">
            {{ $page.project.bio }}
          </p>
          <div class="avatars">
            <section>
              <div class="avatars">
                <div class="flex items-center">
                  <div class="flex justify-between items-center">
                    <ul class="list-none flex author-list m-0">
                      <li
                        v-for="member in $page.project.members"
                        :key="member.id"
                        class="author-list-item"
                      >
                        <g-link :to="member.path">
                          <g-image
                            :src="member.image"
                            :alt="member.name"
                            class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                          />
                        </g-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section class="container mx-auto py-2">
              <ul class="list-none flex author-list m-0">
                <!-- <li class="mx-2">
                <g-image
                  :src="$page.project.logo"
                  class="rounded-full bg-gray-200 w-8 h-8 border-2 border-gray-400 mx-auto md:mx-0"
                ></g-image>
                </li> -->
                <li v-if="$page.project.websites">
                  <a
                    :href="$page.project.websites"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-400 hover:text-black linkedin_size mx-1"
                  >
                    <font-awesome :icon="['fas', 'globe']" />
                  </a>
                </li>
                <li v-if="$page.project.linkedin">
                  <a
                    :href="$page.project.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-400 hover:text-black linkedin_size mx-1"
                  >
                    <font-awesome :icon="['fab', 'linkedin']" />
                  </a>
                </li>
              </ul>

              <g-link
                v-for="tag in $page.project.tags"
                :key="tag.id"
                :to="tag.path"
                class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
                >{{ tag.title }}</g-link
              >
            </section>
          </div>
        </div>
      </div>

      <div class="pt-8 border-b mx-4 sm:-mx-4"></div>

      <section class="post-content container mx-auto relative text-gray-700">
        <div
          class="post-content-text text-xl"
          v-html="$page.project.content"
        ></div>
      </section>
      <div class="pt-8 border-b mx-4 sm:-mx-4"></div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    project(id: $id) {
      id
      title
      countries
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      image(width:150, height:150)
      image_caption
      logo
      cities
      timeToRead
      path
      timeToRead
      linkedin
      content
      tags {
        id
        title
        path
      }    
      members {
        id
        name
        image(width:64, height:64, fit:inside)
        path
      }
      websites
      private
     
      rank
      excerpt
      
      belongsTo {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Person {
              id
              name
              image(width:64, height:64, fit:inside)
              path
              projects{
                  id
                  title
                  path
                  logo
                  image
                  tags {
                    id
                    title
                    path
                  }
              }
            }
          }
        }
      }
    }  

    tags: allProjectTag (filter: { title: {in: ["cloud"]}}) {
     edges{
      node{
        id
        title
        path
      }
    }
  }
}

</page-query>

<script>
import PostListItem from "~/components/custom/Cards/PostListItem.vue";
import Pagination from "~/components/custom/Pagination.vue";

export default {
  components: {
    Pagination,
    PostListItem,
  },
  computed: {
    postLabel: function () {
      var pluralize = require("pluralize");
      return pluralize("post", this.$page.project.belongsTo.totalCount);
    },
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
    };
  },
};
</script>
<style scoped>
.post-content-text {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

.linkedin_size {
  font-size: 2rem !important;
}
</style>