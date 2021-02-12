<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        v-if="
          $page.markdownPage.id !== 'contact' &&
          $page.markdownPage.header_title &&
          $page.markdownPage.header_title != ''
        "
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
      />

      <VerticalNav
        :slides="$page.markdownPage.slides"
        v-if="$page.markdownPage.slides && $page.markdownPage.slides.length > 0"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />
      
      <g-image 
        v-if="$page.markdownPage.solution_image"
        :src="$page.markdownPage.solution_image.src"
      />
      

      <NewCard
        v-for="card in $page.markdownPage.cards"
        :key="card.id"
        :card="card"
      />

      <HowItWorks
        v-if="$page.markdownPage.howItWorks.length > 0"
        :HIWData="$page.markdownPage.howItWorks"
        :main="$page.markdownPage.howItWorksMain"
      />

      <Features
        v-if="$page.markdownPage.features.length > 0"
        :main="$page.markdownPage.featuresMain"
        :features="$page.markdownPage.features"
      />

      <Comparison
        v-if="
          $page.markdownPage.comparisonSecs &&
          $page.markdownPage.comparisonSecs.length > 0
        "
        :main="$page.markdownPage.comparisonMain"
        :sections="$page.markdownPage.comparisonSecs"
      />

      <ShowcaseProducts
        :main="$page.markdownPage.productsMain"
        :products="$page.markdownPage.productData"
        v-if="
          $page.markdownPage.productData &&
          $page.markdownPage.productData.length > 0
        "
      />

      <Roadmap
        v-if="$page.markdownPage.roadmap.length > 0"
        :roadmap="$page.markdownPage.roadmap"
      />

      <FourTiersWithToggle
        v-if="$page.markdownPage.pricingPlans.length > 0"
        :main="$page.markdownPage.pricing_plansMain"
        :pricingPlans="$page.markdownPage.pricingPlans"
      />

      <WithComparisonTable
        v-if="$page.markdownPage.plans.length > 0"
        :plans="$page.markdownPage.plans"
      />

      <logoShowcase
        v-if="$page.markdownPage.logos.length > 0"
        :logos="$page.markdownPage.logos"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel"
        v-if="$page.markdownPage.brandPanel"
      />

      <CallToAction
        v-if="$page.markdownPage.cta"
        :cta="$page.markdownPage.cta"
      />

      <SignUp
        v-if="$page.markdownPage.signup"
        :signup="$page.markdownPage.signup"
      />

      <GetInTouch
        :contacts="$page.markdownPage.contactData"
        v-if="$page.markdownPage.contactData.length > 0"
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
        solution_image
        slides{
          id
          title
          excerpt
          image
          order
        }
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
       howItWorks{
         id
         title
         content
       }
       howItWorksMain{
         id
         title
         image
       }
       productsMain{
          id
          title
          subtitle
      #    image
        }
       productData{
         id
         title
         content
         image
       }
        featuresMain{
          id
          title 
          btn 
          link
          content
        }
        features{
          id
          title 
          svg
          content
        }
        comparisonMain{
          id
          title
          description
          button
          link
        }
        comparisonSecs{
          id
          svg
          title
          content
        }
        roadmap{
          id
          title
          excerpt
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
        plans{
          id
          title
          rows {
            title
            firstCol
            secCol
            thirdCol
          }
        }
        logos{
          id
          image
        }
        cta{
          id
          title
          content
          button
          link
        }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
        brandPanel{
         id
         title
         subtitle
         excerpt(length: 2000)
         sourceUrl
         btnTxt
         image
       }
        contactData{
         id
         title
         mail
         phone
       }
    }
  }

</page-query>

<script>
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import VerticalNav from "~/components/custom/Navbar/VerticalNav.vue";
import GetInTouch from "~/components/custom/Navbar/Getintouch.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import HowItWorks from "~/components/custom/sections/HowItWorks.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";
import Features from "~/components/custom/sections/Features.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";
import Comparison from "~/components/custom/sections/Comparison.vue";
import Roadmap from "~/components/custom/sections/Roadmap.vue";
import FourTiersWithToggle from "~/components/marketing/sections/pricing/four_tiers_with_toggle.vue";
import WithComparisonTable from "~/components/marketing/sections/pricing/with_comparison_table.vue";
import BrandPanel from "~/components/marketing/sections/cta-sections/BrandPanel.vue";

export default {
  components: {
    NewCard,
    Header,
    VerticalNav,
    GetInTouch,
    SolutionsHeader,
    HowItWorks,
    ShowcaseProducts,
    Features,
    logoShowcase,
    CallToAction,
    SignUp,
    Comparison,
    Roadmap,
    FourTiersWithToggle,
    WithComparisonTable,
    BrandPanel,
  },

  metaInfo() {
    return {
      title: this.$page.markdownPage.title,
    };
  },
  mounted() {
    console.log(this.$page.markdownPage);
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
