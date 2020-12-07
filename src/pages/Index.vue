<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
      />
      <div v-html="$page.markdownPage.content"></div>
    <NewCard v-for="card in $page.markdownPage.cards" :key="card.id" :card = "card"/>
    </div>
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        content
        header_title
        header_image
        header_excerpt
        header_altImg
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

export default {
  components: {
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
