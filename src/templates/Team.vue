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
    </div>
  </Layout>
</template>

<page-query>
query ($private: Int){
  entries: allPerson (sortBy: "rank", order: DESC, filter: { private: { ne: $private }, memberships: { id: {in: ["tech"]}}}){
    totalCount
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

   memberships: allMembership(filter: {title: {in: ["tech"]}}){
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
  metaInfo() {
    return {
      title: this.pageName,
    };
  },
  computed: {
    memberships() {
      var res = [{ title: "All", path: "/team" }];
      this.$page.memberships.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
    },
    pageName() {
      let path = this.$route.path.substring(1);
      let name = path[0].toUpperCase() + path.slice(1);
      return name;
    },
  },
};
</script>
