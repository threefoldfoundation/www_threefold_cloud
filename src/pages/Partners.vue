<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="partner in $page.entries.edges"
          :key="partner.id"
          :record="partner.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($private: Int){
  entries: allProject (sortBy: "rank", order: DESC, filter: { private: { ne: $private }}){
    totalCount
    edges {
      node {
        title
        members {
          id
          name
          image(width:64, height:64, fit:inside)
          path
        },
        rank
        linkedin
        excerpt
        image(width:800)
        timeToRead
        logo
      }
    }
  }
}
</page-query>

<script>
import PostListItem from "~/components/customize/Cards/PostListItem.vue";

export default {
  components: {
    PostListItem,
  },
};
</script>
