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
  entries: allProject (perPage: 10, page: $page, sortBy: "rank", order: ASC, filter: { category: { contains: ["cloud"]}})@paginate{
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
  
      markdownPage(id: "home") {
        id
        metaImg
  }
  
  tags: allProjectTag (filter: { title: {in: ["blockchain", "experience", "technology", "farming", "community", "infrastructure", "impact"]}}) {
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
    getImg() {
      let image = "";
      if (process.isClient) {
        image = `${window.location.origin}${this.img}`;
      }
      return image;
    },
    img() {
      if (!this.$page.markdownPage.metaImg) return "";
      if (this.$page.markdownPage.metaImg.src)
        return this.$page.markdownPage.metaImg.src;
      return this.$page.markdownPage.metaImg;
    },
  },
  metaInfo() {
    return {
      title: "",
      titleTemplate: "ThreeFold P2P Cloud | Partners",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Meet the incredible organizations that make up the ThreeFold P2P Cloud ecosystem.",
        },
        {
          key: "og:title",
          property: "og:title",
          content: "ThreeFold P2P Cloud | Partners",
        },
        {
          key: "og:description",
          property: "og:description",
          content:
            "Meet the incredible organizations that make up the ThreeFold P2P Cloud ecosystem.",
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content:
            "Meet the incredible organizations that make up the ThreeFold P2P Cloud ecosystem.",
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: "ThreeFold P2P Cloud | Partners",
        },
      ],
    };
  },
};
</script>
