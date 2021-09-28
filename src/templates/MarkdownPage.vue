<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        v-if="
          $page.markdownPage.id !== 'contact' &&
          $page.markdownPage.header_title &&
          $page.markdownPage.header_title != ''
        "
        :id="$page.markdownPage.id"
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$page.markdownPage.link"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel"
      />

      <CallToAction
        v-if="
          $page.markdownPage.cta &&
          $page.markdownPage.id !== 'network' &&
          $page.markdownPage.id !== 'storage'
        "
        :id="$page.markdownPage.id"
        :cta="$page.markdownPage.cta"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel2"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel2"
        :lastBrand="true"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel3"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel3"
        :textFirst="true"
      />

      <CallToAction
        v-if="$page.markdownPage.cta2"
        :id="$page.markdownPage.id"
        :cta="$page.markdownPage.cta2"
        :lastCta="true"
      />

      <CallToAction
        v-if="$page.markdownPage.cta3"
        :id="$page.markdownPage.id"
        :cta="$page.markdownPage.cta3"
        :textOnly="true"
      />

      <CallToAction
        v-if="
          $page.markdownPage.cta &&
          $page.markdownPage.id == 'network' &&
          $page.markdownPage.id !== 'storage'
        "
        :id="$page.markdownPage.id"
        :cta="$page.markdownPage.cta"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel4"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel4"
        :textFirst="true"
      />

      <CallToAction
        v-if="$page.markdownPage.cta && $page.markdownPage.id == 'storage'"
        :id="$page.markdownPage.id"
        :cta="$page.markdownPage.cta"
        :textOnly="true"
      />
      <Stats
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.stats"
        :info="$page.markdownPage.stats"
      />
    </div>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <SimpleColumns
        v-if="$page.markdownPage.workloads.length > 0"
        :id="$page.markdownPage.id"
        :main="$page.markdownPage.workloadsMain"
        :sections="$page.markdownPage.workloads"
      />
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    markdownPage(id: $id) {
        id
        path
        excerpt
        header_excerpt
        header_altImg
        header_title
        header_image
      #  solution_image
        button
        link
        cta{
          id
          title
          image
          content
          button
          link
        }
        cta3{
          id
          title
          image
          content
          button
          link
        }
        cta2{
          id
          title
          image
          content
          button
          link
        }
    brandPanel{
         id
         title
         content
         image
         button
         link
       }

    brandPanel2{
         id
         title
         content
         image
         button
         link
       }
     brandPanel3{
         id
         title
         content
         image
         button
         link
       }
    brandPanel4{
         id
         title
         content
         image
         button
         link
       }
      stats{
         id
         title
         content
         button
         link
       }
      workloadsMain {
         id
         title
         content
         button
         link
       }
       workloads{
         id
         title
         image
         content
       }
    }
  }

</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import BrandPanel from "~/components/marketing/sections/cta-sections/BrandPanel.vue";
import Stats from "~/components/marketing/sections/stats-sections/SimpleInCard.vue";
import SimpleColumns from "~/components/marketing/sections/feature-sections/SimpleColumns.vue";

export default {
  components: {
    Header,
    CallToAction,
    BrandPanel,
    Stats,
    SimpleColumns,
  },

  metaInfo() {
    return {
      title: this.pageName,
    };
  },
  computed: {
    pageName() {
      let path = this.$route.path.replace(/^\/|\/$/g, "");
      let name = path[0].toUpperCase() + path.slice(1);
      return name;
    },
  },
};
</script>
<style scoped>
/**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */

.gridsome-highlight {
  background-color: #fdf6e3;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}
.gridsome-highlight-code-line {
  background-color: #feb;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #f99;
}

/**
 * Remove the default PrismJS theme background-color, border-radius, margin,
 * padding and overflow.
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .gatsby-highlight.
 * 3. Adjust the position of the line numbers
 */
.gridsome-highlight pre[class*="language-"] {
  background-color: transparent;
  margin: 0;
  padding: 0;
  overflow: initial;
  float: left; /* 1 */
  min-width: 100%; /* 2 */
}

/* Adjust the position of the line numbers */
.gridsome-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}
</style> >
