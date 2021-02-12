<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <Header
      :title="$page.markdownPage.header_title"
      :image="$page.markdownPage.header_image"
      :altImg="$page.markdownPage.header_altImg"
      :excerpt="$page.markdownPage.header_excerpt"
      :button="$page.markdownPage.button"
      :link="$page.markdownPage.link"
    />

    <SolutionsHeader
      v-if="$page.markdownPage.header"
      :header="$page.markdownPage.header"
    />

    <NewCard
      v-for="card in $page.markdownPage.cards"
      :key="card.id"
      :card="card"
    />

    <CallToAction v-if="$page.markdownPage.cta" :cta="$page.markdownPage.cta" />

    <logoShowcase
      v-if="$page.markdownPage.logos.length > 0"
      :logos="$page.markdownPage.logos"
    />

    <InTheNews
      v-if="$page.markdownPage.inTheNews"
      :news="$page.markdownPage.inTheNews"
    />

    <SignUp
      v-if="$page.markdownPage.signup"
      :signup="$page.markdownPage.signup"
    />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        header_title
        header_image
        header_excerpt
        header_altImg
        button
        link
        header{
         title
         subtitle
         content
         btn1
         link1
         btn2
         link2
        }
        cards{
          id
          title
          image
          button
          link
          order
          content
        }
        cta{
          id
          title
          content
          button
          link
        }
        logos{
          id
          image
          url
        }
        inTheNews {
          id
          excerpt
          partners {
            path
            logo
          }
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
  }

</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import InTheNews from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";

export default {
  components: {
    Header,
    SolutionsHeader,
    NewCard,
    CallToAction,
    logoShowcase,
    InTheNews,
    SignUp,
  },
  metaInfo() {
    return {
      title: this.$page.markdownPage.title,
    };
  },
};
</script>