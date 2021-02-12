<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto min-h-screen overflow-x-hidden pt-24">
      <div class="flex flex-row flex-wrap items-center mx-4 sm:mx-0">
        <div class="w-full md:w-1/6 mx-auto sm:mx-0">
          <g-image
            :src="$page.person.image"
            class="rounded-full bg-gray-200 w-32 h-32 border-4 border-gray-400 mx-auto md:mx-0"
          ></g-image>
        </div>
        <div class="w-full md:w-5/6 text-center md:text-left md:pl-8 lg:pl-0">
          <h1 class="pb-0 mb-0 mt-0 text-4xl font-medium">
            {{ $page.person.name }}
            <a
              :href="$page.person.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-black"
            >
              <font-awesome :icon="['fab', 'linkedin']" />
            </a>
          </h1>

          <p class="text-gray-700 text-xl" v-if="$page.person.bio">
            {{ $page.person.bio }}
          </p>
          <div class="author-social">
            
          </div>
                <section>
        <div class="avatars">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list m-0 py-2">
                <li
                  v-for="project in $page.person.projects"
                  :key="project.id"
                  class="author-list-item"
                >
                  <g-link :to="project.path" v-tooltip="project.title">
                    <g-image
                      :src="project.logo"
                      :alt="project.title"
                      class="w-20 h-20 rounded-full bg-gray-200 border-2 border-white"
                    />
                  </g-link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
        </div>
      </div>

      <div class="pt-8 border-b mx-4 sm:-mx-4"></div>

      <section
        class="post-content container mx-auto relative font-serif text-gray-700"
      >
        <div
          class="post-content-text text-xl"
          v-html="$page.person.content"
        ></div>
      </section>

      <div class="pt-8 border-b mx-4 sm:-mx-4"></div>

      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.person.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

   
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    person(id: $id) {
        path
        content
        name
        rank
        memberships{
          id
          title
          path
        }
        projects{
          id
          title
          path
          logo
        }
        bio
        excerpt
        linkedin
        websites
        countries
        cities
        private
        image(width:150, height:150)
        belongsTo {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Blog {
              id
              title
              excerpt
              image(width:800)
              path
              timeToRead
              humanTime : created(format:"DD MMM YYYY")
              datetime : created
              authors {
                id
                name
                image(width:64, height:64, fit:inside)
                path
              }
            },
            ... on Project {
              id
              title
              excerpt
              image(width:800)
              logo
              path
              
            }
          }
        }
      }
    }

     memberships: allMembership(filter: {title: {in: ["foundation", "tech"]}}){
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
      return pluralize("post", this.$page.person.belongsTo.totalCount);
    },

    memberships(){
      var all = []
      this.$page.memberships.edges.forEach((edgs) => all.push(edge.node.title))
      var res = []
      this.$page.person.memberships.forEach(function(membership){
        if (all.includes(membership.title)){
          res.push(membership)
        }
      });
      return res
    }
  },
  metaInfo() {
    return {
      title: this.$page.person.name,
    };
  },
};
</script>
