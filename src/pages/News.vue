<template>
  <Layout>
    <FilterHeader />
    <div class="container sm:pxi-0 mx-auto overflow-hidden">
      <div class="flex flex-wrap with-large pt-12 mt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          :showtags="true"
          v-for="edge in news.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
    <div class="pagination flex justify-center mb-8">
      <Pagination
        :baseUrl="baseurl"
        :currentPage="$page.entries.pageInfo.currentPage"
        :totalPages="$page.entries.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="$page.entries.pageInfo.totalPages > 1"
      />
    </div>
  </Layout>
</template>

<page-query>

query{

  entries: allNews(sortBy: "created", order: DESC) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        tags{
          id
          title
          path
        }
        excerpt
        image(width:800)
        path
        humanTime : created(format:"DD MMM YYYY")
        datetime : created
      }
    }
  }
}

</page-query>

<script>
import FilterHeader from "~/components/custom/FilterHeader.vue";
import PostListItem from "~/components/custom/Cards/PostListItem.vue";
import Pagination from "~/components/custom/Pagination.vue";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    PostListItem,
    Pagination,
    FilterHeader,
  },
  computed: {
    baseurl: function () {
      return "";
    },

    news() {
      var res = {};
      var old = this.$page.entries;
      res.totalCount = old.totalCount;
      res.pageInfo = old.pageInfo;
      res.edges = [];

      for (var i = 0; i < old.edges.length; i++) {
        var node = old.edges[i].node;
        const diff = Math.abs(new Date() - new Date(node.datetime));
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        if (diffDays <= 30) {
          res.edges.push({ node: node, id: node.id });
        }
      }
      return res;
    },
  },
};
</script>
