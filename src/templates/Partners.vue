<template>
  <Layout>
    <TagFilterHeader
      :tags="tags"
      selected="all"
      v-if="$page.tags.edges.length > 1"
    />
    <div class="container mt-8 sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="partner in $page.entries.edges"
          :key="partner.id"
          :record="partner.node"
          pathPrefix="/partners"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($private: Int){
  entries: allProject (sortBy: "rank", order: DESC, filter: { private: { ne: $private }, tags: { id: {in: ["farming"]}}}){
    totalCount
    edges {
      node {
        id
        title
        path
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
  
  tags: allProjectTag (filter: { title: {in: ["farming"]}}) {
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
    tags() {
      var res = [{ title: "All", path: "/partners" }];
      this.$page.tags.edges.forEach((edge) =>
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
