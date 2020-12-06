<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        v-if="$page.markdownPage.id !== 'contact'"
        :header="$page.markdownPage"
      />
      <VerticalNav
        :slides="$page.markdownPage.slides"
        v-if="$page.markdownPage.slides.length > 0"
      />
      <div v-html="$page.markdownPage.content"></div>
      <NewCard
        v-for="card in $page.markdownPage.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    markdownPage(id: $id) {
        id
        path
        content
        title
        image
        slides{
          id
          title
          content
          image
          order
        }
        excerpt
        cards{
          id
          title
          image
          button
          link
          order
          excerpt
        }
       
    }
  }

</page-query>

<script>
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import VerticalNav from "~/components/custom/Navbar/VerticalNav.vue"

export default {
  components: {
    NewCard,
    Header,
    VerticalNav,
  },
  metaInfo() {
    return {
      title: this.$page.markdownPage.title,
    };
  },
  methods: {
    markdown(content){
      marked.setOptions({
      highlight: function (code, lang, _callback) {
        if (hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code).value
        } else {
          return hljs.highlightAuto(code).value
        }
      },
    })
      return marked(content)
    }
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
