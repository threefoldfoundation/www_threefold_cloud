<template>
  <Layout>
    <TagFilterHeader
      :tags="tags"
      :selected="selected"
      v-if="$page.tags.edges.length > 1"
    />

    <div class="container mt-8 sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          :showtags="true"
          v-for="partner in $page.entries.edges"
          :key="partner.id"
          :record="partner.node"
          pathPrefix="/partners"
        />
      </div>
      <div class="text-center" v-if="$page.entries.edges.length == 0">
        <h2 class="inlibe-flex mx-auto text-gray-700 w-3/4">No results</h2>
      </div>
    </div>

    <div class="pagination flex justify-center mb-8">
      <Pagination
        v-if="
          $page.entries.pageInfo.totalPages > 1 &&
          $page.entries.edges.length > 0
        "
        :baseUrl="baseurl"
        :currentPage="$page.entries.pageInfo.currentPage"
        :totalPages="$page.entries.pageInfo.totalPages"
        :maxVisibleButtons="5"
      />
    </div>
  </Layout>
</template>

<page-query>
query($page: Int){
  entries: allProject (perPage: 10, page: $page, sortBy: "rank", order: DESC, filter: { tags: { id: {in: ["farming", "cloud", "grid", "digitaltwin"]}}})@paginate{
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        tags{
          id
          title
          path
        }
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
  
  tags: allProjectTag{
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
import Pagination from "~/components/custom/Pagination.vue";

export default {
  components: {
    PostListItem,
    TagFilterHeader,
    Pagination,
  },
  data() {
    return {
      selected: "All",
    };
  },
  methods: {
    resetAll() {
      this.selected = "All";
    },
  },
  computed: {
    tags() {
      var res = [{ title: "All", path: "/partners" }];
      this.$page.tags.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
    },
    baseurl() {
      return "/partners/";
    },
  },
};
</script>
