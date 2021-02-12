<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <TagFilterHeader :tags="memberships" :selected="$page.membership.title" v-if="$page.allMembership.edges.length > 1"/>
    <div class="container sm:pxi-0 mx-auto mt-8 overflow-x-hidden">
      <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium capitalize">
          {{ $page.membership.title }}
        </h1>
        <p class="text-gray-700 text-xl">
          <span class="self-center"
            >{{ $page.membership.belongsTo.totalCount }} People</span
          >
        </p>
      </div>

      <div class="pt-8 border-b"></div>

      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.membership.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    membership(id: $id) {
      title
      path
      belongsTo {
        totalCount
        edges {
          node {
            ... on Person {
               path
              content
              name
              rank
              memberships{
                id
                title
                path
              }
              bio
              excerpt
              linkedin
              websites
              countries
              cities
              private
              image
            }
          }
        }
      }
    }  

    allMembership(filter: {title: {in: ["foundation", "tech"]}}){
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
import TagFilterHeader from "~/components/custom/TagFilterHeader.vue";

export default {
  components: {
    PostListItem,
    TagFilterHeader,
  },

  computed: {
    memberships() {
      var res = [{ title: "All", path: "/team" }];
      this.$page.allMembership.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
    },
  },

  metaInfo() {
    return {
      title: this.$page.membership.title,
    };
  },
};
</script>
