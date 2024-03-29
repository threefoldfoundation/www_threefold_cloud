<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <TagFilterHeader
      @resetAll="resetAll"
      :tags="tagTitles"
      :selected="title"
      v-if="tagTitles.length > 2"
    />
    <div class="container sm:px-0 mx-auto overflow-x-hidden pt-12">
      <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium capitalize">
          {{ tags.title.replace("_", " ") }}
        </h1>
        <p class="text-gray-700 text-xl">
          <span class="self-center">{{ items.length }} {{ item }}</span>
        </p>
      </div>

      <div class="pt-8 border-b"></div>

      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          :showtags="true"
          v-for="item in items"
          :key="item.id"
          :record="item"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="tags.path"
          :currentPage="tags.belongsTo.pageInfo.currentPage"
          :totalPages="tags.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="tags.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    projectTag(id: $id) {
      title
      path
      belongsTo{
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Project {
              title
              excerpt
              image(width:800)
              path
              datetime : created
            }
          }
        }
      }
    }

    newsTag(id: $id) {
      title
      path
      belongsTo{
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on News {
              title
              excerpt
              image(width:800)
              path
              timeToRead
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
    } 

    blogTag(id: $id) {
      title
      path
      belongsTo{
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Blog {
              title
              excerpt
              image(width:800)
              path
              timeToRead
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
    }

    appsTag(id: $id) {
      title
      path
      belongsTo{
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on App {
              title
              image
              path
            }
          }
        }
      }
    }

    allProjectTag(filter: { title: {in: ["blockchain", "experience", "technology", "farming", "community", "infrastructure", "impact"]}}){
      edges{
        node{
          id
          title
          path
        }
      }
    }

    allNewsTag{
     edges{
      node{
        id
        title
        path
      }
    }
    }

    allBlogTag(filter: { title: {in: ["blockchain", "experience", "technology", "farming", "community", "infrastructure", "impact"]}}){
     edges{
      node{
        id
        title
        path
      }
    }
} 
 allAppsTag{
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
import Pagination from "~/components/custom/Pagination.vue";
import TagFilterHeader from "~/components/custom/TagFilterHeader.vue";

export default {
  components: {
    Pagination,
    PostListItem,
    TagFilterHeader,
  },

  computed: {
    title() {
      return this.tags.title;
    },
    tagTitles() {
      var path = "";
      var tags = null;
      if (this.$page.projectTag) {
        path = "/partners";
        tags = this.$page.allProjectTag;
      } else if (this.$page.newsTag) {
        path = "/news";
        tags = this.$page.allNewsTag;
      } else if (this.$page.blogTag) {
        path = "/blog";
        tags = this.$page.allBlogTag;
      } else if (this.$page.appsTag) {
        path = "/apps";
        tags = this.$page.allAppsTag;
      }
      var res = [{ title: "All Tags", path: path }];
      tags.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
    },

    tags() {
      return (
        this.$page.projectTag ||
        this.$page.newsTag ||
        this.$page.blogTag ||
        this.$page.appsTag
      );
    },
    item() {
      var plural = this.tags.belongsTo.totalCount > 0;
      if (this.$page.projectTag) {
        if (plural) return "projects";
        return "project";
      }

      if (this.$page.newsTag) {
        if (plural) return "posts";
        return "post";
      }

      if (this.$page.blogTag) {
        if (plural) return "posts";
        return "post";
      }
    },
    items() {
      let cloudItems = [];
      this.tags.belongsTo.edges.map((edge) => {
        if (Array.isArray(edge.node.category)) {
          if (edge.node.category.includes("cloud")) cloudItems.push(edge.node);
        } else {
          cloudItems.push(edge.node);
        }
      });
      return cloudItems;
    },
  },

  methods: {
    resetAll() {
      this.$router.push({ path: "/news" });
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },

  metaInfo() {
    return {
      title: this.tags.title,
    };
  },
};
</script>
