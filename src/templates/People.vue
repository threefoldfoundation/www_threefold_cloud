<template>
  <Layout>
    <div
      class="container sm:pxi-0 mx-auto overflow-x-hidden"
      :style="{ 'min-height': contentHeight + 'px' }"
    >
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.entries.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($private: Int){
  entries: allPerson (sortBy: "rank", order: DESC, filter: { private: { ne: $private }}){
    totalCount
    edges {
      node {
        path
        content 
        name
        rank
        bio
        linkedin
        websites
        countries
        cities
        image(width:800)
        private
      }
    }
  }

  memberships: allMembership{
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
import Pagination from "~/components/Pagination.vue";
import PostListItem from "~/components/PostListItem.vue";

export default {
  metaInfo: {
    title: "People",
  },
  components: {
    PostListItem,
    Pagination,
  },
  computed: {
    baseurl: function () {
      return "/people/";
    },
    contentHeight() {
      if (process.isClient) {
        return window.innerHeight - 100;
      }
    },
  },
};
</script>
