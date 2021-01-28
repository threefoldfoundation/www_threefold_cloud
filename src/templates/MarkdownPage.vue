<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      
      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />

      <g-image
        v-if="$page.markdownPage.solution_image2"
        :src="$page.markdownPage.solution_image2.src"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.headerSolution4"
        :header="$page.markdownPage.headerSolution4"
      />

      <g-image
        v-if="$page.markdownPage.solution_image3"
        :src="$page.markdownPage.solution_image3.src"
      />

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
        :button="$page.markdownPage.button"
        :link="$page.markdownPage.link"
      />

      <Features
        v-if="$page.markdownPage.features3.length > 0"
        :main="$page.markdownPage.featuresMain3"
        :features="$page.markdownPage.features3"
      />

      <HowItWorks
        v-if="$page.markdownPage.howItWorks.length > 0"
        :HIWData="$page.markdownPage.howItWorks"
        :main="$page.markdownPage.howItWorksMain"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.headerSolution"
        :header="$page.markdownPage.headerSolution"
      />

      <GetInTouch
        :contacts="$page.markdownPage.contactData"
        v-if="$page.markdownPage.contactData.length > 0"
      />

      <ShowcaseProducts
        :products="$page.markdownPage.productData"
        v-if="
          $page.markdownPage.productData &&
          $page.markdownPage.productData.length > 0
        "
      />

      <g-image
        v-if="$page.markdownPage.solution_image"
        :src="$page.markdownPage.solution_image.src"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.headerSolution2"
        :header="$page.markdownPage.headerSolution2"
      />

      <Features
        v-if="$page.markdownPage.features.length > 0"
        :main="$page.markdownPage.featuresMain"
        :features="$page.markdownPage.features"
      />

      <!-- <HowItWorks
        v-if="$page.markdownPage.howItWorks.length > 0"
        :HIWData="$page.markdownPage.howItWorks"
        :main="$page.markdownPage.howItWorksMain"
      /> -->

      <VerticalNav
        :slides="$page.markdownPage.slides"
        v-if="$page.markdownPage.slide && $page.markdownPage.slides.length > 0"
      />

      <div v-html="$page.markdownPage.content"></div>
      <NewCard
        v-for="card in $page.markdownPage.cards"
        :key="card.id"
        :card="card"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.headerSolution3"
        :header="$page.markdownPage.headerSolution3"
      />

      <Comparison
        v-if="
          $page.markdownPage.comparisonSecs &&
          $page.markdownPage.comparisonSecs.length > 0
        "
        :main="$page.markdownPage.comparisonMain"
        :sections="$page.markdownPage.comparisonSecs"
      />

      <Features
        v-if="$page.markdownPage.features2.length > 0"
        :main="$page.markdownPage.featuresMain2"
        :features="$page.markdownPage.features2"
      />

      <!-- <logoShowcase
        v-if="$page.markdownPage.logos"
        :logos="$page.markdownPage.logos"
      /> -->

      <NewCard
        v-for="card in $page.markdownPage.cards2"
        :key="card.id"
        :card="card"
      />

      <CallToAction
        v-if="$page.markdownPage.cta"
        :cta="$page.markdownPage.cta"
      />

      <g-image
        v-if="$page.markdownPage.solution_image4"
        :src="$page.markdownPage.solution_image4.src"
      />

      <SignUp
        v-if="$page.markdownPage.signup"
        :signup="$page.markdownPage.signup"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel"
        v-if="$page.markdownPage.brandPanel"
      />

      <!-- <SplitWithImage
      :split="$page.markdownPage.splitWithImage"
        v-if="$page.markdownPage.splitWithImage"
      /> -->
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    markdownPage(id: $id) {
        id
        path
        content
        header_excerpt
        header_altImg
        header_title
        header_image
        button
        link
        solution_image
        solution_image2
        solution_image3
        solution_image4
        slides{
          id
          title
          content
          image
          order
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
        cards2{
          id
          title
          image
          button
          link
          order
          content
        }
       contactData{
         id
         title
         mail
         phone
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
       headerSolution{
         subtitle
         content
       }
        headerSolution2{
        subtitle
        content
       }
        headerSolution3{
         subtitle
         content
         btn1
         link1
       }
        headerSolution4{
        subtitle
        content
        btn1
        link1
       }
       howItWorks{
         id
         title
         content
       }
       brandPanel{
         id
         title
         subtitle
         content
         sourceUrl
         btnTxt
         image
       }
       splitWithImage{
         id
         subtitle
         title
         content
         sourceUrl
         btnTxt
         image
       }
       howItWorksMain{
         id
         title
         image
       }
       productData{
        id
         title
        content
       }
        featuresMain{
          id
          title 
          btn 
          link
          content
        }
        featuresMain2{
          id
          title
          btn 
          link
          content
        }
        featuresMain3{
          id
          title
          btn 
          link
          content
        }
        logos{
          id
          image
        }
        features{
          id
          title 
          svg
          content
        }
        features2{
          id
          title 
          svg
          content
        }
        features3{
          id
          title 
          svg
          content
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
import BrandPanel from "~/components/marketing/sections/cta-sections/BrandPanel.vue";
import SplitWithImage from "~/components/marketing/sections/cta-sections/SplitWithImage.vue";

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
    BrandPanel,
    SplitWithImage,
  },
  metaInfo() {
    return {
      title: this.pageName,
    };
  },
  computed: {
    pageName() {
      let path = this.$route.path.substring(1);
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
