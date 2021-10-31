<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        :id="$page.markdownPage.id"
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$url($page.markdownPage.link)"
        :text1="$page.markdownPage.header_link1_txt"
        :link1="$page.markdownPage.header_link1"
        :text2="$page.markdownPage.header_link2_txt"
        :link2="$page.markdownPage.header_link2"
      />

      <Blogs
        v-if="$page.markdownPage.blogs"
        :id="$page.markdownPage.id"
        :blogs="$page.markdownPage.blogs"
      />
      <!-- <CallToAction
        v-if="$page.markdownPage.cta"
        :id="$page.markdownPage.id"
        :cta="$page.markdownPage.cta"
      /> -->
    </div>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <LogoShowcase
        v-if="$page.markdownPage.logos.length > 0"
        :id="$page.markdownPage.id"
        :logos="$page.markdownPage.logos"
      />
    </div>
    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <BrandPanel
        class="my-20"
        :brand="$page.markdownPage.brandPanel"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel"
      />

      <Centered2x2Grid
        v-if="$page.markdownPage.features.length > 0"
        :id="$page.markdownPage.id"
        :features="$page.markdownPage.features"
      />

      <SimpleColumns
        v-if="$page.markdownPage.workloads.length > 0"
        :id="$page.markdownPage.id"
        :main="$page.markdownPage.workloadsMain"
        :sections="$page.markdownPage.workloads"
      />

      <Stats
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.stats"
        :info="$page.markdownPage.stats"
      />

      <CallToAction
        v-if="$page.markdownPage.cta2"
        :id="$page.markdownPage.id"
        :cta="$page.markdownPage.cta2"
        :textOnly="true"
      />

      <BrandPanel
        class="my-20"
        :brand="$page.markdownPage.brandPanel2"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel2"
        :lastBrand="true"
      />

      <!-- <SignUp
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


      <InTheNews
      v-if="$page.markdownPage.inTheNews"
      :news="$page.markdownPage.inTheNews"
    /> -->
    </div>
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
      #  solution_image
      #  solution_image2 
        cta{
          id
          image
        }

        blogs{
          id
          image
          title
          content
        }
        brandPanel{
         id
         title
         content
         image
       }
       features {
         id
         title
         image
         content
       }
       workloadsMain {
         id
         title
         button
         link
       }
       workloads{
         id
         title
         image
         content
       }
       stats{
         id
         title
         content
         button
         link
       }
       cta2 {
         id
         title
         subtitle
         content
         button
         link
       }
       brandPanel2 {
         id
         title
         content
         image
         button
         link
         button2
         link2
       }
       logos {
         id
         image
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
import LogoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import InTheNews from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";
import Blogs from "~/components/marketing/sections/blog-sections/3_column_cards.vue";
import BrandPanel from "~/components/marketing/sections/cta-sections/BrandPanel.vue";
import Centered2x2Grid from "~/components/marketing/sections/feature-sections/Centered2x2Grid.vue";
import SimpleColumns from "~/components/marketing/sections/feature-sections/SimpleColumns.vue";
import Stats from "~/components/marketing/sections/stats-sections/SimpleInCard.vue";
export default {
  components: {
    Header,
    SolutionsHeader,
    NewCard,
    NewCardNewCard2button,
    NewCardLeft,
    CallToAction,
    LogoShowcase,
    FourTiersWithToggle,
    InTheNews,
    SignUp,
    Blogs,
    BrandPanel,
    Centered2x2Grid,
    SimpleColumns,
    Stats,
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