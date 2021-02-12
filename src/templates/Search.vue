<template>
  <Layout>
    <div
      class="container sm:pxi-0 mx-auto"
      :style="{ 'min-height': contentHeight + 'px' }"
    >
      <img
        v-if="loading"
        class="m-auto"
        src="/img/loader.gif"
        alt=""
      />
      <div
        v-if="searchResults.length > 0"
        class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4"
      >
        <SearchListItem
          v-for="edge in searchResults"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
      <div v-else class="flex flex-col with-large my-auto text-center py-20">
        <h1 class="">No results</h1>
        <p>OOPS! Something went wrong here</p>
      </div>
    </div>
  </Layout>
</template>
<page-query>

query ($private: Int){
  projects: allProject (filter: { private: { ne: $private }, tags: { id: {in: ["farming"]}}}){   
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
      }
        rank
        linkedin
        startDate : startdate(format:"MM YYYY")
        humanTime : created(format:"DD MMMM YYYY")
        datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        status
        excerpt
        image(width:800)
        path
        timeToRead
        authors {
          id
          
          image(width:64, height:64, fit:inside)
          path
        }
      }
    }
  }

  people: allPerson(filter: { private: { ne: $private }, memberships: { id: {in: ["foundation", "tech"]}}}) {   
     edges {
      node {
        id
        path
        excerpt
        content
        name
        rank
         memberships{
          id
          title
          path
        }
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

  blogs: allBlog {
    edges {
      node {
        id
        title
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

  markdowns: allMarkdownPage{
    edges{
      node{
        __typename
        header_title
        header_excerpt
        path
      #  title
        excerpt
      }      
    }
  }
}

</page-query>

<script>
import SearchListItem from "~/components/custom/Cards/SearchListItem.vue";

export default {
  metaInfo: {
    title: "Search",
  },
  data: () => ({
    q: "",
    objects: {},
    loading: true,
  }),
  computed: {
    searchResults() {
      const searchTerm = this.q;
      if (!searchTerm || searchTerm.length < 3) return [];
      var searchRes = this.$search.search({ query: searchTerm, limit: 100 });
      var result = [];
      for (var i = 0; i < searchRes.length; i++) {
        var item = searchRes[i];
        result.push({ node: this.objects[item.path] });
      }
      return result;
    },
    contentHeight() {
      if (process.isClient) {
        return window.innerHeight - 128;
      }
    },
  },
  mounted() {
    this.q = new URL(location.href).searchParams.get("query");

    for (var i = 0; i < this.$page.projects.edges.length; i++) {
      var item = this.$page.projects.edges[i];
      this.objects[item.node.path] = item.node;
    }

    for (var i = 0; i < this.$page.people.edges.length; i++) {
      var item = this.$page.people.edges[i];
      this.objects[item.node.path] = item.node;
    }

    for (var i = 0; i < this.$page.blogs.edges.length; i++) {
      var item = this.$page.blogs.edges[i];
      this.objects[item.node.path] = item.node;
    }

    for (var i = 0; i < this.$page.markdowns.edges.length; i++) {
      var item = this.$page.markdowns.edges[i];
      this.objects[item.node.path] = item.node;
    }

    this.loading = false;
  },
  components: {
    SearchListItem,
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
}
</style>
