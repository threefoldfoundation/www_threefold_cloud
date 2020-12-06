<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden text-center py-5">
      <Header :header="$page.markdownPage" />
      <VerticalNav :slides="$page.markdownPage.slides" v-if="$page.markdownPage.slides.length > 0" />
    <vue-markdown :key="$page.markdownPage.id">
    {{ $page.markdownPage.content }}
    </vue-markdown>
    <NewCard v-for="card in $page.markdownPage.cards" :key="card.id" :card = "card"/>
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
import VueMarkdown from 'vue-markdown'
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import VerticalNav from "~/components/custom/Navbar/VerticalNav.vue"


export default {
  components: {
    VueMarkdown,
    NewCard,
    Header,
    VerticalNav
  },
  metaInfo() {
    return {
      title: this.$page.markdownPage.title,
    };
  },
};
</script>
<style scoped>
/* h2 {
  padding-bottom: 8rem;
} */
</style> >
