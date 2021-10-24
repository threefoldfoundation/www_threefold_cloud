<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <Header
      :title="$page.markdownPage.header_title"
      :image="$page.markdownPage.header_image"
      :altImg="$page.markdownPage.header_altImg"
      :excerpt="$page.markdownPage.header_excerpt"
      :button="$page.markdownPage.button"
      :link="$url($page.markdownPage.link)"
    />

    <SignUp
      v-if="$page.markdownPage.signup"
      :signup="$page.markdownPage.signup"
    />

    <g-image
      class="m-auto w-2/4 lg:mt-20"
      v-if="$page.markdownPage.solution_image2"
      :src="$page.markdownPage.solution_image2.src"
    />

    <SolutionsHeader
      v-if="$page.markdownPage.header"
      :header="$page.markdownPage.header"
    />

    <NewCardNewCard2button
      v-for="card in $page.markdownPage.cards"
      :key="card.id"
      :card="card"
    />

    <NewCardLeft
      v-for="cardLeft in $page.markdownPage.cardLefts"
      :key="cardLeft.id"
      :cardLeft="cardLeft"
    />

    <g-image
      v-if="$page.markdownPage.solution_image"
      :src="$page.markdownPage.solution_image.src"
    />

    <CallToAction v-if="$page.markdownPage.cta" :cta="$page.markdownPage.cta" />

    <NewCard
      v-for="card in $page.markdownPage.cards2"
      :key="card.id"
      :card="card"
    />

    <NewCardLeft
      v-for="cardLeft in $page.markdownPage.cardLefts2"
      :key="cardLeft.id"
      :cardLeft="cardLeft"
    />

    <FourTiersWithToggle
      v-if="$page.markdownPage.pricingPlans.length > 0"
      :main="$page.markdownPage.pricing_plansMain"
      :pricingPlans="$page.markdownPage.pricingPlans"
    />

    <!-- <logoShowcase
      v-if="$page.markdownPage.logos.length > 0"
      :logos="$page.markdownPage.logos"
    />

    <!-- <InTheNews
      v-if="$page.markdownPage.inTheNews"
      :news="$page.markdownPage.inTheNews"
    /> -->
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        metaTitle
        metaDesc
        metaImg
        header_title
        header_image
        header_excerpt
        header_altImg
        header_link1_txt
        header_link1
        header_link2_txt
        header_link2
        button
        link
        solution_image
        solution_image2
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
          button2
          link2
          order
          content
        }
        cards2{
          id
          title
          image
          button
          link
          order
          content
        }
        cardLefts{
          id
          title
          image
          button
          link
          order
          content
        }
        cardLefts2{
          id
          title
          image
          button
          link
          order
          content
        }
        pricing_plansMain{
          id
          title
          button1
          button2
          excerpt
        }
        pricingPlans{
          id
          title
          excerpt
          price
          duration
          button
          link
          includeTitle
          options
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
import NewCardNewCard2button from "~/components/marketing/sections/cta-sections/NewCard2button.vue";
import NewCardLeft from "~/components/marketing/sections/cta-sections/NewCardLeft.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import FourTiersWithToggle from "~/components/marketing/sections/pricing/four_tiers_with_toggle.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import InTheNews from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";

export default {
  components: {
    Header,
    SolutionsHeader,
    NewCard,
    NewCardNewCard2button,
    NewCardLeft,
    CallToAction,
    logoShowcase,
    FourTiersWithToggle,
    InTheNews,
    SignUp,
  },
 computed: {
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
};
</script>