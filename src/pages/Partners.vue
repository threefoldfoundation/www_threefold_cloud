<template>
  <Layout>
     <TagFilterHeader
      :tags="tags"
      selected="all"
    />
    <br/>
    <br/>
    <br/>

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
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
  entries: allProject (sortBy: "rank", order: DESC, filter: { private: { ne: $private }}){
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

export default {
  components: {
    PostListItem,
    TagFilterHeader
  },
  computed: {
    tags(){
      var res = [{"title": "All", "path": "/partners"}]
      this.$page.tags.edges.forEach((edge) => res.push({"title": edge.node.title, "path": edge.node.path}));
      return res
    },
  }
};
</script>
