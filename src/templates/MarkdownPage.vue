<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden text-center py-5">
      <Header :header=" $page.markdownPage.header" />
    <vue-markdown>
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
        header{
          title
          image
          altImg
          excerpt
        }
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

export default {
  components: {
    VueMarkdown,
    NewCard,
    Header
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
