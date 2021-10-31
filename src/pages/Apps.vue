<template>
  <Layout :hideHeader="true" :disableScroll="true" class="container">
    <SignUp
      v-if="$page.markdownPage.signup"
      :signup="$page.markdownPage.signup"
    />

    <!-- <SolutionsHeader
      v-if="$page.markdownPage.header"
      :header="$page.markdownPage.header"
    /> -->

    <TagFilterHeader
      :tags="appsTag"
      selected="all"
      v-if="$page.topics.edges.length > 1"
    />

    <ShowcaseProducts
      :id="$page.markdownPage.id"
      :main="$page.markdownPage.appsMain"
      :products="$page.markdownPage.apps"
      v-if="$page.markdownPage.apps && $page.markdownPage.apps.length > 0"
    />

    <CallToAction v-if="$page.markdownPage.cta" :cta="$page.markdownPage.cta" />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "applications") {
        id
        path
        metaTitle
        metaDesc
        metaImg
        header{
         title
         subtitle
         content
         btn1
         link1
         btn2
         link2
       }
        cta{
          id
          title
          content
          button
          link
        }
        appsMain{
          id
          title
          subtitle
          #image
        }
        apps{
         id
         title
         image
       }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
    }
  topics: allAppsTag{
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
import SignUp from "~/components/custom/sections/SignUp.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";
import TagFilterHeader from "~/components/custom/TagFilterHeader.vue";

export default {
  components: {
    CallToAction,
    SignUp,
    SolutionsHeader,
    ShowcaseProducts,
    TagFilterHeader,
  },
  metaInfo() {
    return {
      title: "",
      titleTemplate: this.$page.markdownPage.metaTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.markdownPage.metaTitle,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.markdownPage.metaTitle,
        },
      ],
    };
  },
  computed: {
    appsTag() {
      var res = [{ title: "All", path: "/apps" }];
      this.$page.topics.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
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
};
</script>