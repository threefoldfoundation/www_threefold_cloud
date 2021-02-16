<template>
  <Layout>
    <TagFilterHeader
      :tags="memberships"
      selected="all"
      v-if="$page.memberships.edges.length > 1"
    />
    <div class="container sm:pxi-0 mx-auto mt-8 overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="person in $page.entries.edges"
          :key="person.id"
          :record="person.node"
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
  entries: allPerson (perPage: 10, page: $page, sortBy: "rank", order: DESC, filter: { memberships: { id: {in: ["foundation", "tech"]}}}) @paginate{
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        path
        content
        excerpt
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
import TagFilterHeader from "~/components/custom/TagFilterHeader.vue";
import Pagination from "~/components/custom/Pagination.vue";

export default {
  components: {
    PostListItem,
    TagFilterHeader,
    Pagination,
  },
  computed: {
    memberships() {
      var res = [{ title: "All", path: "/team" }];
      this.$page.memberships.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
    },
    baseurl() {
      return "/team/";
    },
  },
};
</script>
