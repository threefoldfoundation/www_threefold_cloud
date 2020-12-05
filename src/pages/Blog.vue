<template>
  <Layout>
     <div
      class="container sm:pxi-0 mx-auto"
      :style="{ 'min-height': contentHeight + 'px' }"
    >
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="post in $page.entries.edges"
          :key="post.node.id"
          :record="post.node"
        />
      </div>

       <div class="pagination flex justify-center mb-8">
      <Pagination
        baseUrl=""
        :currentPage="$page.entries.pageInfo.currentPage"
        :totalPages="$page.entries.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="$page.entries.pageInfo.totalPages > 1"
      />
    </div>

    </div>
  </Layout>
</template>
<page-query>

query{
  entries: allBlog(sortBy: "created", order: DESC) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        excerpt
        image(width:800)
        path
        humanTime : created(format:"DD MMM YYYY")
        datetime : created
        authors {
          id
          name
          image(width:64, height:64, fit:inside)
          path
        }
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
    PostListItem,
    Pagination
  },
  computed: {
    
    contentHeight() {
      if (process.isClient) {
        return window.innerHeight - 100;
      }
    },
  },
};
</script>
